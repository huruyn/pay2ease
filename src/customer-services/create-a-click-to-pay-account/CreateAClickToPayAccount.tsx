import {
  Alert,
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function CreateAClickToPayAccount() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Signup For Click to Pay">
        <Row className="pt-2 pb-2">
          <Col md="12">
            <h4>Click to Pay</h4>
          </Col>
          <Col md="12">
            Paying online is easy, efficient and secure. When you use Click to
            Pay, there&apos;s no more entering 16-digit card numbers, looking up
            passwords or filling out forms to make online purchases. Use Click to
            Pay in all digital checkouts that have the Click to Pay icon
          </Col>
        </Row>
        <Row className="pt-2 pb-2">
          <Col md="12">
            <h4>Signing up for Click to Pay is easy:</h4>
          </Col>
          <Col md="12">
            <p>
              Shop with confidence knowing that using Click to Pay protects your
              online payment information with multiple layers of security.
            </p>
            <p>Sign up for Click to Pay today.</p>
          </Col>
        </Row>
        <Row className="pt-2 pb-2">
          <Col md="12" style={{ borderBottom: '2px solid #c5c1c1' }}>
            <h4>Terms and Conditions</h4>
          </Col>
          <Col md="12" className="pt-2 pb-2">
            <p>
              Please read the following terms and conditions and print a copy your
              records. To continue, check the box at the bottom of the agreement,
              then select &quot;Next&quot;. If you do not agree, you will not be
              registered for the service
            </p>
          </Col>
          <Col md="12" className="d-flex justify-content-end mb-1">
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
              Print or save ZippyX Terms and Conditions for Click to Pay (PDF, 15
              KB)
            </Button>
          </Col>
        </Row>
        <Row style={{ border: '1px solid grey' }}>
          <Col md="12">
            <div className="p-4">
              <h6 className="text-uppercase">ZippyX Terms & Conditions</h6>
              <ol>
                <li>
                  These terms and conditions apply to the use of Click to Pay
                  through ZippyX. Click to Pay is a service provided
                  by EMVCo, By agreeing to these terms and conditions, you are
                  agreeing to link directly to Visa&apos;s Click to Pay website
                  from ZippyX. You must also agree to the Click to
                  Pay terms and conditions to use Click to Pay.
                </li>
                <li>
                  Once you register fo Click to pay, your Click to Pay account
                  will be linked to ZippyX. This means that when you
                  access your Click to Pay account through ZippyX,
                  you will not be required to log in separately.
                </li>
                <li>
                  ZippyX will provide Click to Pay with your ZippyX payment card
                  information when you register for Click to Pay. This includes
                  any ZippyX Visa or MasterCard credit cards and ZippyX Advantage
                  Debit Cards that you have and that are in good standing. You can
                  choose which of these cards you want to add your Click to Pay
                  account while enrolling for Click to Pay
                </li>
              </ol>
            </div>
          </Col>
          <div className="p-4" style={{ background: '#a1a1a1', color: 'white' }}>
            <Form.Check
              type="checkbox"
              name="agree-terms-and-conditions"
              label="I agree to the Terms & Conditions"
              id="agree-terms-and-conditions"
            />
          </div>
        </Row>
        <Row className="mt-3">
          <Col md="12">
            <Alert variant="info">
              After you click &quot;Next&quot; you will be taken to Click to Pay
              in a new window to complete your enrollment
            </Alert>
          </Col>
          <Col
            md="12"
            className="pt-1 d-flex justify-content-between"
            style={{ borderTop: '1px solid #c5c1c1' }}
          >
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
              Cancel enrollment
            </Button>
            <Button className="zippy-btn d-flex">
              Next
            </Button>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
