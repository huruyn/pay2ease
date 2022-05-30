import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import DownloadTransactions from './DownloadTransactions';

export default {
  title: 'my-accounts/download-transactions/DownloadTransactions',
  component: DownloadTransactions,
} as ComponentMeta<typeof DownloadTransactions>;

const Template: ComponentStory<typeof DownloadTransactions> = () => <DownloadTransactions />;

export const Default = Template.bind({});
Default.args = {};
