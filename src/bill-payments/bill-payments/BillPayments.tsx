import {
  Col,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function BillPayments() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Pay Bills">
        <Row className="mt-4">
          <Col md={9} className="mt-2">
            <div
              style={{
                padding: 15,
                paddingTop: 20,
                border: '2px solid #8B1D41',
                borderRadius: 5,
              }}
            >
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
                <p>
                  You currently do not have any payees set up for online Bill
                  Payment. Please add a payee to proceed.
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <p>
                  {'{'}
                  Result #0069
                  {'}'}
                </p>
              </div>
            </div>
            <div
              className="mt-4 p-3"
              style={{
                borderTop: '1px solid #e5e5e5',
                borderBottom: '1px solid #e5e5e5',
              }}
            >
              <Row className="d-flex justify-content-end">
                <Button
                  className="zippy-btn d-flex"
                  style={{ width: 'auto' }}
                >
                  Add Payee
                </Button>
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <Card className="p-3 bg-white mt-2">
              <Card.Title>You can also:</Card.Title>
              <Card.Body>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{
                    fontSize: 12,
                    marginTop: 5,
                    marginBottom: 5,
                    display: 'block',
                  }}
                >
                  Add Payees
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{
                    fontSize: 12,
                    marginTop: 5,
                    marginBottom: 5,
                    display: 'block',
                  }}
                >
                  View eBills
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
