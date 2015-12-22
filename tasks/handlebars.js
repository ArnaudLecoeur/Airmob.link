'use strict';

var gulp		= require('gulp');
var config		= require('./config.json');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');


// Compile handlebars templates
gulp.task('handlebars', function () {
	return gulp.src(config.handlebars.src)
	.pipe(handlebars(
		{firstName: 'JC'},
		{batch: ['src/templates/partials']}
	))
	.pipe(rename({extname: '.html'}))
	.pipe(gulp.dest(config.buildDir));
});


// GLOB POUR POUVOIR UTILISER LES PARTIALS (BATCH) AVEC DES PATHS DIFFÉRENTS!
// IDEM POUR RENOMER LES FICHIERS EN .HTML !!