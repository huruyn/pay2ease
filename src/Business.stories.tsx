import { ComponentStory, ComponentMeta } from '@storybook/react';
import './i18n/config';
import './styles/index.scss';
import Business from './Business';

export default {
  title: 'Business',
  component: Business,
} as ComponentMeta<typeof Business>;

const Template: ComponentStory<typeof Business> = () => <Business />;
export const Default = Template.bind({});
Default.args = {};
