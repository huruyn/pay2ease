import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../styles/index.scss';
import RequestMoney from './RequestMoney';

export default {
  title: 'interac-etransfer/request-money/RequestMoney',
  component: RequestMoney,
} as ComponentMeta<typeof RequestMoney>;

const Template: ComponentStory<typeof RequestMoney> = () => (
  <BrowserRouter>
    <RequestMoney />
  </BrowserRouter>
);
export const Default = Template.bind({});
Default.args = {};
