import { ComponentStory, ComponentMeta } from '@storybook/react';
import StepComponent from './StepComponent';

export default {
  title: 'common/StepComponent',
  component: StepComponent,
} as ComponentMeta<typeof StepComponent>;

const Template: ComponentStory<typeof StepComponent> = () => (
  <StepComponent steps={3} currentStep={1} setCurrentStep={() => {}} navigateSteps={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
