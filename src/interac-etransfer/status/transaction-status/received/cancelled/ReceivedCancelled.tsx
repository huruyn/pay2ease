import {
  Col,
  Row,
} from 'react-bootstrap';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { TransactionProps } from '../../TransactionStatus';

function ReceivedCompleted({
  user,
  transaction,
}: TransactionProps) {
  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');

  return (
    <>
      <Row>
        <Col xs={4}>From</Col>
        <Col xs={6}>
          <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
          {transaction && ` (${transaction.contact.email})`}
        </Col>
      </Row>
      <Row>
        <Col xs={4}>To</Col>
        <Col xs={6}>
          <strong>{getUserFullName()}</strong>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>Transfer Date</Col>
        <Col xs={6}>
          {transaction && transaction.date ? DateTime.fromISO(transaction.date).toLocaleString(DateTime.DATE_MED) : ''}
        </Col>
      </Row>
      <Row>
        <Col xs={4}>Transfer Amount</Col>
        <Col xs={6}>
          <strong className="amount">
            {transaction && transaction.amount
            && (
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
      <Row>
        <Col xs={4}>
          <div>Reference Number</div>
          <div>(Keep For Your Records)</div>
        </Col>
        <Col xs={6}>{transaction?.id}</Col>
      </Row>
    </>
  );
}

export default ReceivedCompleted;
