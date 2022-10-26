import React from 'react';
import Button from './Button';
import CalculatorScreen from './CalculatorScreen';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <CalculatorScreen />
        <Button className="width_25 grey center-text" value="AC" />
        <Button className="width_25 grey center-text" value="%" />
        <Button className="width_25 grey center-text" value="+/-" />
        <Button className="width_25 pink center-text" value="/" />
        <Button className="width_25 grey center-text" value="7" />
        <Button className="width_25 grey center-text" value="8" />
        <Button className="width_25 grey center-text" value="9" />
        <Button className="width_25 pink center-text" value="*" />
        <Button className="width_25 grey center-text" value="4" />
        <Button className="width_25 grey center-text" value="5" />
        <Button className="width_25 grey center-text" value="6" />
        <Button className="width_25 pink center-text" value="-" />
        <Button className="width_25 grey center-text" value="1" />
        <Button className="width_25 grey center-text" value="2" />
        <Button className="width_25 grey center-text" value="3" />
        <Button className="width_25 pink center-text" value="+" />
        <Button className="width_50 grey center-text" value="0" />
        <Button className="width_25 grey center-text" value="." />
        <Button className="width_25 pink center-text" value="=" />
      </div>
    );
  }
}

export default Calculator;
