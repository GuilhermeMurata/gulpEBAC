const gulp = require('gulp');

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via Gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    console.log("Ola Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi