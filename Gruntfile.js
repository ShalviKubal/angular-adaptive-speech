module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Default task.
    grunt.registerTask('default', ['karma', 'jshint']);

    var karmaConfig = function(configFile, customOptions) {
        var options = { configFile: configFile, keepalive: true };
        var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };

    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
            options: karmaConfig('test/test.conf.js')
            }
        },
        jshint:{
            files:['src/**/*.js', 'test/**/*.js', 'demo/js/controllers/todoCtrl.js'],
            options: {
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                devel:true,
                globals:{}
            }
        },
        changelog: {
          options: {
            dest: 'CHANGELOG.md'
          }
        }
    });
}
