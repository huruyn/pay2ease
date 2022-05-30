import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactUs from './ContactUs';

export default {
  title: 'contact-us/ContactUs',
  component: ContactUs,
} as ComponentMeta<typeof ContactUs>;

const Template: ComponentStory<typeof ContactUs> = () => (
  <BrowserRouter>
    <ContactUs />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
