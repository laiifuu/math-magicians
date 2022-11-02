import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Tests Header Component', () => {
  it('should render Header component', () => {
    const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(' Tests How many links there are', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const list = screen.getAllByRole('link');
    expect(list.length).toEqual(3);
  });
});
