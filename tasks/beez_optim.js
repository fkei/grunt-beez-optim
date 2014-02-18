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
        var tasks = [];

        grunt.util._.each(options, function (options, idx) {
            tasks.push(function (callback) {

                optim.build(options.srcdir, options.options, loglevel, function (err, res) {
                    callback(err, res);
                });
            });

        });


        grunt.util.async.series(tasks, function (err, res) {
            if (err) {
                grunt.log.writeln('Failure :(');
                grunt.fail.fatal(new Error("beez-optim error."));
            } else {
                //if (grunt.cli.options.verbose) {
                //    optim.logger.debug(JSON.stringify(res, null, '    '));
                //}
                grunt.log.writeln('Success :)');
            }
            done();
        });


    });
};
