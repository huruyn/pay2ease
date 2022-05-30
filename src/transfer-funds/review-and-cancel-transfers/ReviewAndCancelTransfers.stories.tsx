import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewAndCancelTransfers from './ReviewAndCancelTransfers';

export default {
  title: 'transfer-funds/review-and-cancel-transfers/ReviewAndCancelTransfers',
  component: ReviewAndCancelTransfers,
} as ComponentMeta<typeof ReviewAndCancelTransfers>;

const Template: ComponentStory<typeof ReviewAndCancelTransfers> = () => (
  <ReviewAndCancelTransfers />
);

export const Default = Template.bind({});
Default.args = {};
