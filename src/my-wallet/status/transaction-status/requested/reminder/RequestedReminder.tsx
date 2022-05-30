import
{
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { TransactionProps } from '../../TransactionStatus';

function RequestedReminder({
  transaction,
}: TransactionProps) {
  const navigate = useNavigate();

  return (
    <>
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
          <div>{transaction && ` (${transaction.contact.email})`}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>Transfer Amount</Col>
        <Col xs={8}>
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
      <Row className="transfer-btn">
        <Button
          className="zippy-btn d-flex ms-auto"
          onClick={() => navigate('/my-wallet/zippy-money/request/transaction-start')}
        >
          Send Another Request
        </Button>
      </Row>
    </>
  );
}

export default RequestedReminder;
