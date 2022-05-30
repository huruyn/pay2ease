import {
  Col,
  Modal,
  Row,
  Button,
  Spinner,
} from 'react-bootstrap';
import currencyFormatter from '../helpers/CurrencyFormatter';

export interface TransferDetails {
  source: { name: string };
  destination: { firstName: string; lastName: string; email: string };
  fromAccount: string;
  amount: number;
}
export interface RequestMoneyVerificationModalProps {
  show: boolean;
  handleClose: () => void;
  handleNext: () => void;
  handleBack: () => void;
  transferDetails: TransferDetails;
  isRequestingMoney: boolean;
}
const RequestMoneyVerificationModal = ({
  show,
  handleClose,
  handleNext,
  handleBack,
  transferDetails,
  isRequestingMoney,
}: RequestMoneyVerificationModalProps) => (
  <Modal show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <Row style={{ padding: '15px' }}>
        <h2>Request MONEY - VERIFICATION</h2>
        <div>
          <p>
            Verify that the information below is accurate and select Request Money
          </p>
          <p>Note: You can&apos;t recall the transfer after it&apos;s sent.</p>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>Request To:</p>
            </Col>
            <Col>
              <p>{`${transferDetails.destination.firstName} ${transferDetails.destination?.lastName}`}</p>
              <p>{transferDetails.destination.email}</p>
            </Col>
          </Row>
          <hr style={{ marginTop: '0px' }} />
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>Amount:</p>
            </Col>
            <Col>
              <p>{`${currencyFormatter().format(transferDetails.amount)}`}</p>
            </Col>
          </Row>
          <hr style={{ marginTop: '0px' }} />
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Col>
              <p>To Account:</p>
            </Col>
            <Col>
              <p>{transferDetails.fromAccount}</p>
            </Col>
          </Row>
        </div>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
          backgroundColor: '#EAEAEA',
          padding: '0px',
          margin: '0px',
        }}
      >
        <Col style={{ padding: '15px' }}>
          <Button
            variant="link"
            disabled={isRequestingMoney}
            onClick={handleClose}
            style={{
              borderRadius: '4px',
              color: 'black',
              padding: '5px 12px',
              textDecoration: 'none',
            }}
          >
            <i />
            Cancel
          </Button>
        </Col>
        <Col style={{ textAlign: 'end', padding: '15px' }}>
          <button
            type="button"
            disabled={isRequestingMoney}
            style={{
              marginRight: '15px',
              borderRadius: '4px',
              borderColor: '#C41F3E',
              color: '#C41F3E',
              padding: '5px 12px',
            }}
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            style={{
              borderRadius: '4px',
              padding: '5px 12px',
              backgroundColor: '#C41F3E',
              borderColor: '#C41F3E',
              color: 'white',
            }}
            disabled={isRequestingMoney}
            onClick={!isRequestingMoney ? handleNext : undefined}
          >
            {isRequestingMoney ? (
              <span>
                Requesting
                <Spinner style={{ marginLeft: '16px' }} animation="border" variant="light" size="sm" />
              </span>
            ) : (
              'Request Money'
            )}
          </button>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

export default RequestMoneyVerificationModal;
