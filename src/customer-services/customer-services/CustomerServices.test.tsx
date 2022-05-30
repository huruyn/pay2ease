import '../../i18n/config';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomerServices from './CustomerServices';

const ReactTestRenderer = require('react-test-renderer');

describe('CustomerServices Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Router><CustomerServices /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
