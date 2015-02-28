/** @jsx React.DOM */
'use strict';

let React = require('react');

let DesideButton = require('./../components/DesideButton.jsx');
let TeX = require('./../components/TeX.jsx');
let Input = require('./../components/Input.jsx');

let Constants = require('./../ui/UI/eventConstants.json');

require('./DataEnterPage.less');

let DataEnterPage = React.createClass({

    getFormatFunction() {
        let type = this.props.type;

        let calculatedVariables = this.props.values.map((data, i) => {

            if (data === "" || data === "0") {
                return "";
            } else if (data >= 0 && !i) {
                return data + "x_"+(i+1);
            } else if (data >= 0) {
                return "+" + data + "x_"+(i+1);
            } else if (data < 0 ) {
                return "" + data + "x_"+(i+1);
            }

            return "";
        });

        let result = "";

        calculatedVariables.forEach((data) => {
            result += data;
        });

        return '$' + type +"(" + result + ")" + '$';
    },

    addVariable() {
        let input = this.refs.input;
        PubSub.publish(Constants.ADD_VARIABLE, input.getValue());
        this.refs.input.clearVal();
        setTimeout( () => {
            $('input', this.refs.input.getDOMNode()).focus()
        }, 400);
    },

    render() {
        let values = this.props.values;
        let nextVariable = values && (values.length + 1);

        return (
            <div className='DataEnterPage'>
                <TeX value={this.getFormatFunction()}/>
                <DesideButton title="Add variable"
                              handleClick={this.addVariable} />
                <Input variable={"x_"+nextVariable}
                       handleClick={this.addVariable}
                       ref="input"/>
                <DesideButton title="Next step"
                              className="next"
                              handleClick={this.addVariable} />
            </div>
        );
    }
});

module.exports = DataEnterPage;