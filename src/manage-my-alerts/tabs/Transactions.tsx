import { Button, Row } from 'react-bootstrap';
import AlertElement from '../components/AlertElement';
import GetAlertedHeader from '../components/GetAlertedHeader';
import InactiveAlertNote from '../components/InactiveAlertNote';

interface AlertMessage {
  id: number;
  text: string;
}

export default function Transactions() {
  const transactionAlertes: AlertMessage[] = [
    { id: 1, text: 'A scheduled bill payment has failed' },
    { id: 2, text: 'A scheduled bill payment was successful' },
    { id: 3, text: 'A scheduled transfer has failed' },
    { id: 4, text: 'A scheduled transfer was successful' },
    { id: 5, text: 'An interac e-Transfer was sent' },
    { id: 6, text: 'A return has been made' },
    { id: 7, text: 'Held funds are now available' },
  ];
  return (
    <>
      <GetAlertedHeader />
      {transactionAlertes.map((alert) => (
        <AlertElement key={alert.id} text={alert.text} />
      ))}
      <Row className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          style={{ width: 'auto', marginRight: 10 }}
        >
          Reset
        </Button>
        <Button className="zippy-btn" style={{ width: 'auto', marginRight: 10 }}>
          Save
        </Button>
      </Row>
      <InactiveAlertNote />
    </>
  );
}
