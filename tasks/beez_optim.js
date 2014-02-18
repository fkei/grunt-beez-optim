/*
 * grunt-beez-optim
 * https://github.com/fkei/grunt-beez-optim
 *
 * Copyright (c) 2014 fkei
 * Licensed under the MIT license.
 */

'use strict';

var optim = require('beez-optim');

var description = 'beez-optim makes specify images optimize automatically in build process using grunt.';

module.exports = function(grunt) {

    grunt.registerTask('beez_optim', description, function() {

        var options = this.options();
        var loglevel = optim.logger.LEVELS.INFO;

        if (grunt.cli.options.verbose) {
            loglevel = optim.logger.LEVELS.DEBUG;
        }
        var done = this.async();
        optim.build(options.srcdir, options.options, loglevel, function (err, res) {
            if (err) {
                grunt.log.writeln('Failure :(');
                grunt.fail.fatal(new Error("beez-optim error."));
            } else {
                grunt.log.writeln('Success :)');
            }
            done();
        });
    });
};
