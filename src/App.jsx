'use strict';

let $ = window.$ = window.jQuery = require('jquery');
let React = require('react');
let injectTapEventPlugin = require("react-tap-event-plugin");
let UI = require('./ui/UI.jsx');

$(document).ready(function() {
    window.React = React;
    injectTapEventPlugin();
    let rootNode = React.render(<UI />, document.getElementById('react-root'));
    window.onresize = () => rootNode.forceUpdate();
});
