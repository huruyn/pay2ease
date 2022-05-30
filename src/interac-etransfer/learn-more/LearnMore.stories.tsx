import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import LearnMore from './LearnMore';

export default {
  title: 'interac-etransfer/learn-more/LearnMore',
  component: LearnMore,
} as ComponentMeta<typeof LearnMore>;

const Template: ComponentStory<typeof LearnMore> = () => <LearnMore />;

export const Default = Template.bind({});
Default.args = {};
