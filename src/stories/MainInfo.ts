import { TransferMainDetails } from '../interac-etransfer/send-money/SendMoney';

const MAIN_INFO: TransferMainDetails = {
  amount: 1000,
  destination: { email: 'destination@email.com', name: 'destination name' },
  source: { email: 'source@email.com', name: 'source name' },
  fromAccount: 'fromAccount (8000 0000 00000000)',
  message: 'message',
  transferMethod: 'Email',
  securityAnswer: 'security Answer',
  confirmSecurityAnswer: 'security Answer',
  securityQuestion: 'security Question',
  showAnswer: true,
};

export default MAIN_INFO;
