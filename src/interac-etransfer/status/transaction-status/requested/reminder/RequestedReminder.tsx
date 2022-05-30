import
{
  Button,
  Col,
  Row,
  Stack,
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
        <Col>
          <ul>
            <li>
              The request for money was sent but the contact has not yet sent the transfer.
            </li>
            <li>
              You can send your contact a reminder or cancel the request.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>To</Col>
        <Col xs={6}>
          <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
          <div>{transaction && ` (${transaction.contact.email})`}</div>
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
      <Stack gap={3} direction="horizontal">
        <Button
          className="zippy-btn zippy-flat d-flex"
          onClick={() => navigate('/interac-etransfer/status/requested')}
        >
          Back to Status
        </Button>
        <Button
          className="zippy-btn d-flex ms-auto"
          onClick={() => navigate('/interac-etransfer/request-money')}
        >
          Send Another Request
        </Button>
      </Stack>
    </>
  );
}

export default RequestedReminder;
