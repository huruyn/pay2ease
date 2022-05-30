import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertElement from './AlertElement';

export default {
  title: 'manage-my-alerts/components/AlertElement',
  component: AlertElement,
} as ComponentMeta<typeof AlertElement>;

const Template: ComponentStory<typeof AlertElement> = ({
  text,
}: {
  text: string;
}) => <AlertElement text={text} />;

export const Default = Template.bind({});
Default.args = {
  text: 'A scheduled bill payment has failed',
};
