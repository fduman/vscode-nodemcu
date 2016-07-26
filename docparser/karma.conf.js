// Karma configuration
// Generated on Fri Jan 08 2016 10:17:15 GMT+0100 (CET)

module.exports = function (config) {

    // Require gulp.config
    var gulpConfig = require('./gulp.config')();

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        plugins: [
            'karma-systemjs',
            'karma-phantomjs-launcher',
            'karma-typescript-preprocessor',
            'karma-jasmine',
            'karma-mocha-reporter'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['systemjs', 'jasmine'],

        reporters: ['mocha'],

        files: gulpConfig.karma.files,

        // list of files to exclude
        exclude: gulpConfig.karma.exclude,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: gulpConfig.karma.preprocessors,

        systemjs: gulpConfig.karma.systemjs,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
        // || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
