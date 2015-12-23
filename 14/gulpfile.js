var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback')

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            middleware: [historyApiFallback()]
        }
    });
});
