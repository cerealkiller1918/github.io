var gulp = require('gulp');
var	sass = require('gulp-sass');
var	browserSync = require('browser-sync');
var jade = require('gulp-jade');
var	paths = {scss:'./sass/*.sass'};

gulp.task('sass', function (){
	gulp.src('./sass/*.sass')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(gulp.dest('css'));
});

gulp.task('jade' , function(){
	gulp.src('./jade/index/index.jade')
		.pipe(jade({
			pretty: false
			}))
		.pipe(gulp.dest('./'));
});


gulp.task('brower-sync', function(){
	browserSync.init(['./css/*.css', './js/*.js', './*.html'],{ server:{baseDir:'./'}});
});



gulp.task('watch', function(){
	gulp.watch(['sass/*.sass', 'sass/*/*.sass'],['sass']);
	gulp.watch('./jade/*/*.jade',['jade']);
});

gulp.task('default',['jade', 'sass', 'brower-sync', 'watch']);
