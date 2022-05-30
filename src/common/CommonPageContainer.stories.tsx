import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import CommonPageContainer from './CommonPageContainer';

export default {
  title: 'common/CommonPageContainer',
  component: CommonPageContainer,
} as ComponentMeta<typeof CommonPageContainer>;

const Template: ComponentStory<typeof CommonPageContainer> = () => <CommonPageContainer title="Test Title">child</CommonPageContainer>;

export const Default = Template.bind({});
Default.args = {};
