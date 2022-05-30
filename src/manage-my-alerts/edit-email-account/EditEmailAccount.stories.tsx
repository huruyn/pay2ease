import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import EditEmailAccount, {
  EditEmailAccountProps,
} from './EditEmailAccount';

export default {
  title: 'manage-my-alerts/edit-email-account/EditEmailAccount',
  component: EditEmailAccount,
} as ComponentMeta<typeof EditEmailAccount>;

const Template: ComponentStory<typeof EditEmailAccount> = ({
  show,
  handleCancel,
  handleSave,
}: EditEmailAccountProps) => (
  <EditEmailAccount
    show={show}
    handleCancel={handleCancel}
    handleSave={handleSave}
  />
);
export const Default = Template.bind({});
