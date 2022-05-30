import {
  Row,
  Col,
  Card,
  Form,
  Alert,
  FormControl,
  Button,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

const Divider = () => <div className="border-top my-3" />;

export default function StopPayments() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Stop Payment">
        <Row>
          <Col md={9}>
            <Row className="mt-3">
              <Col>
                <b>Step: 1 - 2</b>
              </Col>
            </Row>
            <h4 className="mt-3 mb-2">Before you begin</h4>
            <p>
              Contact the merchant or payee to ccancel the pre-authorized debit or
              void the cheque. If the merchant or payee are unable to accommodate
              your request, you can complete this form.
            </p>
            <ul>
              <li>
                It&apos;s important that the payment details provided are accurate
                so we can successfully stop the payment on your behalf.
              </li>
              <ul>
                <li>
                  The request must be submitted by 6 pm at least 1 business day in
                  advance of when the payment is due.
                </li>
                <li>
                  Refer to your transaction history for specific payee name
                  details.
                </li>
                <li>
                  Verify the amount using your statement. If the amount is
                  unknown, leave the amount field blank
                </li>
                <li>
                  If the information isn&apos;t accurate, we&apos;ll do our best
                  to match with details provided, but we may not always be
                  successful.
                </li>
              </ul>
              <li>
                The fee of this service varies by the level of information
                provided.
              </li>
              <ul>
                <li>
                  $12.50: If you have complete payee and amount details and enter
                  them in the form below.
                </li>
                <li>
                  $20.00: If you have complete payee details and the amount of the
                  payment is unknown. Tip: use this option if the amount
                  isn&apos;t the same every month for the PAD.
                </li>
              </ul>
              <li>
                The request will be in effect for 12 months. After this point,
                contact the merchant or payee to stop additional payments or
                submit another request using this form.
              </li>
              <li>
                To confirm if the stop payment request has been successful, review
                your account transaction history in 2 business days. You may
                notice that the payment was prcessed and then returned.
              </li>
              <li>
                If you would like to stop a ZippyX payment, you can call at
                1-800-465-2422
              </li>
            </ul>
            <div>
              <h5
                className="pb-2 pt-2 mb-2 mt-3"
                style={{ borderBottom: '1px solid grey' }}
              >
                Step 1: Enter the account and payment details
              </h5>
              <p>Select the account you used to make the payment.</p>
              <Row className="pb-2 pt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    From account:
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <Form.Select>
                    <option>Choose an account</option>
                  </Form.Select>
                </Col>
              </Row>
              <Divider />
              <Row className="pb-2 pt-2">
                <Col md={12}>
                  <p>
                    Make sure the payee name is accurate and entered exxactly as
                    shown in your transaction history
                  </p>
                  <Alert variant="secondary">
                    Tip: You can copy the exact name of merchant or payee from
                    your transaction history. The payee name is after
                    &quot;PREAUTHORIZED DEBIT.&quot; For example, with
                    &quot;PREAUTHORIZED DEBIT SAMPLE LTD,&quot; the payee name
                    would be &quot;SAMPLE LTD&quot;.
                  </Alert>
                </Col>
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Payee name:
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <FormControl type="text" />
                </Col>
              </Row>
              <Divider />
              <Row className="pb-2 pt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Payment amount:
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <FormControl type="text" />
                  <Form.Check type="checkbox" label="I dont't know the amount" />
                </Col>
              </Row>
              <Divider />
            </div>
            <div>
              <h5
                className="pb-2 pt-2 mb-2 mt-3"
                style={{ borderBottom: '1px solid grey' }}
              >
                Step 2: Select the payment type:
              </h5>
              <Row className="pb-2 pt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Payment type:
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <Form.Check type="radio" label="Stop a pre-authorized debit" />
                  <Form.Check type="radio" label="Stop a payment on a cheque" />
                </Col>
              </Row>
              <Divider />
              <Row className="pb-2 pt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Cheque number(3 digits):
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <FormControl type="text" />
                </Col>
                <Alert variant="secondary" className="mt-3">
                  Tip: The cheque number is the first 3 digits of the code on the
                  bottom-left corner of the cheque.
                </Alert>
              </Row>
              <Divider />
              <Row className="pb-2 pt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Date on cheque:
                  </Form.Label>
                </Col>
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <FormControl placeholder="Month" type="text" />
                    </Col>
                    <Col md={3}>
                      <FormControl placeholder="Day" type="text" />
                    </Col>
                    <Col md={3}>
                      <FormControl placeholder="Year" type="text" />
                    </Col>
                    <Col md={2}>
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
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
            </div>
            <div>
              <h5
                className="pb-2 pt-2 mb-2 mt-3"
                style={{ borderBottom: '1px solid grey' }}
              >
                Step 3: Choose an account to pay the stop payment fee
              </h5>
              <p className="mt-2">
                Select the account from which to pay the fee.
              </p>
              <Row className="pb-2 pt-2 mt-2">
                <Col md={4}>
                  <Form.Label style={{ color: 'grey', fontSize: 14 }}>
                    Service fee from account:
                  </Form.Label>
                </Col>
                <Col md={6}>
                  <Form.Select>
                    <option>Choose an account</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>
            <div>
              <h5
                className="pb-2 pt-2 mb-2 mt-3"
                style={{ borderBottom: '1px solid grey' }}
              >
                Step 4: Review the details and confirm that you want to proceed
              </h5>
              <p>
                Read the following Terms and Conditions and select &quot;I
                agree&quot; to request stop payment.
              </p>
              <Row className="mt-3">
                <Col md="12">
                  <div className="p-4" style={{ border: '1px solid grey' }}>
                    <h4>Stop Payment Terms and Conditions</h4>
                    <p>
                      (Not applicable to stop payments on pre-authorized payments
                      set up using ZippyX Advantage Debit Card
                      <sup>TM1</sup>
                      details
                      <sup>1</sup>
                      )
                    </p>
                    <ul>
                      <li>
                        ZippyX will attempt to stop payment of the cheque or
                        pre-authorized debit described below(&quot;item&quot;) and will
                        require a reasonable period to process your stop payment
                        order (&quot;order&quot;).
                      </li>
                      <li>
                        If your order cannot be processed before the item is paid
                        to the payee, we will refund the service charge and have
                        not further liability to you. An order received after 6 pm
                        ET will be considered to be received the next banking day.
                      </li>
                      <li>
                        Your order is in effect for 12 months from the date it is
                        submitted, or the date of the item whichever is later.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="p-4"
                    style={{ background: '#a1a1a1', color: 'white' }}
                  >
                    <Form.Check
                      type="checkbox"
                      name="agree-terms-conditions"
                      label="I agree to these terms and conditions and wish to request a stop payment."
                      id="agree-terms-conditions"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="mt-4"
              style={{
                borderTop: '1px solid grey',
                borderBottom: '1px solid grey',
              }}
            >
              <Row className="mt-4 mb-4">
                <Col>
                  <Button variant="light" className="d-flex">
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
                    Cancel
                  </Button>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button className="zippy-btn d-flex">
                    Next
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="mt-2 pt-2">
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
              <p className="mt-2">
                <b>Service Fee Details</b>
              </p>
              <p>
                A stop payment fee of $12.50 will be charged when you provide full
                details.
              </p>
              <p>
                A stop payment fee of $20 will be charged when you don&apos;t
                provide full details
              </p>
              <p>Full details on a cheque are Cheque Number and Amount.</p>
              <p>
                Full details on a pre-authorized payment are Payee and Amount.
              </p>
              <p>
                This fee doesn&apos;t apply to ZippyX Smart
                <sup>TM</sup>
                Plus Accounts or Wood Gundy Asset Advantage Accounts.
              </p>
              <p>
                <sup>1</sup>
                For stop payments on pre-authorized debits or recurring payments
                set up with ZippyX Advantage Debit Card details, contact the
                merchant, biller or payee directly and tell them to stop charging
                your account through your ZippyX Advantage Debit Card. If they
                don&apos;t stop, ZippyX may be able to work with Visa* to request a
                refund for you.
              </p>
              <p>
                <sup>TM 1</sup>
                Trandemark of ZippyX.
              </p>
              <p>
                <sup>*</sup>
                Trandemark of Visa Int., used under license
              </p>
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
                  Pay Bills
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
