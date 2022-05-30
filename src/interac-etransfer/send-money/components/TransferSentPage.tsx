import { DateTime } from 'luxon';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PageIds } from '../SendMoney';
import currencyFormatter from '../../helpers/CurrencyFormatter';

export interface TransferInformation{
  source: { name: string; email: string };
  destination: { name: string; email: string };
  fromAccount: string;
  securityQuestion: string;
  securityAnswer: string;
  expiryDate: DateTime;
  submitted: DateTime;
  balance: number;
  amount: number;
  referenceNumber: number;
}
interface TransferSentPageProps{
  isCompleted: boolean;
  transferInformation: TransferInformation;
}

const TransferSentPage = ({
  isCompleted,
  transferInformation,
}: TransferSentPageProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center">
        <div
          style={{
            width: 20,
            height: 25,
            border: '1px dotted grey',
            textAlign: 'center',
            marginRight: 10,
          }}
        >
          P
        </div>
        <h4>Your transfer has been sent</h4>
      </div>
      <p>
        If you opted to send a notification of your transfer, your contact will
        receive it shortly.
      </p>
      {!isCompleted && <p>This transfer is final and can&apos;t be recalled.</p>}
      <Row className="mt-4">
        <Col md={4}>
          <Form.Label>From:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{transferInformation.source.name}</Form.Label>
          <p>{transferInformation.source.email}</p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>To:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{transferInformation.destination.name}</Form.Label>
          <p>{transferInformation.destination.email}</p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Account Balance:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{`${currencyFormatter().format(transferInformation.balance)}`}</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      {isCompleted && (
        <>
          <Row className="mt-2">
            <Col md={4}>
              <Form.Label>Security Question:</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Label>{transferInformation.securityQuestion}</Form.Label>
            </Col>
          </Row>
          <hr style={{ height: '1px', width: '100%' }} />
          <Row className="mt-2">
            <Col md={4}>
              <Form.Label>Response:</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Label>***************</Form.Label>
            </Col>
          </Row>
          <hr style={{ height: '1px', width: '100%' }} />
        </>
      )}

      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Amount:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{`${currencyFormatter().format(transferInformation.amount)}`}</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>From Account:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{transferInformation.fromAccount}</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      {isCompleted && (
        <>
          <Row className="mt-2">
            <Col md={4}>
              <Form.Label>Expiry Date:</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Label>
                {transferInformation.expiryDate.toLocaleString(DateTime.DATE_MED)}
              </Form.Label>
            </Col>
          </Row>
          <hr style={{ height: '1px', width: '100%' }} />
        </>
      )}
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Reference Number:(keep for your records)</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{transferInformation.referenceNumber}</Form.Label>
        </Col>
      </Row>
      <p className="mt-4">{`Submitted: ${transferInformation.submitted.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}.`}</p>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            className="d-flex"
            style={{ marginRight: 10 }}
            onClick={() => {
              navigate('/interac-etransfer/status/sent');
            }}
          >
            Check Status
          </Button>
          <Button
            className="zippy-btn d-flex"
            onClick={() => {
              navigate(`/interac-etransfer/send-money/${PageIds.DetailsPageId}`);
            }}
          >
            Send another transfer
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h4>
            It&apos;s safe and easy to get Interac e-Transfer funds deposited
            directly into your account
          </h4>
          <a href="/" className="text-danger">
            Register for Autodeposit
            {'>'}
          </a>
        </Col>
        <Col md={4}>
          <div style={{ width: '100%', height: 150, border: '1px dotted grey' }}>
            p
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TransferSentPage;
