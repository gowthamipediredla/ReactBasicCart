import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };
  formarCounter() {
    // console.log(count);
    return this.props.counter.value === 0 ? (
      <h2>ZERO</h2>
    ) : (
      this.props.counter.value
    );
  }
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <h1> there are no tags</h1>;
  //     return this.state.tags.map(tg => <li key={Math.random()}>{tg}</li>);
  //   }

  render() {
    console.log(this.props.counter);
    return (
      <div style={{ textAlign: "center" }}>
        <span className={this.getBadgeClasses()}>{this.formarCounter()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.handleIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.deleteHAndler(this.props.id)}
          className="btn btn-danger m-2"
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
