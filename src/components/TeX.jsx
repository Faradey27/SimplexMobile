/** @jsx React.DOM */
'use strict';

let React = require('react');

var MarkdownEditor = React.createClass({

    getInitialState() {
        MathJax.Hub.Config({tex2jax:{inlineMath:[['$','$'],['\\(','\\)']]}});

        return {
            value: '$'
        };
    },

    handleChange() {
        this.setState({
            value: this.refs.textarea.getDOMNode().value
        });
    },

    componentDidMount(root) {
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,root]);
    },

    componentDidUpdate(props,state,root) {
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,root]);
    },

    render() {
        console.log(this.props.value);
        return (
          <div className="MarkdownEditor">
            <div
              className="content"
              id="output">{this.props.value}</div>
          </div>
    );

  }
});

module.exports = MarkdownEditor;



