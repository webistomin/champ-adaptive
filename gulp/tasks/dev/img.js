const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

gulp.task('copy:img', function() {

  return gulp.src('./src/img/*.{jpg, jpeg, png, webp, gif, svg}')
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {

        return {
          title: 'Images',
          message: err.message,
        };

      }),
    }))
    .pipe(gulp.dest('./build/img'))
    .pipe(browserSync.stream());

});
