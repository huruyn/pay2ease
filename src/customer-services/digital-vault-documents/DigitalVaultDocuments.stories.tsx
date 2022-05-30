import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import DigitalVaultDocuments from './DigitalVaultDocuments';

export default {
  title: 'customer-services/digital-vault-documents/DigitalVaultDocuments',
  component: DigitalVaultDocuments,
} as ComponentMeta<typeof DigitalVaultDocuments>;

const Template: ComponentStory<typeof DigitalVaultDocuments> = () => (
  <DigitalVaultDocuments />
);

export const Default = Template.bind({});
Default.args = {};
