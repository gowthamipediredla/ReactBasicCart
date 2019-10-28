import React, { Component } from "react";
import Counter from "./Counter";
import NavBar from "../Components/Navbar";
export default class Counters extends Component {
  state = {
    counters: [
      { id: Math.random(), value: 0 },
      { id: Math.random(), value: 1 },
      { id: Math.random(), value: 2 },
      { id: Math.random(), value: 6 }
    ]
  };

  dleteHandler = id => {
    console.log("delete", id);
    const counter = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counter });
  };

  resetState = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(this.state.counter);
    this.setState({ counter });
    console.log(this.state.counter);
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters: counters
    });
  };
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundImage:
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/hero-background.jpg"
        }}
      >
        <NavBar counter={this.state.counters.filter(c => c.value > 0).length} />
        <button onClick={this.resetState} className="btn btn-primary m-3">
          Reset
        </button>
        {this.state.counters.map(ctr => (
          <Counter
            key={ctr.id}
            id={ctr.id}
            value={ctr.value}
            deleteHAndler={this.dleteHandler}
            counter={ctr}
            handleIncrement={this.handleIncrement}
            selected
          />
        ))}
      </div>
    );
  }
}
