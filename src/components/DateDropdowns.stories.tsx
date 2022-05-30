import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateDropdowns from './DateDropdowns';

export default {
  title: 'components/DateDropdowns',
  component: DateDropdowns,
} as ComponentMeta<typeof DateDropdowns>;

const Template: ComponentStory<typeof DateDropdowns> = () => <DateDropdowns />;

export const Default = Template.bind({});
Default.args = {};
