import { ComponentStory, ComponentMeta } from '@storybook/react';
import IdentityVerificationModal, {
  IdentityVerificationModalProps,
} from './IdentityVerificationModal';

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  firstName: '392',
  lastName: 'Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

export default {
  title: 'interac-etransfer/contact-list/edit/IdentityVerificationModal',
  component: IdentityVerificationModal,
} as ComponentMeta<typeof IdentityVerificationModal>;

const Template: ComponentStory<typeof IdentityVerificationModal> = ({
  show,
  handleClose,
}: IdentityVerificationModalProps) => (
  <IdentityVerificationModal
    show={show}
    handleClose={handleClose}
    selectedContact={CONTACT_MOCK}
  />
);
export const Default = Template.bind({});
