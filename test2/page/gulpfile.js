var gulp = require("gulp");
var webserver = require("gulp-webserver");

gulp.task("webserver", () => {
    return gulp.src("./src/")
        .pipe(webserver({
            open: true,
            port: "8082",
            host: "169.254.191.142",
            livereload: true,
            proxise: [
                { source: "/api/addIncome", target: "http://localhost:3000/api/addIncome" },
                { source: "/api/addPay", target: "http://localhost:3000/api/addPay" }
            ]
        }))
})