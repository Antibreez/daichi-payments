const gulp = require("gulp");

module.exports = function copy(done) {
  gulp.src([
    "source/fonts/*.{woff2,woff,ttf,eot,svg}",
    "source/*.ico",
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
  done();
}
