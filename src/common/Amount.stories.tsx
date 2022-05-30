import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import AmountInput from './AmountInput';

export default {
  title: 'common/AmountInput',
  component: AmountInput,
} as ComponentMeta<typeof AmountInput>;

const Template: ComponentStory<typeof AmountInput> = () => (
  <AmountInput
    amount={0}
    setAmount={jest.fn()}
  />
);

export const Default = Template.bind({});
Default.args = {};
