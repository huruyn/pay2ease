import { Button, Col, Row } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function SetUpBillPayments() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Setup Bill Payments">
        <Row className="mt-4">
          <Col xs={9}>
            <Row>
              <Col>
                <div className="border border-2 border-danger mb-4 p-2 rounded">
                  You currently do not have any payees set up for online Bill Payment. Please add a
                  payee to proceed.
                </div>
              </Col>
            </Row>
            <div className="border-bottom border-1" />
            <Row className="mt-2 mt-4">
              <Col className="text-end">
                <Button>Add Payee</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={3} className="mb-2">
            <div className="border p-2 rounded">
              <b>You can also:</b>
              <br />
              Add or Edit Payees &gt;
              <br />
              View All Payments &gt;
              <br />
              Manage My Alerts &gt;
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
