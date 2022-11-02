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
    setCdObj(calculate(cdObj, e.target.id));
  };

  return (
    <div className="container">
      <CalculatorScreen total={cdObj.total} operation={cdObj.operation} next={cdObj.next} />
      <Button className="width_25 grey center-text" value="AC" id="AC" onClick={returnState} />
      <Button className="width_25 grey center-text" value="%" id="%" onClick={returnState} />
      <Button className="width_25 grey center-text" value="+/-" id="+/-" onClick={returnState} />
      <Button className="width_25 pink center-text" value="÷" id="÷" onClick={returnState} />
      <Button className="width_25 grey center-text" value="7" id="7" onClick={returnState} />
      <Button className="width_25 grey center-text" value="8" id="8" onClick={returnState} />
      <Button className="width_25 grey center-text" value="9" id="9" onClick={returnState} />
      <Button className="width_25 pink center-text" value="x" id="x" onClick={returnState} />
      <Button className="width_25 grey center-text" value="4" id="4" onClick={returnState} />
      <Button className="width_25 grey center-text" value="5" id="5" onClick={returnState} />
      <Button className="width_25 grey center-text" value="6" id="6" onClick={returnState} />
      <Button className="width_25 pink center-text" value="-" id="-" onClick={returnState} />
      <Button className="width_25 grey center-text" value="1" id="1" onClick={returnState} />
      <Button className="width_25 grey center-text" value="2" id="2" onClick={returnState} />
      <Button className="width_25 grey center-text" value="3" id="3" onClick={returnState} />
      <Button className="width_25 pink center-text" value="+" id="+" onClick={returnState} />
      <Button className="width_50 grey center-text" value="0" id="0" onClick={returnState} />
      <Button className="width_25 grey center-text" value="." id="." onClick={returnState} />
      <Button className="width_25 pink center-text" value="=" id="=" onClick={returnState} />
    </div>
  );
};

export default Calculator;
