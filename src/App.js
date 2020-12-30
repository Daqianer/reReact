import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters.jsx";
import Navbar from "./components/navbar.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 16 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 8 },
    ],
  };
  constructor() {
    super();
    console.log("APP - constructor");
  }

  componentDidMount() {
    console.log("App - mounted");
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
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <Navbar
          countersNum={this.state.counters.filter((c) => c.value !== 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
