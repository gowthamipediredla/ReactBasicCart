import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    // let { countertotal } = this.props
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a style={{ textAlign: "center" }} className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary">
              {this.props.counter}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}
