import React, { Component } from "react";

class Card extends Component {
  // ...
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

export default Card
