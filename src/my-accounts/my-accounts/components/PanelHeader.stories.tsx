import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../i18n/config';
import '../../../styles/index.scss';
import PanelHeader from './PanelHeader';

export default {
  title: 'my-accounts/my-accounts/components/PanelHeader',
  component: PanelHeader,
} as ComponentMeta<typeof PanelHeader>;

const Template: ComponentStory<typeof PanelHeader> = () => <PanelHeader title="Test Title" />;

export const Default = Template.bind({});
Default.args = {};
