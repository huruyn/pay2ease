import {
  Button, Col, Row,
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';

export default function TransactionDetails({
  user,
  transaction,
  transactionType,
  resetMainInfo,
}: Pick<TransactionInterface, 'user' | 'transaction' | 'transactionType' | 'resetMainInfo'>) {
  const getUserFullName = () => {
    if (transactionType === TransactionTypeEnum.SEND) {
      const contact = transaction?.contact;
      return contact && contact.firstName && contact.lastName ? `${contact.firstName} ${contact.lastName}` : '';
    }
    return user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '';
  };

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="title">
          Transaction Completed
        </div>
        <div className="details">
          <Row>
            <Col xs={6}>To</Col>
            <Col xs={6}>
              <strong>{getUserFullName()}</strong>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Date</Col>
            <Col xs={6}>{transaction && transaction.date ? DateTime.fromISO(transaction.date).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Time (UTC)</Col>
            <Col xs={6}>{transaction && transaction.date ? DateTime.fromISO(transaction.date).toUTC().toLocaleString(DateTime.TIME_WITH_SECONDS) : ''}</Col>
          </Row>
          <Row>
            <Col xs={6}>Transfer Amount</Col>
            <Col xs={6}>
              <NumberFormat
                className="amount"
                value={transaction?.amount}
                defaultValue={0}
                displayType="text"
                prefix="$ "
                suffix=" CAD"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              Reference Number
              (Keep For Your Records)
            </Col>
            <Col xs={6}>*3942439898</Col>
          </Row>
          <Row>
            <Col xs={6}>Transaction ID</Col>
            <Col xs={6}>{transaction?.id}</Col>
          </Row>
          <Row>
            <Col xs={6}>Expiry Date</Col>
            <Col xs={6}>{transaction && transaction.expireDate ? DateTime.fromISO(transaction.expireDate).toUTC().toLocaleString(DateTime.DATE_MED) : ''}</Col>
          </Row>
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={resetMainInfo}
          >
            Send Another Transfer
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
