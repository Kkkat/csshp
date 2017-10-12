'use strict';

const fs = global.require('fs');
const path = global.require('path');
const postcss = global.require('postcss');
const imagemin = global.require('imagemin');
const imageminJpegtran = global.require('imagemin-jpegtran');
const imageminPngquant = global.require('imagemin-pngquant');
import log from './hp-log';

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
	log(stylesheetPath);
	fs.readFile(stylesheetPath, 'utf-8', function(err, css){
		postcss(plugins)	// 处理css
			.process(css, { from: stylesheetPath, to: basePath + '/dist/css/' + pathObj.base })
			.then(result => {
				fs.writeFile(path.join(basePath, '/dist/css/', pathObj.base), result.css, function(err){
					if(err) {
						log(err.toString(), 'fail');
					}else {
						// 压缩雪碧图
						imagemin([path.join(basePath, '/dist/img/spr*.png')],path.join(basePath, '/dist/img/'), {
							plugins: [
								imageminJpegtran(),
								imageminPngquant({quality: '65-80'})
							]
						}).then(files => {
							log('success: ' + path.join(basePath, '/dist/css/', pathObj.base), 'success');
							console.log(files);
						});
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
	log(htmlPath);
	fs.readFile(htmlPath, function(err, data){
		if(err){
			log(err.toString(), 'fail');
		}else {
			let html = data;
			fs.writeFile(path.join(basePath, '/dist/', pathObj.base), html.toString(), function(err){
				if(err){
					log(err.toString(), 'fail');
				}else {
					log('success: ' + path.join(basePath, '/dist/', pathObj.base), 'success');
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
function handleImage(image, imgQuant) {
	let pathObj = path.parse(image[0].path);
	let basePath = pathObj.dir.split(path.sep).slice(0,-1).join(path.sep),
		outputPath = pathObj.dir.split(path.sep);
	outputPath.splice(-1, 0, 'dist');
	outputPath = outputPath.join(path.sep);
	// 创建本地文件夹
	existsFloder(basePath, outputPath);
	if(imgQuant) {
		let imagePath = [];
		for(let i = 0; i < image.length; i++) {
			imagePath.push(image[i].path);
		}
		imagemin(imagePath, path.join(outputPath), {
			plugins: [
				imageminJpegtran(),
				imageminPngquant({quality: '65-80'})
			]
		}).then(files => {
			log('success', 'success');
			console.log(files);
			//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …] 
		});
	}else {
		for(let i = 0; i < image.length; i++) {
			log(image[i].path);
			log('<br/>');
			let input = fs.createReadStream(image[i].path),
				output = fs.createWriteStream(path.join(outputPath, image[i].name));
			input.on('data', function(d) {
				output.write(d);
			});
			input.on('error', function(err) {
				throw err;
			});
			input.on('end', function() {
				output.end();
				log(path.join(outputPath, image[i].name), 'success');
				log('<br/>', 'success');
			});
		}
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