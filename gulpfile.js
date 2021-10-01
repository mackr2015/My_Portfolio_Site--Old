const dir = {
  build: './src/build/',
  theme: './src/theme/'
};

let gulp          = require('gulp'),
concat        = require('gulp-concat'),
sass          = require('gulp-sass'),
autoprefixer  = require('gulp-autoprefixer'),
sourcemaps    = require('gulp-sourcemaps'),
addsrc        = require('gulp-add-src'),
rename        = require('gulp-rename'),
browserSync   = require('browser-sync').create();



// Browser Sync task
function browserSyncTask(){
let files = [
dir.theme + '*.html',
dir.build + 'css/**/*.css',
dir.build + 'sass/**/*.scss',
dir.build + 'js/**/*.js',
dir.theme + 'js/**/*.js'
];
// Initialize BrowserSync
browserSync.init(files,{
// server: './src/theme'
server: {
  baseDir: './src/theme'
  // index: "index.php"
}
});

}

let autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };

function sassCompile(){
return gulp.src(dir.build + 'sass/main.scss')
.pipe(sourcemaps.init( {loadMaps: false} ))
.pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
.pipe(autoprefixer(autoprefixerOptions))
.pipe(rename('style.css'))
.pipe(sourcemaps.write())

// .pipe(concat('style.css'))
.pipe(gulp.dest(dir.theme +'.'))
.pipe(browserSync.stream())
}
// exports.sass = sass;


// // Watch Task
// gulp.task('default', ['browser-sync', 'sass'], function() {
//   gulp.watch(dir.build + 'sass/*.scss', ['sass']);
//   gulp.watch(dir.theme + '*.html');
// });

function gulpWatch(){
gulp.watch(dir.build + 'sass/**/*.scss', sassCompile);
}


// New Gulp 4.0 
gulp.task('default', gulp.parallel(gulpWatch, browserSyncTask)); 


// gulp.task('compress', gulp.series(compressCSS));