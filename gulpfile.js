var {src, dest, watch, series} =  require('gulp');
var sass = require('gulp-sass')(require('sass'));
var	browserSync = require('browser-sync');
var jade = require('gulp-jade');

var log = (done) => {
    console.log('Hello Gulp!');
    done();
}

var html = (done) => {
    src('./jade/index/index.jade')
		.pipe(jade({pretty: false}))
		.pipe(dest('dist'));
    done();
}

var css = (done) => {
	src('./sass/*.sass')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(dest('dist/css'));
	done();
}



async function browser() {
    browserSync.init(['./css/*.css', './js/*.js', './*.html'],{ server:{baseDir:'./dist'}});
}

async function update() {
    watch(['sass/*.sass', 'sass/*/*.sass'], css);
    watch('./jade/index/*/*.jade', html);
}


var move = (done) => {
    src('./css/*')
        .pipe(dest('dist/css'));
    src('./flaticon/*')
        .pipe(dest('dist/flaticon'));
    src('./fonts/*')
        .pipe(dest('dist/fonts'));
    src('./js/*')
        .pipe(dest('dist/js'));
    src('./photo/*')
        .pipe(dest('dist/photo'));
    src('./svg/*')
        .pipe(dest('dist/svg'));
    src('./favicon.ico')
        .pipe(dest('dist/'));
    src('./robots.txt')
        .pipe(dest('dist/'));
    done();
}

exports.move = move;
exports.log = log;
exports.html = html;
exports.css = css;
exports.browser = browser;
exports.update = update;
exports.default = series(move,html, css, browser, update);