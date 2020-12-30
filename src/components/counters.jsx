import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset}>Reset</button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
