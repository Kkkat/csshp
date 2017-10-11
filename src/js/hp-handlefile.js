'use strict';

const fs = global.require('fs');
const path = global.require('path');
const postcss = global.require('postcss');

export { handleCss, handleHtml, handleImage };
/**
* 操作css
*
* @param {string} stylesheetPath
*/
function handleCss(stylesheetPath, plugins) {

	let pathObj = path.parse(stylesheetPath);
	let basePath = pathObj.dir.split(path.sep).slice(0,-1).join(path.sep);
	existsFloder(basePath, path.join(basePath, '/dist/css/'));
	fs.readFile(stylesheetPath, 'utf-8', function(err, css){
		postcss(plugins)
			.process(css, { from: stylesheetPath, to: basePath + '/dist/css/' + pathObj.base })
			.then(result => {
				fs.writeFile(path.join(basePath, '/dist/css/', pathObj.base), result.css, function(err){
					if(err) {
						console.error(err);
					}else {
						alert('success');
					}
					if(result.map)
						fs.writeFileSync(basePath + '/dist/css/' + pathObj.base + '.map', result.map);
				});
			});
	});

}

/**
* 操作html
*
* @param {string} htmlPath
*/
function handleHtml(htmlPath) {
	let pathObj = path.parse(htmlPath);
	let basePath = pathObj.dir;
	existsFloder(basePath, htmlPath);
	fs.readFile(htmlPath, function(err, data){
		if(err){
			console.error(err);
		}else {
			let html = data;
			fs.writeFile(basePath + '/dist/' + pathObj.base, html.toString(), function(err){
				if(err){
					console.error(err);
				}else {
					alert('success');
				}
			});
		}
	});
}

/**
* 操作图片
*
* @param {Array} image
*/
function handleImage(image) {
	let pathObj = path.parse(image[0].path);
	let basePath = pathObj.dir.split(path.sep).slice(0,-1).join(path.sep),
		outputPath = pathObj.dir.split(path.sep);
	outputPath.splice(-1, 0, 'dist');
	outputPath = outputPath.join(path.sep);
	// 创建本地文件夹
	existsFloder(basePath, outputPath);
	for(let i = 0; i < image.length; i++) {
		let input = fs.createReadStream(image[i].path),
			output = fs.createWriteStream(outputPath + path.sep + image[i].name);
		input.on('data', function(d) {
			output.write(d);
		});
		input.on('error', function(err) {
			throw err;
		});
		input.on('end', function() {
			output.end();
		});
	}
}

/**
* 判断文件夹是否存在
*
*@param {string} basePath
*@param {string} url
*/
function existsFloder(basePath, url) {

	fs.exists(path.join(basePath, '/dist/'), function(ext){
		if(!ext) {
			fs.mkdir(path.join(basePath, '/dist/'), function(err){
				if(!err) {
					fs.exists(url, function(ext){
						if(!ext){
							fs.mkdir(url, function(err){
								if(err) console.error(err);
							});
						}
					});
				}
			});
		}else {
			fs.exists(url, function(ext){
				if(!ext){
					fs.mkdir(url, function(err){
						if(err) console.error(err);
					});
				}
			});
		}
	});

}