import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
          count: 0
        };
    }
    isVowels = (char) => {
      const VOWELS = ['a', 'e', 'i', 'o', 'u']

      return VOWELS.includes(char.toLowerCase());
    };
    increment = () => {
      this.setState({ count: this.state.count + 1});
    };
    decrement = () => {
      this.setState({ count: this.state.count - 1});
    };
    render () {
      return (
        <div>
          <h2>{this.state.count}</h2>
          <button className="btn-add" onClick={this.increment }>+</button>
          <button className="btn-sub" onClick={this.decrement }>-</button>
      <p className={this.isVowels(this.props.name[0])? "red" : "green"}>
        {this.props.name}
      </p>
        </div>
      );
    }
}
export default Counter;