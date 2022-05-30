import { ComponentStory, ComponentMeta } from '@storybook/react';
import VisaDirect from './VisaDirect';

export default {
  title: 'transfer-funds/VisaDirect',
  component: VisaDirect,
} as ComponentMeta<typeof VisaDirect>;

const Template: ComponentStory<typeof VisaDirect> = () => <VisaDirect />;
export const Default = Template.bind({});
Default.args = {};
