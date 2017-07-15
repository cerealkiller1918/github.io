var gulp = require('gulp');
var	sass = require('gulp-sass');
var	browserSync = require('browser-sync');
var pug = require('gulp-pug');
var	paths = {scss:'./sass/*.sass'};

gulp.task('sass', function (){
	gulp.src('./sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('pug' , function(){
	gulp.src('./pug/index/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'));
});


gulp.task('brower-sync', function(){
	browserSync.init(['./css/*.css', './js/*.js', './*.html'],{ server:{baseDir:'./'}});
});



gulp.task('watch', function(){
	gulp.watch(['sass/*.sass', 'sass/*/*.sass'],['sass']);
	gulp.watch('./pug/*/*.pug',['pug']);
});

gulp.task('default',['pug', 'sass', 'brower-sync', 'watch']);
