import './i18n/config';
import { BrowserRouter as Router } from 'react-router-dom';
import PersonalProfile from './PersonalProfile';

const ReactTestRenderer = require('react-test-renderer');

describe('PersonalProfile Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Router>
        <PersonalProfile />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
