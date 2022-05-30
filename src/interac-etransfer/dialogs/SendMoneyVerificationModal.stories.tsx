import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import SendMoneyVerificationModal, {
  SendMoneyVerificationModalProps,
} from './SendMoneyVerificationModal';

export default {
  title: 'interac-etransfer/dialogs/SendMoneyVerificationModal',
  component: SendMoneyVerificationModal,
} as ComponentMeta<typeof SendMoneyVerificationModal>;

const Template: ComponentStory<typeof SendMoneyVerificationModal> = ({
  show,
  handleClose,
  handleNext,
  handleBack,
  transferDetails,
  isSendingMoney,
}: SendMoneyVerificationModalProps) => (
  <SendMoneyVerificationModal
    show={show}
    handleClose={handleClose}
    handleNext={handleNext}
    handleBack={handleBack}
    transferDetails={transferDetails}
    isSendingMoney={isSendingMoney}
  />
);
export const Default = Template.bind({});
Default.args = {
  transferDetails: {
    source: { name: 'name' },
    destination: { firstName: 'firstName', lastName: 'lastName', email: 'email@zippy.cash' },
    fromAccount: 'Personal (8000 001 000000000) $1,747.46',
    amount: 0,
  },
};
