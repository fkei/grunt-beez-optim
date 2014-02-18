/*
 * grunt-beez-optim
 * https://github.com/fkei/grunt-beez-optim
 *
 * Copyright (c) 2014 fkei
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Configuration to be run.
        beez_optim: {
            options: [
                {
                    srcdir: __dirname + '/example/image',
                    options: {
                        optipng: {
                            use: true,
                            level: 2
                        },
                        jpegoptim: {
                            use: true,
                            options: '--strip-all'
                        },
                        pngquant: {
                            use: true,
                            options: "--ext .png -f -v"
                        }
                    }
                },
                {
                    srcdir: __dirname + '/example/image',
                    options: {
                        optipng: {
                            use: true,
                            level: 2
                        },
                        jpegoptim: {
                            use: true,
                            options: '--strip-all'
                        },
                        pngquant: {
                            use: true,
                            options: "--ext .png -f -v"
                        }
                    }
                }
            ]
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', [
        'beez_optim'
    ]);

    grunt.registerTask('default', [
        'jshint',
    ]);

};
