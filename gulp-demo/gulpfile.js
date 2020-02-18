var gulp = require("gulp");
var scss = require('gulp-sass');

gulp.task("task",function(){
    return gulp.src('app/scss/styles.scss').
    pipe(scss()).
    pipe(gulp.dest("app/css"));
});