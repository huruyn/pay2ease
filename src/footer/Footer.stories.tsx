import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
