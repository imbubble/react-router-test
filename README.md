# React Router Test

For some reason the tests work fine with mocha, but not when webpack bundles stuff beforehand.

## Usage

    # run tests directly with mocha
    # -> should pass
    npm run-script mocha
    
    # run tests with webpack bundling
    # -> should break
    npm run-script webpack
