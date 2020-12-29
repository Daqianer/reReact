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

  render() {
    return (
      <div>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.counters.map((item) => (
          <Counter
            key={item.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }

  handleDelete = (counterId) => {
    console.log("Event handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default Counters;
