import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import EditContact from './EditContact';

export default {
  title: 'interac-etransfer/contact-list/edit/EditContact',
  component: EditContact,
} as ComponentMeta<typeof EditContact>;

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  firstName: '392',
  lastName: 'Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

const Template: ComponentStory<typeof EditContact> = () => (
  <BrowserRouter>
    <EditContact />
  </BrowserRouter>
);

export const Default = Template.bind({
  state: {
    item: CONTACT_MOCK,
  },
});
Default.args = {

};
