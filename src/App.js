import React, { Component } from "react";
import Counters from "./Components/Counters";

export default class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}
