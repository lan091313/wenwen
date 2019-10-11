const gulp = require("gulp");
const sass = require("gulp-sass")




gulp.task("watchall",async()=>{
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("d:\\phpstudy\\www\\wenwen"))
	});

	// gulp.watch("sass/**/*",async()=>{
	// 	gulp.src("sass/**/*")
	// 	.pipe(sass());
	// 	.pipe(gulp.dest("d:\\phpstudy\\www\\wenwen\\css"))
	// })
})