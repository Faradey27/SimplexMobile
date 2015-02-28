/** @jsx React.DOM */
'use strict';

let React = require('react');

let DesideButton = require('./../components/DesideButton.jsx');
let DataEnterPage = require('./DataEnterPage.jsx');

let Constants = require('./../ui/UI/eventConstants.json');

require('./CalculationPage.less');

let CalculationPage = React.createClass({

    getInitialState() {
        return {
            values: []
        };
    },

    componentDidMount() {
        let handleFunctionTypeChange = ( msg, value ) => {
            this.state.values.push(value);
            this.forceUpdate();
        };
        PubSub.subscribe(Constants.ADD_VARIABLE, handleFunctionTypeChange );
    },

    goBack() {
        PubSub.publish(Constants.CHANGE_FUNCTION_TYPE, null);
    },

    sumbitValues() {

    },

    render() {

        return (
            <div className='CalculationPage'>
                <DesideButton title="Go back"
                              handleClick={this.goBack} />
                <DataEnterPage type={this.props.type}
                               values={this.state.values}/>
            </div>
        );
    }
});

module.exports = CalculationPage;