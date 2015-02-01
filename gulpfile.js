var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var sixto5ify = require('6to5ify');

gulp.task('browserify', function () {
  var bundleStream = browserify('./src/js/main.js')
    .transform(sixto5ify)
    .transform(reactify)
    .bundle();

  bundleStream
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src(['./src/index.html'])
    .pipe(gulp.dest('dist'));

  gulp.src(['./src/css/main.css'])
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function () {
  gulp.watch('src/**/**/*.*', ['default']);
});
