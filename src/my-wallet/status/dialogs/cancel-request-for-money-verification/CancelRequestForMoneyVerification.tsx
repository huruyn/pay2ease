import {
  Col,
  Modal,
  Row,
  Button,
  Stack,
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { Transaction } from '../../../../api';

export interface CancelRequestForMoneyVerificationProps {
  show: boolean;
  handleCancelRequest: () => void;
  handleBack: () => void;
  transaction: Transaction | undefined,
  processing: boolean,
}

const CancelRequestForMoneyVerification = ({
  show,
  handleCancelRequest,
  handleBack,
  transaction,
  processing,
}: CancelRequestForMoneyVerificationProps) => (
  <Modal show={show} className="zippy-cash-modal">
    <Modal.Header className="transaction-details">
      Cancel Request For Money - VERIFICATION
      <Button
        variant="close"
        onClick={handleBack}
      />
    </Modal.Header>
    <Modal.Body className="transaction-details">
      <div className="details">
        <Row>
          <Col xs={12}>Are you sure you want to cancel this request for money?</Col>
        </Row>
        <Row>
          <Col xs={6}>To</Col>
          <Col xs={6}>
            <strong>{transaction ? `${transaction.contact.firstName || ''} ${transaction.contact.lastName || ''}` : ''}</strong>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Transfer Amount</Col>
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
          <Col xs={6}>Email</Col>
          <Col xs={6}>
            <strong>{transaction ? ` (${transaction.contact.email})` : ''}</strong>
          </Col>
        </Row>
        <Stack gap={3} direction="horizontal">
          <Button
            className="zippy-btn zippy-flat d-flex"
            onClick={handleBack}
            disabled={processing}
          >
            Back
          </Button>
          <Button
            className="zippy-btn d-flex ms-auto"
            onClick={handleCancelRequest}
            disabled={processing}
          >
            {processing && <div className="loading spinner-border" role="status" />}
            {!processing ? 'Cancel Request' : 'Cancelling...'}
          </Button>
        </Stack>
      </div>
    </Modal.Body>
  </Modal>
);

export default CancelRequestForMoneyVerification;
