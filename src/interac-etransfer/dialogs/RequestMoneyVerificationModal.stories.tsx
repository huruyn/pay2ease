import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import RequestMoneyVerificationModal, {
  RequestMoneyVerificationModalProps,
} from './RequestMoneyVerificationModal';

export default {
  title: 'interac-etransfer/dialogs/RequestMoneyVerificationModal',
  component: RequestMoneyVerificationModal,
} as ComponentMeta<typeof RequestMoneyVerificationModal>;

const Template: ComponentStory<typeof RequestMoneyVerificationModal> = ({
  show,
  handleClose,
  handleNext,
  handleBack,
  transferDetails,
  isRequestingMoney,
}: RequestMoneyVerificationModalProps) => (
  <RequestMoneyVerificationModal
    show={show}
    handleClose={handleClose}
    handleNext={handleNext}
    handleBack={handleBack}
    transferDetails={transferDetails}
    isRequestingMoney={isRequestingMoney}
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
