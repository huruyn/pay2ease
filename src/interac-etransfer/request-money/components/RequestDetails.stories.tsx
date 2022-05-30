import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestDetails from './RequestDetails';
import { RequestMainDetails } from '../RequestMoney';

export default {
  title: 'interac-etransfer/request-money/components/RequestDetails',
  component: RequestDetails,
} as ComponentMeta<typeof RequestDetails>;

const Template: ComponentStory<typeof RequestDetails> = () => (
  <BrowserRouter>
    <RequestDetails
      accounts={[]}
      contacts={[]}
      mainInfo={{
        amount: 0,
        invoiceNumber: 0,
        message: '',
        notifyByEmail: false,
        notifyTextMessage: false,
        agreed: false,
      } as RequestMainDetails}
      selectedAccount={0}
      selectedContact={0}
      setContactToSend={() => ''}
      setErrorMessage={() => ''}
      setMainInfo={() => ''}
      setSelectedAccount={() => ''}
      validateInputs={() => ''}
      navigateStep={jest.fn()}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
