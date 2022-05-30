import { ComponentStory, ComponentMeta } from '@storybook/react';
import './i18n/config';
import './styles/index.scss';
import Personal from './Personal';

export default {
  title: 'Personal',
  component: Personal,
} as ComponentMeta<typeof Personal>;

const Template: ComponentStory<typeof Personal> = () => <Personal />;
export const Default = Template.bind({});
Default.args = {};
