import {
  Col,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import QUESTIONS from './Questions';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function LearnMore() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Learn About Interac E-Transfer">
        <Row className="mt-3">
          <Col md={9}>
            <h5>Send and receive money by email or mobile phone number</h5>
            <p className="mt-3">
              With Interac e-Transfer, you can use ZippyX to send and
              receive money electronically. It&apos;s great alternative to cash or
              cheques and all you need to get started is an email address or
              Canadian mobile phone number.
            </p>
            <ul className="mt-4" style={{ listStyle: 'none', padding: 2 }}>
              {QUESTIONS.map((item) => (
                <li
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderBottom: '1px solid grey',
                  }}
                  key={item.key}
                >
                  <a
                    href="/"
                    className="text-decoration-none text-black"
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                      display: 'block',
                    }}
                  >
                    {item.title}
                    <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                      {'>'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
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
                  Send Money
                </Button>
              </Row>
            </div>
            <div className="mt-4">
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
              <div>
                <span>Your use of Interac e-Transfer is subject to the </span>
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
                    <span>
                      Interac e-Transfer Terms and Conditions (PDF, 197KB).
                    </span>
                  </Col>
                </Row>
              </div>
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
                  View upcoming bill payments and transfers
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
                  Stop a payment
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
                  Change your statement preferences
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
