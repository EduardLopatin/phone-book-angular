var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    mainBowerFiles = require('main-bower-files'),
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
                .pipe(uglify())
                .pipe(ngConcat('app.min.js'))
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

        gulp.task('bowerJs', function() {
            gulp.src(mainBowerFiles('**/*.js'))
                .pipe(uglify())
                .pipe(concat('vendors.min.js'))
                .pipe(gulp.dest(destination))
        });

        gulp.task('bowerCss', function() {
            gulp.src('./bower_components/bootstrap/**/*.css')
                .pipe(cleanCSS())
                .pipe(concat('vendor.min.css'))
                .pipe(gulp.dest(destination))
        });

        gulp.task('serve', ['default'], function() {
            browserSync({
                server: {
                    baseDir: './'
                },
                notify: false
            });

            gulp.watch("app/**/*.*", ['default']);
            gulp.watch(['*.html', './app/**.*'], {cwd: './'}, reload);
        });