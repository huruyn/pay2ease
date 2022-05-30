import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import { ZippyBalancePure } from './ZippyBalance';

export default {
  title: 'ZippyBalance',
  component: ZippyBalancePure,
} as ComponentMeta<typeof ZippyBalancePure>;

const Template: ComponentStory<typeof ZippyBalancePure> = ({ account }) => (
  <ZippyBalancePure account={account} />
);

export const Loaded = Template.bind({});
Loaded.args = {
  account: { id: 1, name: '8000 001 000000000', balance: 1000 },
};

export const Loading = Template.bind({});
Loading.args = {};
