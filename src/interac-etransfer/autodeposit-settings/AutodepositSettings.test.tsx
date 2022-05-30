import '../../i18n/config';
import { Provider } from 'react-redux';
import AutodepositSettings from './AutodepositSettings';
import { store } from '../../app/store';

const ReactTestRenderer = require('react-test-renderer');

describe('AutodepositSettings Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Provider store={store}>
        <AutodepositSettings />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
