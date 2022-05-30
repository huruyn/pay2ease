import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import ACCOUNTS from '../../stories/Accounts';
import CONTACTS from '../../stories/Contacts';
import ZippyTransaction from './ZippyTransaction';

export default {
  title: 'interac-etransfer/send-money/ZippyTransaction',
  component: ZippyTransaction,
} as ComponentMeta<typeof ZippyTransaction>;

const Template: ComponentStory<typeof ZippyTransaction> = () => (
  <BrowserRouter>
    <ZippyTransaction />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  msw: [
    rest.get(
      'https://mock.net/Accounts',
      (_req, res, ctx) => res(ctx.json(ACCOUNTS)),
    ),
    rest.get(
      'https://mock.net/Contacts',
      (_req, res, ctx) => res(ctx.json(CONTACTS)),
    ),
  ],
};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {
  msw: [
    rest.get(
      'https://mock.net/Accounts',
      (_req, res, ctx) => res(ctx.status(403)),
    ),
    rest.get(
      'https://mock.net/Contacts',
      (_req, res, ctx) => res(ctx.status(403)),
    ),
  ],
};
