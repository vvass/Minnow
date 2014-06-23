
    //Gruntfile
    module.exports = function(grunt) {


        grunt.initConfig({
            devserver: {
                server: {}
            },
            pkg: grunt.file.readJSON('package.json'),
            connect: {
                main: {
                    port: 1337,
                    base: 'src'

                }
            },
            include_bootstrap: {

            },
            concat: {
                options: {
                    separator: ';',
                    stripBanners: true,
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                dist: {
                    src: [
                        //models
//                        'src/model',
                        //controllers
//                        'src/project.js',
                        //views
                        'src/view/test.js'

                    ],

                    dest: 'src/main.js'
                }
            },
            uglify: {
                options: {
                    mangle: false,  // Use if you want the names of your functions and variables unchanged
                    compress: true,
                    preserveComments:false
                }
            }
//            watch: {
//                files: ['**/*.js'],
//                tasks: ['concat','uglify'],     //tasks to run
//                livereload: {
//                    // Here we watch the files the sass task will compile to
//                    // These files are sent to the live reload server after sass compiles to them
//                    options: { livereload: true },
//                    files: ['dest/**/*']
//                }
//            }
        });


        // Plugin loading
        grunt.loadNpmTasks('grunt-connect');
        grunt.loadNpmTasks('grunt-include-bootstrap');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-devserver');
//        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', 'connect:main');

        // Task definition
//        grunt.registerTask('default', ['watch']);

    };
