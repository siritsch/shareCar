'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
	console.log('Build shareCar');
	return browserify('./source/app.js')
	.transform(babelify.configure({presets: ['es2015', 'react']}))
	.bundle()
	.pipe(source('sharecar.js'))
	.pipe(gulp.dest('./build/'));
});

