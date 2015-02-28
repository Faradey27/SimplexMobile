/** @jsx React.DOM */
'use strict';

let React = require('react');
window.PubSub = require('pubsub-js');

let Constants = require('./UI/eventConstants.json');

let StartPage = require('./../pages/StartPage.jsx');
let CalculationPage = require('./../pages/CalculationPage.jsx');

require('./UI.less');

let UI = React.createClass({

    getInitialState() {
        return {
            functionType: null
        };
    },

    componentDidMount() {
        this.setSubscribers();
    },

    setSubscribers() {
        let handleFunctionTypeChange = ( msg, type ) => {
            this.setState({
                functionType: type
            });
        };
        PubSub.subscribe(Constants.CHANGE_FUNCTION_TYPE, handleFunctionTypeChange );
    },

    render() {

        let page = this.state.functionType
            ? <CalculationPage type={this.state.functionType}/>
            : <StartPage />;

        return (
            <div className='UI'>
                {page}
            </div>
        );
    }
});

module.exports = UI;