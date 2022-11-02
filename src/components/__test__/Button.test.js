import renderer from 'react-test-renderer';
import Button from '../Button';

const returnState = jest.fn();

describe('Testing Button component', () => {
  it('renders Button component correctly', () => {
    const tree = renderer
      .create(<Button className="width_25 grey center-text" id="AC" value="AC" onClick={returnState} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
