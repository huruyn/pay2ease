import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionSecurityQuestions from './TransactionSecurityQuestions';
import MAIN_INFO from '../../../stories/MainInfo';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionSecurityQuestions Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <TransactionSecurityQuestions
          mainInfo={MAIN_INFO}
          setMainInfo={jest.fn()}
          isProcessing={false}
          handleTriggerTransaction={jest.fn()}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
