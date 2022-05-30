import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import '../../i18n/config';
import '../../styles/index.scss';
import ContactList from './ContactList';
import CONTACTS from './Contacts';

export default {
  title: 'interac-etransfer/contact-list/ContactList',
  component: ContactList,
} as ComponentMeta<typeof ContactList>;

const Template: ComponentStory<typeof ContactList> = () => (<ContactList />);

export const MockedSuccess = Template.bind({});
MockedSuccess.parameters = {
  msw: [
    rest.get('https://zippy-retail-api-dev.azurewebsites.net/Contacts', (_req, res, ctx) => res(ctx.json(CONTACTS))),
  ],
};

export const MockedError = Template.bind({});
MockedError.parameters = {
  msw: [
    rest.get('https://zippy-retail-api-dev.azurewebsites.net/Contacts', (_req, res, ctx) => res(ctx.delay(800), ctx.status(403))),
  ],
};
