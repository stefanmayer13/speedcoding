var gulp = require('gulp');
var webpack = require("webpack");
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var gutil = require("gulp-util");

var webpackConfig = require("./webpack.config.js");

gulp.task('default', ['sass', 'webpack', 'watch', 'runserver']);

gulp.task('runserver', function () {
    nodemon({
        script: 'server/index.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' },
        nodeArgs: ['--debug']
    }).on('restart', function () {
        console.log('server restarted!')
    });
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('app/**/*.js', ['webpack']);
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: './scss', style: 'compact'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('css'));
});

var webpackDevConfig = Object.create(webpackConfig);
webpackDevConfig.devtool = "sourcemap";
webpackDevConfig.debug = true;
var devCompiler = webpack(webpackDevConfig);

gulp.task('webpack', function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});