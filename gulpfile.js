const gulp = require("gulp");
const sass = require("gulp-sass");
// const uglify = require("gulp-uglify");
const minifycss = require("gulp-minify-css");
// const babel = require("gulp-babel");
// const es2015Preset = require("babel-preset-es2015");



gulp.task("watchall",async()=>{
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("d:\\phpstudy\\www\\wenwen"))
	});

	gulp.watch("img",async()=>{
		gulp.src("img/**/*")
		.pipe(gulp.dest("d:\\phpstudy\\www\\wenwen\\img"))
	});

	gulp.watch("sass/**/*",async()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("d:\\wenwen\\css"))
	})
	

     gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
		.pipe(minifycss())
        .pipe(gulp.dest("d:\\phpstudy\\www\\wenwen\\css"));
    });

    //  gulp.watch("js/*.js",async ()=>{
    //     gulp.src("js/*.js")
    //     .pipe(babel({presets:[es2015Preset]}))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("d:\\phpstudy\\www\\wenwen\\js"));
    // });

})