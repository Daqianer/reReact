import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete()}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    // if (this.state.tags.length === 0) return <p>You can create new tag</p>;
    // return (
    //   <ul>
    //     {this.state.tags.map((item) => {
    //       return <li key={item}>{item}</li>;
    //     })}
    //   </ul>
    // );
  }

  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = (product) => {
    console.log("Increment Clicked", this, product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
