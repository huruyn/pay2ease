import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import { AutodepositSettingsPure } from './AutodepositSettings';

export default {
  title: 'interac-etransfer/autodeposit-settings/AutodepositSettings',
  component: AutodepositSettingsPure,
} as ComponentMeta<typeof AutodepositSettingsPure>;

const Template: ComponentStory<typeof AutodepositSettingsPure> = (args) => {
  const { user } = args;
  return <AutodepositSettingsPure user={user} />;
};

export const Default = Template.bind({});
Default.args = {
  user: {
    email: 'john.doe@email.com',
    firstName: 'John',
    lastName: 'Doe',
  },
};
