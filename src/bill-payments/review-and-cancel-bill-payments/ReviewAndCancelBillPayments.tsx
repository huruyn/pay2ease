import {
  Button,
  Col,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ReviewAndCancelBillPayments() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Setup Bill Payments">
        <Row>
          <Col>
            <h2>Review & Cancel Bill Payments</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={9}>
            <ul>
              <li>
                This page displays the date that you requested a payment, which may
                be different from the date we processed the payment.
              </li>
              <li>
                A payment scheduled for today can be deleted until 9:30 p.m. ET.
              </li>
              <li>
                If you delete a recurring payment, all payments in the series will be deleted.
              </li>
              <li>
                Sufficient funds must be available in your account 1 business day before the payment
                date; otherwise, the transaction will be cancelled without notice to you.
              </li>
            </ul>
          </Col>
          <Col xs={3} className="mb-2">
            <div className="border p-2 rounded">
              <b>You can also:</b>
              <br />
              Change your contact information &gt;
              <br />
              Change your statement preferences &gt;
              <br />
              View upcoming bill payments and transfers &gt;
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="border border-2 border-danger p-2 rounded">
              You currently do not have any payees set up for online Bill Payment.
              Please add a payee to proceed.
            </div>
          </Col>
        </Row>
        <Row className="mt-4 mb-2">
          <Col>
            <h4>PAYMENT DISPLAY OPTIONS</h4>
          </Col>
        </Row>
        <div className="border-bottom border-4" />
        <Row className="align-items-center mt-2">
          <Col xs={4}>
            <span className="px-2">Payees:</span>
            <u>Add a Payee</u>
          </Col>
          <Col xs={8}>
            <span className="px-2">Payment type:</span>
            <Form.Select className="d-inline-block w-auto">
              <option>Show upcoming and past payments</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mt-4 mb-2">
          <Col>
            <h4>UPCOMING PAYMENTS</h4>
          </Col>
        </Row>
        <div className="border-bottom border-4" />
        <Row>
          <Col>
            <Table>
              <thead style={{ backgroundColor: '#f2f3f2' }}>
                <tr>
                  <th>PAYMENT DATE</th>
                  <th>PAYEE</th>
                  <th>AMOUNT</th>
                  <th>ACCOUNT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="text-center">
            You currently have no scheduled upcoming payments.
          </Col>
        </Row>
        <Row className="align-items-center mt-4 mb-2">
          <Col xs="auto">
            <h4>PAST PAYMENTS</h4>
          </Col>
          <Col xs="auto">
            <Form.Select className="d-inline-block w-auto">
              <option>Show past 3 months</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="border-bottom border-4" />
        <Row>
          <Col>
            <Table>
              <thead style={{ backgroundColor: '#f2f3f2' }}>
                <tr>
                  <th>PAYMENT DATE</th>
                  <th>PAYEE</th>
                  <th>AMOUNT</th>
                  <th>ACCOUNT</th>
                  <th>STATUS</th>
                  <th>REFERENCE NUMBER</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
        <Row className="my-4">
          <Col className="text-center">
            You have no past payments for this time period.
          </Col>
        </Row>
        <div className="border-bottom border-1" />
        <Row className="mt-2 mb-4">
          <Col className="text-end">
            <Button className="mx-2" variant="outline-primary">My Accounts</Button>
            <Button>Pay Bills</Button>
          </Col>
        </Row>
        <div className="border-bottom border-1" />
        <Row className="mt-2">
          <Col>
            <b>Note:</b>
            <br />
            Payments made to ZippyX credit cards are treated as transfers and are displayed on the
            &quot;Account Details&quot; page under &quot;My Accounts.&quot;
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
