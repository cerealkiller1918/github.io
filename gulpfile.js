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

var move = (done) => {
    src('.files/fonts/*')
        .pipe(dest("dist/fonts"));
    src('.files/flaticon/*')
        .pipe(dest("dist/flaticon"));
    src('.files/css/*')
        .pipe(dest("dist/css"));
    src('.files/js/*')
        .pipe(dest("dist/js"));
    src('.files/photo/*')
        .pipe(dest("dist/photo"));
    
    done();
}

async function browser() {
    browserSync.init(['./css/*.css', './js/*.js', './*.html'],{ server:{baseDir:'./'}});
}

async function update() {
    watch(['sass/*.sass', 'sass/*/*.sass'], css);
    watch('./jade/index/*/*.jade', html);
}




exports.log = log;
exports.html = html;
exports.css = css;
exports.browser = browser;
exports.update = update;
exports.move = move;
exports.default = series(html, css, browser, update);