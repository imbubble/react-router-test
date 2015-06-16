var chai = require('chai'),
    sinon = require('sinon'),
    domino = require('domino'),
    assign = require('object-assign'),
    HTML = '<!doctype html><html><body></body></html>',
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils;

// necessary because when React is loaded it looks for a window
// if it's not available, this result is stored
// however we create a virtual window further down
// so override that
// 
// http://stackoverflow.com/a/26872245
require('react/lib/ExecutionEnvironment').canUseDOM = true;


/**
 * STUB ROUTER
 */
var RouterStub = function () {};
assign(RouterStub, {
    makePath: sinon.spy(),
    makeHref: sinon.spy(),
    transitionTo: sinon.spy(),
    replaceWith: sinon.spy(),
    goBack: sinon.spy(),
    getCurrentPath: sinon.spy(),
    getCurrentRoutes: sinon.spy(),
    getCurrentPathname: sinon.spy(),
    getCurrentParams: sinon.spy(),
    getCurrentQuery: sinon.spy(),
    isActive: sinon.spy(),
    getRouteAtDept: sinon.spy(),
    setRouteComponentAtDepth: sinon.spy()
});

var Wrapper = function(Component, props) {
    return React.createClass({
        childContextTypes: {
            router: React.PropTypes.func
        },
        getChildContext: function() {
            return {
                router: RouterStub
            };
        },
        render: function() {
            return React.createElement(Component, props);
        }
    });
};

global.renderShallow = function(Component, props) {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(React.createElement(Wrapper(Component, props)));
    return shallowRenderer.getRenderOutput();
};

global.render = function(Component, props) {
    var clazz = Wrapper(Component, props),
        element = React.createElement(clazz),
        component;
    try {
        component = TestUtils.renderIntoDocument(element);
    } catch(e) {
        console.log(e.stack);
        throw e;
    }
    return component;
};

global.reset = function() {
    global.window = domino.createWindow(HTML);
    global.document = global.window.document;
};

// globals for tests
global.sinon = sinon;
global.expect = chai.expect;
global.TestUtils = TestUtils;
global.React = React;
global.ReactRouter = require('react-router');