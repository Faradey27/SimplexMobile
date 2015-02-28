/** @jsx React.DOM */
'use strict';

let React = require('react');
let TeX = require('./TeX.jsx');


require('./Input.less');

let Input = React.createClass({

    getValue() {
        return $(this.refs.input.getDOMNode()).val();
    },

    clearVal() {
        $(this.refs.input.getDOMNode()).val("");
    },

    handleClick(e) {
        if (e.keyCode == 9) {
            this.props.handleClick();
            e.preventDefault();
        }
    },

    render() {
        let variable = this.props.variable;

        return (
            <div className='Input'>
                <input type="number"
                       onKeyDown={this.handleClick}
                       ref="input"/>
                <span className="text">
                    <TeX value={"$"+variable+"$"}/>
                </span>
            </div>
        );
    }
});

module.exports = Input;