const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(done) {

  // ESLint 실행

//  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
//    .pipe(eslint())
//    .pipe(eslint.format());

  // 노드 소스
  gulp.src("es6/**/*.js")
    .pipe(babel(
    	{"presets": ["@babel/preset-env"]}
    ))
    .pipe(gulp.dest("dist"));

  // 브라우저 소스
  gulp.src("public/es6/**/*.js")
    .pipe(babel(
    	{"presets": ["@babel/preset-env"]}
    ))
    .pipe(gulp.dest("public/dist"));

  // done을 넣으면 해결!!
  done();

});
