import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator rendering test', () => {
  it('should render a calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing user interactions', () => {
  it('Testing button clicks', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('calcScreen');
    const clickedButton = screen.getByRole('button', { name: '7' });
    fireEvent.click(clickedButton);
    expect(calcScreen.innerHTML.trim()).toBe('7');
  });

  it('Testing the add operation', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('calcScreen');
    const seven = screen.getByRole('button', { name: '7' });
    const operator = screen.getByRole('button', { name: '+' });
    const equalSign = screen.getByRole('button', { name: '=' });
    fireEvent.click(seven);
    fireEvent.click(operator);
    fireEvent.click(seven);
    fireEvent.click(equalSign);
    expect(calcScreen.innerHTML.trim()).toBe('14');
  });

  it('Testing the multiply operation', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('calcScreen');
    const seven = screen.getByRole('button', { name: '7' });
    const operator = screen.getByRole('button', { name: 'x' });
    const equalSign = screen.getByRole('button', { name: '=' });
    fireEvent.click(seven);
    fireEvent.click(operator);
    fireEvent.click(seven);
    fireEvent.click(equalSign);
    expect(calcScreen.innerHTML.trim()).toBe('49');
  });

  it('Testing the divide operation', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('calcScreen');
    const seven = screen.getByRole('button', { name: '7' });
    const operator = screen.getByRole('button', { name: '÷' });
    const equalSign = screen.getByRole('button', { name: '=' });
    fireEvent.click(seven);
    fireEvent.click(operator);
    fireEvent.click(seven);
    fireEvent.click(equalSign);
    expect(calcScreen.innerHTML.trim()).toBe('1');
  });

  it('Testing the substract operation', () => {
    render(<Calculator />);
    const calcScreen = screen.getByTestId('calcScreen');
    const seven = screen.getByRole('button', { name: '7' });
    const operator = screen.getByRole('button', { name: '-' });
    const equalSign = screen.getByRole('button', { name: '=' });
    fireEvent.click(seven);
    fireEvent.click(operator);
    fireEvent.click(seven);
    fireEvent.click(equalSign);
    expect(calcScreen.innerHTML.trim()).toBe('0');
  });
});
