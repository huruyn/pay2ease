import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import EditHomePhone, {
  EditHomePhoneProps,
} from './EditHomePhone';

export default {
  title: 'manage-my-alerts/edit-home-phone/EditHomePhone',
  component: EditHomePhone,
} as ComponentMeta<typeof EditHomePhone>;

const Template: ComponentStory<typeof EditHomePhone> = ({
  show,
  handleCancel,
  handleSave,
}: EditHomePhoneProps) => (
  <EditHomePhone
    show={show}
    handleCancel={handleCancel}
    handleSave={handleSave}
  />
);
export const Default = Template.bind({});
