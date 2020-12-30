import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset}>Reset</button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
