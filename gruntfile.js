module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                files: [{
                    src: 'app/sass/main.scss',
                    dest: 'public/css/main.css'
                }]
            }
        },
        cssmin: {
            target: {
                src: "public/css/main.css",
                dest: "public/css/main.min.css"
            }
        },
        watch: {
            css: {
                files: ['app/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}