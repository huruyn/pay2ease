import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import EditBusinessPhone, {
  EditBusinessPhoneProps,
} from './EditBusinessPhone';

export default {
  title: 'manage-my-alerts/edit-business-phone/EditBusinessPhone',
  component: EditBusinessPhone,
} as ComponentMeta<typeof EditBusinessPhone>;

const Template: ComponentStory<typeof EditBusinessPhone> = ({
  show,
  handleCancel,
  handleSave,
}: EditBusinessPhoneProps) => (
  <EditBusinessPhone
    show={show}
    handleCancel={handleCancel}
    handleSave={handleSave}
  />
);
export const Default = Template.bind({});
