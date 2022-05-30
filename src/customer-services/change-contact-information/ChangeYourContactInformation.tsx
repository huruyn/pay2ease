import {
  Col,
  Row,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ChangeYourContactInformation() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Change Your Contact Information">
        <Row>
          <Col md={8}>
            <Row className="mt-3">
              <Col>
                <b>Step: 1 - 2</b>
              </Col>
            </Row>
            <h4 className="mt-4">Enter and verify your contact information</h4>
            <p className="mt-3">
              ZippyX will use this new email address to communicate with you for
              many reasons including sending you promotional materials,
              eStatements, alerts, Interac e-Transfer messages and one-time
              verification codes. Choose an email address provided by a
              corporation or educational institution; for account security, ZippyX
              doesn&apos;t send one-time verification codes to personal or free
              email services.
            </p>
            <p>All fields are mandatory unless indicated (optional).</p>
          </Col>
          <Col md={4}>
            <Card className="p-3 bg-white">
              <Card.Title>You can also:</Card.Title>
              <Card.Body>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Change your address
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div
              style={{
                borderBottom: '2px solid grey',
                paddingTop: 10,
                paddingBottom: 10,
                fontWeight: 'bold',
              }}
            >
              Contact Information
            </div>
            <Row className="pt-3 pb-3" style={{ borderBottom: '1px solid grey' }}>
              <Col md={3}>
                <span>Email address:</span>
              </Col>
              <Col md={9}>
                <Row>
                  <Col md={6}>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                  <Col md={6}>
                    <Button variant="outline-danger">Send a test email</Button>
                  </Col>
                </Row>
                <p style={{ fontSize: 14, marginTop: 10 }}>
                  ZippyX will use this new email address to communicate with you for
                  many reasons including sending you promotional materials,
                  eBills, alerts and Interac e-Transfer messages.
                </p>
              </Col>
            </Row>
            <Row className="pt-3 pb-3" style={{ borderBottom: '1px solid grey' }}>
              <Col md={3}>
                <span>Email format:</span>
              </Col>
              <Col md={9}>
                <Form.Check
                  type="radio"
                  id="html"
                  label="HTML (includes graphics)"
                />
                <Form.Check type="radio" id="plain_text" label="Plain Text" />
              </Col>
            </Row>
            <Row className="pt-3 pb-3" style={{ borderBottom: '1px solid grey' }}>
              <Col md={3}>
                <span>Mobile phone:</span>
              </Col>
              <Col md={9}>
                <Row>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Col>
                </Row>
                <p style={{ fontSize: 14, marginTop: 10 }}>
                  If you choose to receive alerts by SMS (Short Message Service),
                  standard messaging and data rates from your carrier may apply.
                  We will send you a monthly reminder through text message every
                  30 days to allow you to opt out of receiving text messages from
                  us. This service is only available to Canadian wireless device
                  numbers.
                </p>
              </Col>
            </Row>
            <Row className="pt-3 pb-3" style={{ borderBottom: '1px solid grey' }}>
              <Col md={3}>
                <span>Home phone:</span>
                <div>(optional)</div>
              </Col>
              <Col md={9}>
                <Row>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="pt-3 pb-3" style={{ borderBottom: '1px solid grey' }}>
              <Col md={3}>
                <span>Business phone:</span>
                <div>(optional)</div>
              </Col>
              <Col md={9}>
                <Row className="justify-content-center">
                  <Col md={3}>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                  <Col md="auto" className="mt-2">
                    <span>Extension</span>
                  </Col>
                  <Col md={6}>
                    <Form.Control type="text" placeholder="" />
                    <p>
                      Phone numbers with extensions cannot be used to receive
                      alerts.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 pb-4" style={{ borderBottom: '1px solid grey' }}>
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
                  Save
                </Button>
              </Col>
            </Row>
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
              <ul>
                <li>
                  If you have chosen to receive alerts by SMS and you delete your
                  SMS mobile phone number, you will no longer receive alerts
                  through your mobile phone number
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
