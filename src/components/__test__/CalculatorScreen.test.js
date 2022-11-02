import renderer from 'react-test-renderer';
import CalculatorScreen from '../CalculatorScreen';

describe('Testing CalculatorScreen component', () => {
  it('renders CalculatorScreen component correctly', () => {
    const tree = renderer
      .create(<CalculatorScreen total="0" operation="" next="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
