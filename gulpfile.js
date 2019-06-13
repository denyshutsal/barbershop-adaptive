'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const server = require('browser-sync').create();

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css'))
    .pipe(csso({
      restructure: false,
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css'))
    .pipe(server.stream());
});

gulp.task('images', function () {
  return gulp.src('source/img/*.{jpg,png,gif}')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('source/img'));
});

// Webp (options) https://github.com/imagemin/imagemin-webp#imageminwebpoptions
// Crop - Object { x: number, y: number, width: number,
// height: number }
// Resize the image. Happens after crop - Object { width: number, height:
// number }
gulp.task('webp', function () {
  return gulp.src('source/img/*.{jpg,png}')
    .pipe(webp({quality: 50}))
    .pipe(gulp.dest('source/img'));
});

gulp.task('svg', function () {
  return gulp.src('source/img/*.svg')
    .pipe(svgmin({
      plugins: [{
        removeTitle: true
      }, {
        removeDesc: true
      }, {
        removeViewBox: false
      }, {
        removeDimensions: true
      }, {
        sortAttrs: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 0,
          leadingZero: true,
          defaultPx: true,
          convertToPx: true
        }
      }],
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('source/img'));
});

gulp.task('svgstore', function () {
  return gulp.src('source/img/icon-*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('source/img'));
});

gulp.task('server', function () {
  server.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(['source/sass/*.scss', 'source/sass/blocks/*.scss'], gulp.series('css'));
  gulp.watch('source/*.html').on('change', server.reload);
  gulp.watch('source/js/*.js').on('change', server.reload);
});

gulp.task('start', gulp.series('css', 'server'));
