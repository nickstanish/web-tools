import React, { Component } from 'react';

function Count(props) {
  const { name, value } = props;
  return (
    <div className="count">
      <span className="count-name">{name}: </span>
      <span className="count-value">{value}</span>
    </div>
  )
}

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  onText = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    const { text } = this.state;
    const characterCount = text.length;
    const wordCount = (text.match(/(\w+)/g) || []).length;
    const alphabeticCount = (text.match(/[a-z]/gi) || []).length;
    const whitespaceCount = (text.match(/\s/g) || []).length;
    return (
      <div id="web-counter">
        <h1>Text Counter</h1>
        <Count name="Character Count" value={characterCount} />
        <Count name="Word Count" value={wordCount} />
        <Count name="Whitespace Count" value={whitespaceCount} />
        <Count name="Alphabetic Count" value={alphabeticCount} />
        <textarea value={this.state.text} onChange={this.onText} />
      </div>
    );
  }
}
