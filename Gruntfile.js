var sources = ['public/scripts/*.js', '!public/scripts/client.min.js']
module.exports = function (grunt){
  //initializing configs
  grunt.initConfig({
    //uglify task
    uglify:{
      dist: {
        // ! is the except description
        src: sources,
        dest: 'public/scripts/client.min.js'
      }
    },
    //clean task
    clean:['public/scripts/client.min.js', 'public/vendors/*'],
  // watch task
    watch: {
      files: sources,
      tasks: ['default']
    },
    //copy task
    copy: {
      files: {
        src:['node_modules/angular/angular.min.js'],
        dest:'public/vendors/',
        expand: true,
        flatten: true
      }
    }
  });
  //loading all of the tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //declaring the default task(optional)
  grunt.registerTask('default', ['clean','uglify','copy']);

};
