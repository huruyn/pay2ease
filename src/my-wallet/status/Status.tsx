import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Status() {
  return (
    <>
      <Outlet />
      <div className="mt-2">
        <div className="d-flex">
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
          <span style={{ fontWeight: 'bold' }}>Note:</span>
        </div>
        <div className="d-flex align-items-end">
          <span>Your use of my-wallet is subject to the </span>
          <Row>
            <Col md={12} className="d-flex align-items-center mt-2">
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
              <span>my wallet terms and Conditions (PDF, 197KB).</span>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
