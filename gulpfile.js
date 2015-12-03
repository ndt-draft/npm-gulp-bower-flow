'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    rename    = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('concat-css', function () {
    return gulp.src([
        'bower_components/normalize-css/normalize.css',
        'assets/css/main.css'
    ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('concat-js', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/masonry/dist/masonry.pkgd.js',
        'bower_components/imagesloaded/imagesloaded.pkgd.js',
        'assets/js/main.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/dist/js'));
});

gulp.task('minify-css', function() {
    return gulp.src('assets/dist/css/style.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('minify-js', function () {
    return gulp.src('assets/dist/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('assets/dist/js'));
});

gulp.task('prepare', ['sass']);
gulp.task('release', ['concat-css', 'concat-js']);
gulp.task('minify',  ['minify-css', 'minify-js']);
