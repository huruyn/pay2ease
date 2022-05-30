import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import UnlinkAccountsFromYourDebitCard from './UnlinkAccountsFromYourDebitCard';

export default {
  title:
    'customer-services/unlink-accounts-from-your-debit-card/UnlinkAccountsFromYourDebitCard',
  component: UnlinkAccountsFromYourDebitCard,
} as ComponentMeta<typeof UnlinkAccountsFromYourDebitCard>;

const Template: ComponentStory<
  typeof UnlinkAccountsFromYourDebitCard
> = () => <UnlinkAccountsFromYourDebitCard />;

export const Default = Template.bind({});
Default.args = {};
