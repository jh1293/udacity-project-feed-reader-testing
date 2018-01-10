let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('debug', () => {
  browserSync.init({
    server: {
      baseDir: './',
      proxy: 'localhost:1080'
    }
  });
});
