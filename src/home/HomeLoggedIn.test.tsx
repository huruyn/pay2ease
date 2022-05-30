import '../i18n/config';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeLoggedIn from './HomeLoggedIn';

const ReactTestRenderer = require('react-test-renderer');

describe('HomeLoggedIn Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Router><HomeLoggedIn /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
