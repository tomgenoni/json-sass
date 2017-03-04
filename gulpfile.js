var gulp = require("gulp");
var sass = require("gulp-sass");
var jsonImporter = require('node-sass-json-importer')

gulp.task("sass", function () {
  return gulp.src("foo.scss")
    .pipe(sass({
      importer: [jsonImporter]
    }))
    .pipe(gulp.dest('./build'))
});
