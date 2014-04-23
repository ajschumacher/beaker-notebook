// Karma configuration
// Generated on Mon Feb 10 2014 10:12:04 GMT-0500 (EST)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine', 'ng-scenario'],


        // list of files / patterns to load in the browser
        files: [
          'src/main/web/vendor/bower_components/jquery/jquery.min.js',
            'src/main/web/vendor/bower_components/angular/angular.js',
            'src/main/web/vendor/bower_components/angular-mocks/angular-mocks.js',
            'src/main/web/vendor/bower_components/underscore/underscore.js',
            'src/main/web/js/module/bkOutputDisplay.js',
            'src/main/web/vendor/bower_components/q/q.js',
            'src/main/web/js/beaker.js',
            'src/main/web/js/outputDisplay/bkoFoo.js',
            'test/unit/main/web/js/outputDisplay/bkoFoo.spec.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};