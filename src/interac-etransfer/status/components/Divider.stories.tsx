import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'interac-etransfer/status/components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = () => <Divider />;

export const Default = Template.bind({});
Default.args = {};
