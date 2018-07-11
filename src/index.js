import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

// state: { count: 0 }

// Add a +3 button
// Add a -5 button

// normal pattern for initial reducer state
const reducer = (oldState = { count: 0 }, action) => {
  console.log(oldState, action);
  let newState = oldState;
  if (action.type === "increment") {
    newState = {
      count: oldState.count + 1
    };
  } else if (action.type === "decrement") {
    newState = {
      count: oldState.count - 1
    };
  } else if (action.type === "increment") {
    newState = {
      count: oldState.count + 1
    };
  } else if (action.type === "decrement") {
    newState = {
      count: oldState.count - 1
    };
  return newState;
};

const store = createStore(reducer); // alternate: initial state as second arg

class App extends Component {
  increment = () => {
    let action = { type: "increment" };
    store.dispatch(action);
  };

  decrement = () => {
    let action = { type: "decrement" };
    store.dispatch(action);
  };

  componentDidMount() {
    // obviously a bad hack
    // uses forceUpdate
    // uses subscribe
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <Header count={store.getState().count} />
        <Counter
          count={store.getState().count}
          decrement={this.decrement}
          increment={this.increment}
        />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));