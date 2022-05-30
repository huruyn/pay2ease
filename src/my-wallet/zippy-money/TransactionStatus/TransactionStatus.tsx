import {
  Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';
import { Contact } from '../../../api';
import { TransactionStatusEnum } from '../../../interac-etransfer/status/transaction-status/TransactionStatusEnum';

export default function TransactionStatus({
  user,
  transaction,
  transactionType,
  resetMainInfo,
}: Pick<TransactionInterface, 'user' | 'transaction' | 'transactionType' | 'resetMainInfo'>) {
  const navigate = useNavigate();

  const getUserFullName = (contact: Contact | undefined) => {
    if (transactionType === TransactionTypeEnum.SEND) {
      return contact && contact.firstName && contact.lastName ? `${contact.firstName} ${contact.lastName}` : '';
    }
    return user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '';
  };

  const getCopy = (status: TransactionStatusEnum | undefined) => {
    const name = getUserFullName(transaction?.contact);
    const amount = `${transaction?.amount.toFixed(2) || '0.00'} CAD`;
    switch (status) {
      case TransactionStatusEnum.CANCELLED:
        return `Your $${amount} transaction to ${name} has been cancelled.`;
      case TransactionStatusEnum.COMPLETED:
        return `Your $${amount} transfer has been sent to ${name}.`;
      case TransactionStatusEnum.FAILED:
        return `Your $${amount} transaction to ${name} has been failed.`;
      case TransactionStatusEnum.PENDING:
      default:
        return `Your $${amount} transaction to ${name} is in process.`;
    }
  };

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        className="transaction-status"
        backdropImage="backdrop-image-2"
      >
        <div className="title">
          Transaction Status
        </div>
        <div className="status">
          <div><i className="zippy-cash-icon zc-pending" /></div>
          <div>
            {getCopy(transaction?.status)}
          </div>
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={resetMainInfo}
          >
            Send Another Transfer
          </Button>
          <Button
            className="zippy-btn btn-neutral"
            onClick={() => navigate(`/my-wallet/zippy-money/${transactionType}/transaction-details/${transaction?.id}`)}
          >
            View Transfer Details
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
