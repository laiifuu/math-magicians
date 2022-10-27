import React from 'react';
import Button from './Button';
import CalculatorScreen from './CalculatorScreen';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, operation, next } = this.state;

    return (
      <div className="container">
        <CalculatorScreen total={total} operation={operation} next={next} />
        <Button className="width_25 grey center-text" value="AC" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="%" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="+/-" onClick={this.handleClick} />
        <Button className="width_25 pink center-text" value="÷" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="7" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="8" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="9" onClick={this.handleClick} />
        <Button className="width_25 pink center-text" value="x" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="4" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="5" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="6" onClick={this.handleClick} />
        <Button className="width_25 pink center-text" value="-" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="1" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="2" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="3" onClick={this.handleClick} />
        <Button className="width_25 pink center-text" value="+" onClick={this.handleClick} />
        <Button className="width_50 grey center-text" value="0" onClick={this.handleClick} />
        <Button className="width_25 grey center-text" value="." onClick={this.handleClick} />
        <Button className="width_25 pink center-text" value="=" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
