import Header from '../Header'
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Tests Header Component", () => {
    it('should render Header component', () => {
        const tree = renderer.create(<BrowserRouter ><Header /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' adds the active class to the clicked link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
        const list = screen.getAllByRole('link');
        expect(list.length).toEqual(3);
    });
})