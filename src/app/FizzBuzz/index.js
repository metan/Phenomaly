import React from 'react';

export default class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      sentence: ''
    };
    this.increment = this.increment.bind(this);
  }

  checkNum(num) {
    let sentence = '';
    num % 15 === 0 && num !== 0 ? sentence = 'FizzBuzz':
    num %  5 === 0 && num !== 0 ? sentence = 'Buzz':
    num %  3 === 0 && num !== 0 ? sentence = 'Fizz':
                                  sentence = '';

    this.setState({ sentence });
  }

  increment() {
    let count = this.state.count + 1;
    this.setState({ count: count });
    this.checkNum(count);
  }

  render() {
    return (
      <div className="fizzbuzz">
        <div className="row">
          <h2 className='box pull-left'>{this.state.count}</h2>
          <h2 className={'box ' + this.state.sentence}>{this.state.sentence}</h2>
        </div>
        <div className="row">
          <button onClick={this.increment} className='btn btn-success btn-wide'>Add 1</button>
        </div>
      </div>
    );
  }
}
