var gulp = require('gulp');
var mocha = require('gulp-mocha');
var log = require('gulplog');

gulp.task('mocha', function() {
    return gulp.src(['*.spec.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', log.error);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['*'], gulp.series('mocha'));
});