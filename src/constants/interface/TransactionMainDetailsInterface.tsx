// eslint-disable-next-line import/prefer-default-export
export interface TransactionMainDetailsInterface {
  source: { name: string; email: string };
  destination: { name: string; email: string };
  fromAccount: string;
  amount: number;
  message: string;
  transferMethod: string;
  securityQuestion: string;
  securityAnswer: string;
  confirmSecurityAnswer: string;
  showAnswer: boolean;
}
