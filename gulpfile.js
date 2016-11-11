var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    ngConcat = require('gulp-ngconcat'),
    concat = require('gulp-concat'),
    destination = './dist';

        gulp.task('default', [
            'js',
            'css',
            'sass'
        ]);

        gulp.task('js', function () {
            gulp.src('./app/**/*.js')
                .pipe(ngConcat('app.js'))
                .pipe(gulp.dest(destination))
        });

        gulp.task('css', function () {
            gulp.src('./app/**/*.css')
                .pipe(cleanCSS())
                .pipe(concat('app.min.css'))
                .pipe(gulp.dest(destination))
        });

        gulp.task('sass', function(){
            return gulp.src('app/*.sass')
                .pipe(sass())
                .pipe(gulp.dest('./app'))
                .pipe(browserSync.reload({stream: true}))
        });

        gulp.task('serve', ['default'], function() {
            browserSync({
                server: {
                    baseDir: './'
                },
                notify: false
            });

            gulp.watch("app/**/*.css", ['css'], {cwd: './'}, reload);
            gulp.watch("app/**/*.sass", ['sass'], {cwd: './'}, reload);
            gulp.watch("app/**/*.js", ['js'], {cwd: './'}, reload);
            gulp.watch("app/**/*.*", {cwd: './'}, reload);
        });