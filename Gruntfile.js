/*
 * assemble-pattern-lab <https://github.com/assemble/assemble-pattern-lab>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Project metadata
    pkg: grunt.file.readJSON('package.json'),

    // <%= site %> metadata comes from this file
    site: grunt.file.readYAML('.assemble.yml'),

    assemble: {
      options: {
        flatten: true,
        assets: '<%= site.assets %>',

        // Metadata
        pkg: '<%= pkg %>',
        site: '<%= site %>',
        data: ['<%= site.data %>/**/*.json'],
        helpers: ['<%= site.helpers %>/*.js'],
        plugins: '<%= site.plugins %>',

        // General templates
        partials: ['<%= site.includes %>/**/*.hbs'],
        layouts: '<%= site.layouts %>',
        layoutext: '<%= site.layoutext %>',
        layout: '<%= site.layout %>',

        // Pattern Lab templates
        patterns: {
          atoms: ['<%= site.atoms %>/**/*.hbs'],
          molecules: ['<%= site.molecules %>/**/*.hbs'],
          organisms: ['<%= site.organisms %>/**/*.hbs'],
          templates: ['<%= site.templates %>/**/*.hbs'],
        }
      },

      // 'pages' are specified in the src
      site: {
        src: ['<%= site.pages %>/*.hbs', 'src/*.hbs'],
        dest: '<%= site.dest %>/'
      },

      patterns: {
        options: {
          permalinks: {
            preset: 'pretty',
            structure: ':pattern-:group',
            patterns: [
              {
                pattern: /:pattern/,
                replacement: function(src) {
                  return this.src.split('/')[1];
                }
              },
              {
                pattern: /:group/,
                replacement: function(src) {
                  return this.src.split('/')[2];
                }
              }
            ]
          }
        },
        src: ['<%= site.patterns %>/**/*.hbs'],
        dest: '<%= site.dest %>/patterns/'
      }
    },

    clean: {
      examples: ['<%= assemble.examples.dest %>/**']
    }
  });

  // Load Assemble
  grunt.task.loadNpmTasks('assemble');

  // The default task to run with the `grunt` command
  grunt.registerTask('default', ['assemble']);
};