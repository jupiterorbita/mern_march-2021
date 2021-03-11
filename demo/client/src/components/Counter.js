import React from "react";

class Counter extends React.Component {
  /**
   * @param {Object} props -> 🎈The attributes from this componetns tag
   * <Counter id="example" increment={5} />
   * id is a key with "example" as the value.
   * increment is a key with 5 as the value.
   */
  constructor(props) {
    console.log(props);

    // calls the constructor of the parent class
    super(props);

    // anything that can change in the state to keep track of the curr state.
    this.state = {
      count: 0,
      clickDates: [],
    };
  }

  handleClick = (e) => {
    this.setState({
      count: this.state.count + 1,
      clickDates: [...this.state.clickDates, new Date()],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>count: {this.state.count} from Counter Component!</button>
        {/* whenever react sees an array it loops over it and displays it */}
        {/* <ul>{[<li>1</li>, <li>2</li>]}</ul> */}
        <ul>
          {this.state.clickDates.map((dateObj, i) => {
            return <li key={i}>{dateObj.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Counter;
