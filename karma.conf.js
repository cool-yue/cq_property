const webpackConfig = require('./build/webpack.dev.js');

module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai', 'sinon'],
      files: ['src/test/**/*.spec.js'],
      preprocessors: {
        '**/*.spec.js': ['webpack', 'sourcemap']
      },
      webpack: webpackConfig,
      reporters: ['spec', 'coverage'],
      coverageReporter: {
        dir: './coverage',
        reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
      },
      browsers: ['Chrome']
    });
};