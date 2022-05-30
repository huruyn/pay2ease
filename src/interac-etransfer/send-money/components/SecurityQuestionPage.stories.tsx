import { ComponentStory, ComponentMeta } from '@storybook/react';
import MAIN_INFO from '../../../stories/MainInfo';
import SecurityQuestionPage from './SecurityQuestionPage';

export default {
  title: 'interac-etransfer/send-money/components/SecurityQuestionPage',
  component: SecurityQuestionPage,
  argTypes: {
    setCurrentStep: { action: 'setCurrentStep' },
    navigateSteps: { action: 'navigateSteps' },
    setMainInfo: { action: 'setMainInfo' },
    setErrorMessage: { action: 'setErrorMessage' },
    showModal: { action: 'showModal' },
  },
} as ComponentMeta<typeof SecurityQuestionPage>;

const Template: ComponentStory<typeof SecurityQuestionPage> = ({
  navigateSteps,
  setCurrentStep,
  mainInfo,
  setMainInfo,
  showModal,
  setErrorMessage,
}) => (
  <SecurityQuestionPage
    setCurrentStep={setCurrentStep}
    navigateSteps={navigateSteps}
    setErrorMessage={setErrorMessage}
    mainInfo={mainInfo}
    setMainInfo={setMainInfo}
    showModal={showModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  mainInfo: {
    ...MAIN_INFO,
    securityAnswer: '',
    securityQuestion: '',
    confirmSecurityAnswer: '',
    showAnswer: false,
  },
};
