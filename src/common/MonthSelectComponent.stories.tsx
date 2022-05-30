import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateTime } from 'luxon';
import MonthSelectComponent from './MonthSelectComponent';

export default {
  title: 'common/MonthSelectComponent',
  component: MonthSelectComponent,
} as ComponentMeta<typeof MonthSelectComponent>;

const Template: ComponentStory<typeof MonthSelectComponent> = () => (
  <MonthSelectComponent currentDate={DateTime.now()} />
);

export const Default = Template.bind({});
Default.args = {};
