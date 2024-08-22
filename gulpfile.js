'use strict'

const gulp = require('gulp')
const livereload = require('gulp-livereload')
const browsersync = require('browser-sync')
const reload = browsersync.reload

gulp.task('watch', function(){
	browsersync.init({
		server: "./"
	})
	gulp.watch("./**").on('change', reload)
})

gulp.task('default', gulp.series('watch'))