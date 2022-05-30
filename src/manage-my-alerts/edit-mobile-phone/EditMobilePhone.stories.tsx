import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import EditMobilePhone, {
  EditMobilePhoneProps,
} from './EditMobilePhone';

export default {
  title: 'manage-my-alerts/edit-mobile-phone/EditMobilePhone',
  component: EditMobilePhone,
} as ComponentMeta<typeof EditMobilePhone>;

const Template: ComponentStory<typeof EditMobilePhone> = ({
  show,
  handleCancel,
  handleNext,
}: EditMobilePhoneProps) => (
  <EditMobilePhone
    show={show}
    handleCancel={handleCancel}
    handleNext={handleNext}
  />
);
export const Default = Template.bind({});
