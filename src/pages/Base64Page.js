import React, { Component } from 'react';
import { encode, decode } from '../utils/base64';
import './Base64Page.css';

class Conversion {
  constructor(options = {}) {
    this.input = options.input || '';
  }

  clone(options) {
    const values = {
      input: this.input
    };
    return new Conversion(Object.assign({}, values, options || {}));
  }

  get base64Decoded () {
    try {
      return decode(this.input);
    } catch (e) {
      return new Error('Unable to decode');
    }
  }

  get base64Encoded () {
    return encode(this.input);
  }
}

export default class Base64Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversion: new Conversion(),
      decode: false
    };
  }

  onText = (event) => {
    this.setState({
      conversion: this.state.conversion.clone({ input: event.target.value })
    });
  }

  swap = (event) => {
    this.setState({
      decode: !this.state.decode,
      conversion: this.state.conversion.clone({
        input: this.state.decode ? this.state.conversion.base64Decoded : this.state.conversion.base64Encoded
      })
    });
  }

  render() {
    let labels = [
      'Encoded',
      'Decoded',
    ];

    if (!this.state.decode) {
      labels = labels.reverse()
    }

    let output = this.state.decode ? this.state.conversion.base64Decoded : this.state.conversion.base64Encoded;
    const isError = output instanceof Error;
    if (isError) {
      output = 'Unable to decode';
    }

    return (
      <div className="Base64Page">
        <h1>Base64 Encoder/Decoder</h1>
        <div className="Base64Page-controls">
          <button onClick={this.swap}>Swap</button>
        </div>
        <div className="Base64Page-pane-wrapper">
          <div className="Base64Page-pane">
            <h3>{labels[0]}</h3>
            <textarea value={this.state.conversion.input} onChange={this.onText} />
          </div>
          <div className="Base64Page-pane">
            <h3>{labels[1]}</h3>
            <textarea readOnly value={output} className={isError ? 'error' : ''}/>
          </div>
        </div>
      </div>
    );
  }
}
