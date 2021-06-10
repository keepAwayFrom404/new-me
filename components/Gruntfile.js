module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      domop: {
        src: ['src/ajax.js', 'src/selector.js'],
        dest: 'dest/domop.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dest/domop.js',
        dest: 'dest/domop.min.js'
      }
    },
    svgstore: {
      options: {
        prefix: 'icon-',
        includedemo: true,
      },
      default: {
        files: {
          'dest/dest.svg': ['src/svg/*.svg']
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.registerTask('default', ['svgstore','concat', 'uglify'])
}