import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const count = this.props.counter.value;
    let classes = "badge badge-";
    classes += count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
