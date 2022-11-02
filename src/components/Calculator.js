import React, { useState } from 'react';
import Button from './Button';
import CalculatorScreen from './CalculatorScreen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [cdObj, setCdObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const returnState = (e) => {
    setCdObj(calculate(cdObj, e.target.textContent));
  };

  return (
    <div className="container">
      <CalculatorScreen
        total={cdObj.total}
        operation={cdObj.operation}
        next={cdObj.next}
      />
      <Button
        className="width_25 grey center-text"
        value="AC"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="%"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="+/-"
        onClick={returnState}
      />
      <Button
        className="width_25 pink center-text"
        value="÷"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="7"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="8"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="9"
        onClick={returnState}
      />
      <Button
        className="width_25 pink center-text"
        value="x"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="4"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="5"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="6"
        onClick={returnState}
      />
      <Button
        className="width_25 pink center-text"
        value="-"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="1"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="2"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="3"
        onClick={returnState}
      />
      <Button
        className="width_25 pink center-text"
        value="+"
        onClick={returnState}
      />
      <Button
        className="width_50 grey center-text"
        value="0"
        onClick={returnState}
      />
      <Button
        className="width_25 grey center-text"
        value="."
        onClick={returnState}
      />
      <Button
        className="width_25 pink center-text"
        value="="
        onClick={returnState}
      />
    </div>
  );
};

export default Calculator;
