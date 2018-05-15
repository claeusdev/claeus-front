var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-sass");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");

gulp.task("default", function(){
	console.log("You made it my brother");
});

gulp.task("jshint", function () {
	gulp.src(["./src/js/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("compile:js", ["jshint"], function () {
	var bundle = browserify("./src/js/main.js").bundle();
	return bundle
	  .pipe(source("app.js"))
	  .pipe(gulp.dest("./public/assets/js"));
});

gulp.task("compile:sass", function () {
	 return gulp.src(["./src/sass/*.sass"])
		.pipe(sass())
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(gulp.dest("./public/assets/css"));
	
});

gulp.task("watch", ["compile:js", "compile:sass"], function () {
	gulp.watch(["./src/js/**/*.js"], ["compile:js"]);
	gulp.watch(["./src/js/**/*.sass"], ["compile:sass"]);
});

