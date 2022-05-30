/* eslint-disable no-console */

import {
  Alert,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Nav,
} from 'react-bootstrap';
import PanelHeader from './components/PanelHeader';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function MyAccounts() {
  return (
    <div className="page-content">
      <CommonPageContainer title="My Accounts">
        <div className="d-flex justify-content-between">
          <p>
            Welcome DUANE TOUGH. Your last visit: November 9, 2021 at 4:54 p.m.
            ET
          </p>
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
            <p>Online Security Guarantee</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <Alert variant="primary">
              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: 40,
                    height: 45,
                    border: '1px dotted grey',
                    textAlign: 'center',
                  }}
                >
                  P
                </div>
                <div>
                  <h3>COVID-19 Support</h3>
                  <p>
                    We&apos;re commited to supporting you. Find the latest information
                    and available resources.
                  </p>
                  <div className="d-flex justify-content-end">
                    <a href="/home" className="text-danger">
                      Go to COVID-19 Support
                      {' >'}
                    </a>
                  </div>
                </div>
              </div>
            </Alert>
            <Alert variant="primary" dismissible>
              <p style={{ marginTop: 10 }}>
                You&lsquo;ve been rewarded with a new offer.
                <a href="/">Check out your offer now before it expires!</a>
              </p>
            </Alert>
            <div className="row">
              <div className="col-md-3 text-center d-flex flex-column align-items-center justify-content-center border-right">
                <p>Deposit Accounts</p>
                <p>$37,139.59</p>
              </div>
              <div className="col-md-3 text-center d-flex flex-column align-items-center justify-content-center border-left">
                <p>+</p>
                <p>Apply for a new product</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p style={{ margin: 'auto' }}>View: </p>
                <Nav>
                  <Nav.Link>List</Nav.Link>
                  <Nav.Link>Pie Charts</Nav.Link>
                </Nav>
              </div>
              <h5>Balance</h5>
            </div>
            <PanelHeader
              title="Deposite Accounts"
              sub_title="Get up to $300 back with ZippyX Global Money Transfer. "
            />
            <div className="row">
              <div className="col-md-9">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingTop: 10, paddingBottom: 10 }}
                >
                  <div
                    className="d-flex flex-column"
                    style={{ borderLeft: '2px solid green', paddingLeft: 10 }}
                  >
                    <a href="/" style={{ color: 'rgb(220, 53, 69)' }}>
                      Chequing
                    </a>
                    <span style={{ fontSize: 12 }}>01702-81-99639</span>
                  </div>
                  <span>$ 2,260.57</span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingTop: 10, paddingBottom: 10 }}
                >
                  <div
                    className="d-flex flex-column"
                    style={{ borderLeft: '2px solid green', paddingLeft: 10 }}
                  >
                    <a href="/" style={{ color: 'rgb(220, 53, 69)' }}>
                      Chequing
                    </a>
                    <span style={{ fontSize: 12 }}>01702-81-99639</span>
                  </div>
                  <span>$ 2,260.57</span>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingTop: 10, paddingBottom: 10 }}
                >
                  <div
                    className="d-flex flex-column"
                    style={{ borderLeft: '2px solid green', paddingLeft: 10 }}
                  >
                    <a href="/" style={{ color: 'rgb(220, 53, 69)' }}>
                      Chequing
                    </a>
                    <span style={{ fontSize: 12 }}>01702-81-99639</span>
                  </div>
                  <span>$ 2,260.57</span>
                </div>
              </div>
              <div className="col-md-3">Graph Here</div>
            </div>
            <PanelHeader
              title="Non-Registered Investments"
              sub_title=""
              border_color="#B23C54"
            />
            <div style={{ padding: 10 }}>
              <p>
                You don&apos;t have any non-registered investments with ZippyX
              </p>
              <a href="/" style={{ color: 'rgb(220, 53, 69)', fontSize: 14 }}>
                Kick-start your investing with ZippyX Investor&apos;s Edge
                {' > '}
              </a>
            </div>
            <PanelHeader
              title="Registered Investments"
              sub_title=""
              border_color="#BC6800"
            />
            <div style={{ padding: 10 }}>
              <a href="/" style={{ color: 'rgb(220, 53, 69)', fontSize: 14 }}>
                Grow your money with special interest rates on our TFSA and RRSP
                savings accounts
                {' > '}
              </a>
            </div>
            <PanelHeader title="Credit" border_color="#0163A6" sub_title="" />
            <div style={{ padding: 10 }}>
              <div className="d-flex justify-content-end">
                <span style={{ color: 'grey' }}>Icon</span>
                <span>Active Card</span>
              </div>
              <a href="/" style={{ color: 'rgb(220, 53, 69)', fontSize: 14 }}>
                Join and get up to $1,200 in value with the ZippyX Aventura Visa
                Infinite Card Conditions apply.
                {' > '}
              </a>
            </div>
            <div className="d-flex">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  borderTop: '3px solid grey',
                  padding: 10,
                  flex: 1,
                  marginLeft: 5,
                  backgroundColor: '#F2F3F2',
                  paddingBottom: 40,
                  paddingTop: 25,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 45,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Create a savings goal
                </p>
              </div>
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  borderTop: '3px solid grey',
                  padding: 10,
                  flex: 1,
                  marginLeft: 5,
                  backgroundColor: '#F2F3F2',
                  paddingBottom: 40,
                  paddingTop: 25,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 45,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                <span style={{ fontWeight: 'bold', marginTop: 12 }}>
                  Your net worth:
                </span>
                <span style={{ fontWeight: 'bold' }}>$337,139.59</span>
                <div
                  className="d-flex flex-column justify-content-start"
                  style={{ width: '100%', marginTop: 15 }}
                >
                  <span style={{ fontWeight: 'bold' }}>Assets:</span>
                  <span>$337,139.59</span>
                  <div
                    style={{
                      width: '100%',
                      height: 10,
                      backgroundColor: '#5E5C99',
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  className="d-flex flex-column justify-content-start"
                  style={{ width: '100%', marginTop: 15 }}
                >
                  <span style={{ fontWeight: 'bold' }}>Liabilities:</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  borderTop: '3px solid grey',
                  padding: 10,
                  flex: 1,
                  marginLeft: 5,
                  backgroundColor: '#F2F3F2',
                  paddingBottom: 40,
                  paddingTop: 25,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 45,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                <p
                  style={{
                    fontWeight: 'bold',
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  Your ZippyX Financial HealthCheck goal is to manage your money
                  better
                </p>
                <span style={{ fontWeight: 'bold' }}>Last completed:</span>
                <span>September 16, 2021</span>
              </div>
            </div>
            <div
              className="d-flex"
              style={{ padding: 25, marginTop: 15, backgroundColor: '#F2F3F2' }}
            >
              <div
                style={{
                  width: 145,
                  height: 160,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <div style={{ paddingLeft: 15 }}>
                <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>
                  Save up to 10 cents per litre on gas(1)
                </p>
                <p>
                  Link and use your ZippyX card with Journie Rewards to save on
                  gas at participating Pioneer, Fas Gas, Ultramar and Chevron
                  gas stations.(2)
                </p>
                <a href="/" style={{ color: 'rgb(220, 53, 69)' }}>
                  Link your card
                  {' >'}
                </a>
              </div>
            </div>
            <div
              className="d-flex"
              style={{
                paddingTop: 15,
                paddingBottom: 10,
                borderTop: '1px solid grey',
                borderBottom: '2px solid grey',
                marginTop: 10,
              }}
            >
              <p style={{ color: '#5A5F61' }}>
                ZippyX is a member of Canada Deposit Insurance Corporation (CDIC)
              </p>
              <Button
                className="d-flex align-items-center"
                style={{
                  borderRadius: 50,
                  backgroundColor: '#64296D',
                  border: 'none',
                  height: 50,
                }}
              >
                <div
                  style={{
                    width: 20,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 5,
                  }}
                >
                  P
                </div>
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <span style={{ fontSize: 13 }}>DEPOSIT</span>
                  <span style={{ fontSize: 13 }}>PROTETION</span>
                </div>
              </Button>
            </div>
            <div style={{ marginTop: 10 }}>
              <p style={{ fontWeight: 'bold' }}>Note:</p>
              <p style={{ color: '#5A5F61' }}>
                &quot;My Accounts&quot; includes the online accounts you hold
                with ZippyX and its affilliates. For help, please contact the ZippyX
                support line at 1-888-872-2422
              </p>
            </div>
            <div
              style={{
                padding: 10,
                backgroundColor: '#F2F3F2',
                borderBottom: '1px solid grey',
              }}
            >
              <span style={{ color: 'rgb(220, 53, 69)' }}>+</span>
              <span style={{ fontWeight: 500 }}>
                Trademarks and Disclaimers
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <Card className="p-3 bg-white">
              <Card.Title>Quick Transfer</Card.Title>
              <Card.Body>
                <p>Cant find your account in the list?</p>
                <Form.Label>From:</Form.Label>
                <Form.Select>
                  <option>Choose an account</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label>To:</Form.Label>
                <Form.Select>
                  <option>Choose an account</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label>Amount:</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                  <FormControl
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button className="zippy-btn">Next</Button>
              </Card.Body>
            </Card>
            <Card className="bg-white" style={{ marginTop: 10 }}>
              <Card.Body>
                <p>My Profile</p>
                <div style={{ borderBottom: '1px solid grey' }}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span style={{ color: 'rgb(220, 53, 69)' }}>-</span>
                      <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                        Home Address
                      </span>
                    </p>
                    <span>Edit</span>
                  </div>
                  <div style={{ paddingLeft: 10 }}>
                    <p style={{ fontSize: 14 }}>
                      717-257 ADELAIDE ST W TORONTO, ON M5H 4E7
                    </p>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span style={{ color: 'rgb(220, 53, 69)' }}>-</span>
                      <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                        Contact Details
                      </span>
                    </p>
                    <span>Edit</span>
                  </div>
                  <div style={{ paddingLeft: 10 }}>
                    <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                      Email
                    </span>
                    <p style={{ fontSize: 14 }}>dtough@hotmail.com</p>
                    <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                      Home
                    </span>
                    <p style={{ fontSize: 14 }}>410-553-1372</p>
                    <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                      Mobile
                    </span>
                    <p style={{ fontSize: 14 }}>410-553-1372</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-white" style={{ marginTop: 10 }}>
              <Card.Body className="d-flex flex-column">
                <p>Quick Links</p>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Stop payments
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Change your password
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Void Cheque / Direct Deposit Form (PDF, 510KB)
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Sign up for and view your eStatements
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Go to ZippyX Rewards
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Apply for a credit limit increase
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Register for FREE SPC (Student and Youth Clients)
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Link my cards to Journie Rewards
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Button variant="outline-danger" style={{ fontSize: 13 }}>
                    Show more
                  </Button>
                  <a
                    href="/"
                    className="text-decoration-none text-black"
                    style={{ fontSize: 13, marginTop: 5 }}
                  >
                    Show all
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ marginTop: 10, backgroundColor: '#F2F3F2' }}>
              <div
                style={{
                  width: 195,
                  height: 145,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <Card.Body>
                <Card.Text>
                  Travelling out of province or the country?
                </Card.Text>
                <p style={{ fontSize: 13 }}>
                  Make sure you&apos;re protected. Consider ZippyX Travel Medical
                  Insurancce
                </p>
                <a href="/" style={{ color: 'rgb(220, 53, 69)' }}>
                  Learn More
                  {' > '}
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CommonPageContainer>
    </div>
  );
}
