import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { TransactionProps } from '../../TransactionStatus';

export default function SentCompleted({ user, transaction }: TransactionProps) {
  const navigate = useNavigate();
  const getUserFullName = () => (user && user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : '');
  const getUserEmail = () => (user && user.email ? user.email : '');

  return (
    <>
      <Row className="detail-transaction">
        <Col xs={4}>From</Col>
        <Col xs={8}>
          <div>
            <strong>{getUserFullName()}</strong>
            <span>{user && ` (${getUserEmail()})`}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>To</Col>
        <Col xs={8}>
          <strong>
            {transaction
              ? `${transaction.contact.firstName || ''} ${
                transaction.contact.lastName || ''
              }`
              : ''}
          </strong>
        </Col>
      </Row>
      <Row className="detail-transaction">
        <Col xs={4}>Transfer Date</Col>
        <Col xs={6}>
          {transaction && transaction.date
            ? DateTime.fromISO(transaction.date).toLocaleString(
              DateTime.DATE_MED,
            )
            : ''}
        </Col>
      </Row>
      <Row className="detail-transaction">
        <Col xs={4}>Transfer Amount</Col>
        <Col xs={6}>
          <strong className="amount">
            {transaction && transaction.amount && (
              <NumberFormat
                value={transaction.amount}
                defaultValue={0}
                displayType="text"
                prefix="$ "
                suffix=" CAD"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
              />
            )}
          </strong>
        </Col>
      </Row>
      <Row className="detail-transaction">
        <Col xs={4}>
          <div>Reference Number</div>
          <div>(Keep For Your Records)</div>
        </Col>
        <Col xs={8}>{transaction?.id}</Col>
      </Row>
      <Row className="transfer-btn">
        <Button
          className="zippy-btn d-flex ms-auto"
          onClick={() => navigate('/my-wallet/zippy-money/send/transaction-start')}
        >
          Send Another Transfer
        </Button>
      </Row>
    </>
  );
}
