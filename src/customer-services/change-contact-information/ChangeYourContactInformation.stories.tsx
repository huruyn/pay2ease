import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../styles/index.scss';
import ChangeYourContactInformation from './ChangeYourContactInformation';

export default {
  title: 'customer-services/change-contact-information/ChangeYourContactInformation',
  component: ChangeYourContactInformation,
} as ComponentMeta<typeof ChangeYourContactInformation>;

const Template: ComponentStory<typeof ChangeYourContactInformation> = () => (
  <BrowserRouter>
    <ChangeYourContactInformation />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
