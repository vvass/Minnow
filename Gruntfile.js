//Gruntfile.  This is the over arching object which holds everything together 
//Grunt is just Javascript running in node 
module.exports = function(grunt) {

    //All upfront config goes in a massive nested object-------------------------------------------------------------------------- 
    grunt.initConfig({

        //Allows us to reference properties we declared in package.JSON 
        pkg: grunt.file.readJSON('package.json'),

        //Server stuff 
        devserver: {
            server: {}
        },

        //Includes your bootstrap stuff
        include_bootstrap: {

        },

        //Used for minifying your JS files             
        uglify: {
            options: {
                mangle: false, // Use if you want the names of your functions and variables unchanged
                compress: true,
                preserveComments: false
            }
        }
    }); //The end of grunt.initiConfig------------------------------------------------------------------------------------------


    // We've set up each task's configuration 
    // Now we actually load the tasks 
    // this will do a look up similar to node's require() function 
    grunt.loadNpmTasks('grunt-include-bootstrap');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-devserver');


    // Task definition
    //If I have any Task Definitions I can define them here 
};