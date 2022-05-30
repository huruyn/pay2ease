import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import PageContainer from './PageContainer';

export default {
  title: 'common/PageContainer',
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = () => <PageContainer title="Test Title">child</PageContainer>;

export const Default = Template.bind({});
Default.args = {};
