import calculate from '../calculate';

const calcObj = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculate logic works properly', () => {
  test('Sums operator works properls', () => {
    const obj = {
      total: '10',
      next: '17',
      operation: '+',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('27');
  });

  test('Subtraction operator works properly', () => {
    const obj = {
      total: '10',
      next: '17',
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('-7');
  });

  test('Division operator works properly', () => {
    const obj = {
      total: '17',
      next: '10',
      operation: '÷',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('1.7');
  });

  test('Multiplication operator works properly', () => {
    const obj = {
      total: '17',
      next: '10',
      operation: 'x',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('170');
  });

  test('Invalid division operator works properly', () => {
    const obj = {
      total: '17',
      next: '0',
      operation: '÷',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe("Can't divide by 0.");
  });

  test('Tests Modulo operator works properly', () => {
    const obj = {
      total: '17',
      next: '4',
      operation: '%',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('1');
  });

  test('Tests invalid Modulo operator works properly', () => {
    const obj = {
      total: '17',
      next: '0',
      operation: '%',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Tests invalid AC operator works properly', () => {
    const obj = {
      total: '17',
      next: '4',
      operation: 'x',
    };

    expect(calculate(obj, 'AC')).toEqual(calcObj);
  });
});
