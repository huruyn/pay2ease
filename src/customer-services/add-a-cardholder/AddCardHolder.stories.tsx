import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import AddCardHolder from './AddCardHolder';

export default {
  title: 'customer-services/add-cardholder/AddCardHolder',
  component: AddCardHolder,
} as ComponentMeta<typeof AddCardHolder>;

const Template: ComponentStory<typeof AddCardHolder> = () => <AddCardHolder />;

export const Default = Template.bind({});
Default.args = {};
