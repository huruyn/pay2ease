import { Col, Row } from 'react-bootstrap';

export default function GetAlertedHeader() {
  return (
    <Row
      style={{
        backgroundColor: '#EFEFEF',
        borderBottom: '1px solid grey',
      }}
    >
      <Col md={8}>
        <p style={{ marginTop: 12 }}>GET ALERTED WHEN...</p>
      </Col>
      <Col md={4}>
        <p style={{ marginTop: 12 }}>SEND ALERT TO...</p>
      </Col>
    </Row>
  );
}
