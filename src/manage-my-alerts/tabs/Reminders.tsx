import { Button, Row } from 'react-bootstrap';
import AlertElement from '../components/AlertElement';
import GetAlertedHeader from '../components/GetAlertedHeader';
import InactiveAlertNote from '../components/InactiveAlertNote';

interface AlertMessage {
  id: number;
  text: string;
}

export default function Reminders() {
  const transactionAlertes: AlertMessage[] = [
    { id: 1, text: 'A postdated bill advance notification was sent' },
    { id: 2, text: 'A reminder that an upcoming scheduled transfer is due' },
    { id: 3, text: 'A new message is available in My Messages' },
    { id: 4, text: 'A scheduled transfer was successful' },
    {
      id: 5,
      text: 'There are new documents available in your ZippyX Dgital Vault',
    },
  ];
  return (
    <>
      <GetAlertedHeader />
      {transactionAlertes.map((alert) => (
        <AlertElement key={alert.id} text={alert.text} />
      ))}

      <span style={{ fontSize: '20px' }}>
        <span style={{ color: '#EF3545', marginRight: 5 }}>+</span>
        Notice of change
      </span>
      <hr
        style={{
          height: '2px',
          color: 'C4C4C4',
        }}
      />
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
