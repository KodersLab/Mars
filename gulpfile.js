var gulp = require('gulp');

gulp.task('styles', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');
    var less = require('gulp-less');
    var path = require('path');

    return gulp.src('./less/whisky.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'less') ]
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['styles']);
});

gulp.task('default', ['styles']);