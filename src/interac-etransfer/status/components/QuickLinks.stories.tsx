import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuickLinks from './QuickLinks';

export default {
  title: 'interac-etransfer/status/components/QuickLinks',
  component: QuickLinks,
} as ComponentMeta<typeof QuickLinks>;

const Template: ComponentStory<typeof QuickLinks> = () => <QuickLinks />;

export const Default = Template.bind({});
Default.args = {};
