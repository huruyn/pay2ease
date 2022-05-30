import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecurityRecipientPage from './SecurityRecipientPage';

export default {
  title: 'interac-etransfer/send-money/components/SecurityRecipientPage',
  component: SecurityRecipientPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    setPageIndex: { action: 'setPageIndex' },
  },
} as ComponentMeta<typeof SecurityRecipientPage>;

const Template: ComponentStory<typeof SecurityRecipientPage> = ({
  setCurrentStep,
  setPageIndex,
}) => (
  <SecurityRecipientPage
    setCurrentStep={setCurrentStep}
    setPageIndex={setPageIndex}
  />
);

export const Default = Template.bind({});
Default.args = {};
