import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import AddOrEditBillers from './AddOrEditBillers';

export default {
  title: 'bill-payments/add-or-edit-billers/AddOrEditBillers',
  component: AddOrEditBillers,
} as ComponentMeta<typeof AddOrEditBillers>;

const Template: ComponentStory<typeof AddOrEditBillers> = () => <AddOrEditBillers />;

export const Default = Template.bind({});
Default.args = {};
