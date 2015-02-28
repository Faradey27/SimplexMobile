/** @jsx React.DOM */
'use strict';

let React = require('react');

require('./DesideButton.less');

let DesideButton = React.createClass({

    handleClick() {
        if (this.props.handleClick) {
            this.props.handleClick();
        }
    },

    render() {

        return (
            <div className='DesideButton'>
                <a className={"desideButton " + this.props.className}
                   onTouchTap={this.handleClick}>
                    {this.props.title}
                </a>
            </div>
        );
    }
});

module.exports = DesideButton;