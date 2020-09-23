import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''
    };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.handleChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
}

export default App;
