import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import ACCOUNTS from '../../stories/Accounts';
import CONTACTS from '../../stories/Contacts';
import SendMoney from './SendMoney';

export default {
  title: 'interac-etransfer/send-money/SendMoney',
  component: SendMoney,
} as ComponentMeta<typeof SendMoney>;

const Template: ComponentStory<typeof SendMoney> = () => (
  <BrowserRouter>
    <SendMoney />
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
