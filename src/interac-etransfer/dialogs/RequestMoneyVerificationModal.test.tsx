import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from 'react-dom';
import RequestMoneyVerificationModal from './RequestMoneyVerificationModal';

const ReactTestRenderer = require('react-test-renderer');

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('RequestMoneyVerificationModal Component', () => {
  beforeAll(() => {
    // @ts-ignore
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  it('matches the snapshot', () => {
    const transferDetails = {
      source: { name: 'name', email: 'email@zippy.cash' },
      destination: { firstName: 'firstName', lastName: 'lastName', email: 'email@zippy.cash' },
      fromAccount: 'Personal (8000 001 000000000) $1,747.46',
      amount: 0,
    };
    const tree = ReactTestRenderer.create(
      <RequestMoneyVerificationModal
        show
        handleClose={() => undefined}
        handleNext={() => undefined}
        handleBack={() => undefined}
        transferDetails={transferDetails}
        isRequestingMoney
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
