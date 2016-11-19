var gulp = require('gulp'),
  minify = require('gulp-minify'),
  gulpIgnore = require('gulp-ignore'),
  replace = require('gulp-replace'),
  imagemin = require('gulp-imagemin'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  pump = require('pump'), 
  fs = require('fs'),
  htmlreplace = require('gulp-html-replace'),
  clean = require('gulp-clean');
  htmlmin = require('gulp-htmlmin');

gulp.task('minifyRootHtml', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minifyHtml', function() {
    return gulp.src('views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('clean', function () {
    return gulp.src('dist/*/**', {read: false})
        .pipe(clean());
});

gulp.task('copy', function () {
    gulp.src('views/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/views/css'));
});

gulp.task('copyRootCss', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});



gulp.task('imageMinify', function() {
    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'))
});


gulp.task('imageRootMinify', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minifyPizzajs', function (cb) {
    pump([
            gulp.src('views/js/*.js'),
            uglify(),
            gulp.dest('dist/views/js')
        ],
        cb
    );
});

gulp.task('minifyRootPizzajs', function (cb) {
    pump([
            gulp.src('js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('default', ['minifyPizzajs', 'minifyHtml','minifyRootHtml', 'imageMinify', 'copyRootCss', 'minifyRootPizzajs','imageRootMinify', 'copy']);
