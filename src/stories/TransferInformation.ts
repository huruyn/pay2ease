import { DateTime } from 'luxon';
import { TransferInformation } from '../interac-etransfer/send-money/components/TransferSentPage';

const TRANSFER_INFORMATION: TransferInformation = {
  source: { email: 'source@zippy.cash', name: 'source name' },
  destination: { email: 'destination@zippy.cash', name: 'destination name' },
  fromAccount: '392 Jones (8000 001 000000000)',
  expiryDate: DateTime.fromISO('2021-08-06T13:07:04.054'),
  submitted: DateTime.fromISO('2021-12-06T13:07:04.054'),
  securityQuestion: 'Security Question',
  securityAnswer: 'Security Answer',
  amount: 1000,
  balance: 2000,
  referenceNumber: 123456789,
};

export default TRANSFER_INFORMATION;
