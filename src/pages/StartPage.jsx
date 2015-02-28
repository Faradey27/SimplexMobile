/** @jsx React.DOM */
'use strict';

let React = require('react');

let DesideButton = require('./../components/DesideButton.jsx');

let Constants = require('./../ui/UI/eventConstants.json');


require('./StartPage.less');

let StartPage = React.createClass({

    setSimplexFunctionType(type) {
        PubSub.publishSync(Constants.CHANGE_FUNCTION_TYPE, type);
    },

    render() {

        return (
            <div className='StartPage'>
                <DesideButton title="Max"
                              handleClick={this.setSimplexFunctionType.bind(this, "max")} />
                <DesideButton title="Min"
                              handleClick={this.setSimplexFunctionType.bind(this, "min")} />
            </div>
        );
    }
});

module.exports = StartPage;