import '../../i18n/config';
import { Provider } from 'react-redux';
import EditMyProfile from './EditMyProfile';
import { store } from '../../app/store';

const ReactTestRenderer = require('react-test-renderer');

describe('EditMyProfile Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Provider store={store}>
        <EditMyProfile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
