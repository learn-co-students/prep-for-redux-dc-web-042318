import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0 };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };


  render() {
    return (

    <div className="App">
        <Header showCounter={this.state.count} />
        <Counter increment={this.increment} decrement={this.decrement} />
    </div>
    )
  }
}

class Header extends Component {
  render() {
    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      <h3>{this.props.renderDescription}</h3>
        <h1>{this.props.showCounter}</h1>
      </header>;
  }
}

class Counter extends Component {
  
  render() {
    return (
      <div className="Counter">
       
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
