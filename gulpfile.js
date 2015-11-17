var bem           = require('postcss-bem');
var nested        = require('postcss-nested');
var gulp          = require('gulp');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var simplevars    = require('postcss-simple-vars');
var babel         = require("gulp-babel");
var browserify    = require('browserify');
var watchify      = require('watchify');
var babelify      = require("babelify");
var util          = require('gulp-util');
var $             = require('gulp-load-plugins')();
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var uglify        = require('gulp-uglify');

gulp.task('css', function () {
  var processors = [
      simplevars,
      autoprefixer({browsers: ['last 1 version']}),
      bem,
      nested
  ];
  return gulp.src('./preCSS/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

var bundler = {
  w: null,
  init: function() {

    this.w = watchify(browserify({
      entries: ['app.js'],
      insertGlobals: true,
      cache: {},
      packageCache: {}
    }));
  },

  bundle: function() {
    console.log('building app');
    return this.w && this.w.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .on('error', $.util.log)
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
  },

  watch: function() {
    this.w && this.w.on('update', this.bundle.bind(this));
  },

  stop: function() {
    this.w && this.w.close();
  }
};

bundler.init();
bundler.bundle();

gulp.task('watch', function() {
  bundler.watch();
  gulp.watch('./preCSS/*.css', ['css']);
});
