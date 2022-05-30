import { useState } from 'react';
import {
  Button, Col, Row, Stack,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import NumberFormat from 'react-number-format';
import { useMsal } from '@azure/msal-react';
import CancelRequestForMoneyVerification from '../../../dialogs/cancel-request-for-money-verification/CancelRequestForMoneyVerification';
import { TransactionProps } from '../../TransactionStatus';
import Api from '../../../../../api';

function RequestedPending({
  user,
  transaction,
  setCurrentStatus,
}: TransactionProps) {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { id } = useParams();
  const [showCancelRequestForMoney, setShowCancelRequestForMoney] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const getUserFullName = () => (user && user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : '');
  const getUserEmail = () => (user && user.email ? user.email : '');

  const handleNext = () => {
    setProcessing(true);
    new Api(instance, accounts[0])
      .getInteracEtransferSendReminder(Number(id))
      .finally(() => {
        setProcessing(false);
        setCurrentStatus('reminder');
        navigate(`/my-wallet/status/requested/reminder/${id}`);
      });
  };
  const cancelRequest = () => {
    setShowCancelRequestForMoney(true);
  };

  const handleCancelRequestForMoneyBack = () => {
    setShowCancelRequestForMoney(false);
  };

  const handleCancelRequestForMoneyConfirmed = async () => {
    setProcessing(true);
    await new Api(instance, accounts[0])
      .getInteracEtransferCancelTransaction(Number(id))
      .finally(() => {
        setProcessing(false);
        setShowCancelRequestForMoney(false);
        setCurrentStatus('cancelled');
        navigate(`/my-wallet/status/requested/cancelled/${id}`);
      });
  };

  return (
    <>
      <Row>
        <CancelRequestForMoneyVerification
          transaction={transaction}
          handleBack={handleCancelRequestForMoneyBack}
          handleCancelRequest={handleCancelRequestForMoneyConfirmed}
          show={showCancelRequestForMoney}
          processing={processing}
        />
      </Row>
      <Row>
        <Col xs={6}>From</Col>
        <Col xs={6}>
          <strong>{getUserFullName()}</strong>
          {user && ` (${getUserEmail()})`}
        </Col>
      </Row>
      <Row>
        <Col xs={6}>To</Col>
        <Col xs={6}>
          <strong>
            {transaction
              ? `${transaction.contact.firstName || ''} ${
                transaction.contact.lastName || ''
              }`
              : ''}
          </strong>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>Transfer Date</Col>
        <Col xs={6}>
          {transaction && transaction.date
            ? DateTime.fromISO(transaction.date).toLocaleString(
              DateTime.DATE_MED,
            )
            : ''}
        </Col>
      </Row>
      <Row>
        <Col xs={6}>Transfer Amount</Col>
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
      <Row>
        <Col xs={6}>
          <div>Reference Number</div>
          <div>(Keep For Your Records)</div>
        </Col>
        <Col xs={6}>{transaction?.id}</Col>
      </Row>
      <Row>
        <Col xs={6}>Expiry Date</Col>
        <Col xs={6}>Jan 2,2022</Col>
      </Row>
      <Stack gap={3} direction="horizontal">
        <Button className="zippy-btn zippy-flat d-flex" onClick={cancelRequest}>
          Cancel Reequest
        </Button>
        <Button
          className="zippy-btn d-flex ms-auto"
          onClick={handleNext}
          disabled={processing}
        >
          {processing && (
            <div className="loading spinner-border" role="status" />
          )}
          {!processing ? 'Send Reminder' : 'Sending...'}
        </Button>
      </Stack>
    </>
  );
}

export default RequestedPending;
