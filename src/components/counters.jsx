import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 16 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 8 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter onDelete={this.handleDelete} key={item.id} counter={item} />
        ))}
      </div>
    );
  }
}

export default Counters;
