var gulp = require("gulp"),
	cleancss = require("gulp-clean-css"),
	livereload = require("gulp-livereload");

gulp.task("css",function(){
	gulp.src("../css/*.css")
		.pipe(cleancss())
		.pipe(gulp.dest("../dist/css"))
		.pipe(livereload())
})
gulp.task("watch",function(){
	livereload.listen();
	gulp.watch("../css/*.css",["css"])
})