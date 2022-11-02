import Header from '../Header'
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe("Tests Header Component", () => {
    it('should render Header component', () => {
        const tree = renderer.create(<BrowserRouter ><Header /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})