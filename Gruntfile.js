
    //Gruntfile
    module.exports = function(grunt) {


        grunt.initConfig({
            devserver: {
                server: {}
            },
            pkg: grunt.file.readJSON('package.json'),
            // connect: {
            //     main: {
            //         port: 1337,
            //         base: 'src'

            //     }
            // },
            include_bootstrap: {

            },
            cssmin: {
                combine: {
                    files: {
                        'src/main.css': [
                            'src/dist/css/menu/menu.css',  
                            'src/dist/css/bootstrap/bootstrap.css', 
                            'src/dist/css/d3/d3_map_color_ranges.css' 
                        ]
                    }
                }
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
                        'src/dist/js/d3/d3.v3.min.js',
                        'src/dist/js/bootstrap.js'
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
        // used to load JS into one file
        grunt.loadNpmTasks('grunt-contrib-concat');
        // Used to load Css Files into a distination
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-devserver');
//        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', 'connect:main');

        // Task definition
//        grunt.registerTask('default', ['watch']);

    };
