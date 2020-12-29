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

  handleDelete = (a) => {
    console.log("Event handler Called", a);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter
            onDelete={this.handleDelete}
            key={item.id}
            value={item.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
