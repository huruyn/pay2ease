import { ComponentStory, ComponentMeta } from '@storybook/react';
import CancelRequestForMoneyVerification, { CancelRequestForMoneyVerificationProps } from './CancelRequestForMoneyVerification';

export default {
  title:
    'my-wallet/status/dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification',
  component: CancelRequestForMoneyVerification,
} as ComponentMeta<typeof CancelRequestForMoneyVerification>;

const Template: ComponentStory<typeof CancelRequestForMoneyVerification> = ({
  show,
  handleBack,
  handleCancelRequest,
  transaction,
  processing,
}: CancelRequestForMoneyVerificationProps) => (
  <CancelRequestForMoneyVerification
    show={show}
    handleCancelRequest={handleCancelRequest}
    handleBack={handleBack}
    transaction={transaction}
    processing={processing}
  />
);

export const Default = Template.bind({});
Default.args = {};
