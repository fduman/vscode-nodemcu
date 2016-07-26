module.exports = function () {

    // Local variables
    var root = './';
    var util = root + 'util/';
    var src = './src/';
    var tsSrc = src;
    var jsSrc = root + 'dist/';
    var jsRoot = root + '*.js';
    var jsSrcFiles = '**/*.js';
    var jsModuleFiles = '**/*.module.js';
    var jsMapFiles = '**/*.js.map';
    var jsSpecFiles = '**/*.spec.js';
    var tsSrcFiles = '**/*.ts';
    var tsDefFiles = '**/*.d.ts';
    var typings = './typings/local/';
    var report = './report/';
    var specRunnerFile = 'SpecRunner.html';
    var customBootFile = 'custom.boot.js';

    var config = {

        // Root folder
        root: root,

        // Source folders
        src: src,

        // Build output
        build: './build/',

        // Temp folder
        temp: './.tmp/',

        // Report folder
        report: report,

        // Spec runner html file
        specRunner: root + specRunnerFile,
        specRunnerFile: specRunnerFile,

        // JavaScript settings
        js: {
            root: jsRoot,
            dir: jsSrc,
            src: [
                jsSrc + jsSrcFiles,
                '!' + jsSrc + jsMapFiles,
                '!' + jsSrc + jsSpecFiles
            ],
            order: [
                jsModuleFiles,
                jsSrcFiles
            ],
            specs: [
                jsSrc + jsSpecFiles
            ],
            maps: jsSrc + jsMapFiles,
            srcSpecs: [
                jsSrc + jsSrcFiles,
                '!' + jsSrc + jsMapFiles,
                jsSrc + jsSpecFiles
            ]
        },

        // TypeScript settings
        ts: {
            // Folders
            src: tsSrc,
            out: jsSrc,

            // Source files
            files: [
                tsSrc + tsSrcFiles
            ],

            // Type definitions
            typings: typings,

            // Compiled files
            outFiles: [
                jsSrc + jsSrcFiles,
                jsSrc + jsMapFiles,
                '!' + jsSrc + jsSpecFiles,
                typings + tsDefFiles
            ]
        },

        // Browser sync settings
        browserSync: {
            port: 3000,
            reloadDelay: 1000,
            logLevel: 'info',
            logPrefix: 'spec-runner',
        },

        customBoot: util + customBootFile
    };

    // Karma settings
    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                'src/**/*.spec.ts'
                ),
            exclude: [],
            systemjs: {
                config: {
                    paths: {
                        'typescript': 'node_modules/typescript/lib/typescript.js',
                        'systemjs': 'node_modules/systemjs/dist/system.js',
                        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
                        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
                        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js'
                    },
                    packages: {
                        'src': {
                            defaultExtension: 'ts'
                        }
                    },
                    transpiler: 'typescript'
                },
                serveFiles: [
                    'src/**/*.ts'
                ]
            },
            preprocessors: [],
        };

        return options;
    }
};
