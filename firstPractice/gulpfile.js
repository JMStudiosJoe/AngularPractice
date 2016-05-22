var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')


gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
  gulp.watch('src/**/*.html')
})

gulp.task('js', function () {
  gulp.src(['src/module.js','src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})