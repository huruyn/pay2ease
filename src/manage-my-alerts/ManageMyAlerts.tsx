import { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import EditBusinessPhone from './edit-business-phone/EditBusinessPhone';
import EditEmailAccount from './edit-email-account/EditEmailAccount';
import EditHomePhone from './edit-home-phone/EditHomePhone';
import EditMobilePhone from './edit-mobile-phone/EditMobilePhone';
import Reminders from './tabs/Reminders';
import Transactions from './tabs/Transactions';
import CommonPageContainer from '../common/CommonPageContainer';

export default function ManageMyAlerts() {
  const [showEditHomeModal, setShowEditHomeModal] = useState(false);
  const [showEditBusinessPhone, setShowEditBusinessPhone] = useState(false);
  const [showEditMobilePhone, setShowEditMobilePhone] = useState(false);
  const [showEditEmailAccount, setShowEditEmailAccount] = useState(false);

  const closeEditHomeModal = () => {
    setShowEditHomeModal(false);
  };

  const openEditHomeModal = () => {
    setShowEditHomeModal(true);
  };

  const closeEditBusinessPhone = () => {
    setShowEditBusinessPhone(false);
  };

  const openEditBusinessPhone = () => {
    setShowEditBusinessPhone(true);
  };

  const closeEditMobilePhone = () => {
    setShowEditMobilePhone(false);
  };

  const openEditMobilePhone = () => {
    setShowEditMobilePhone(true);
  };

  const closeEditEmailAccount = () => {
    setShowEditEmailAccount(false);
  };

  const openEditEmailAccount = () => {
    setShowEditEmailAccount(true);
  };

  const handleSave = () => { };

  return (
    <div className="page-content">
      <EditHomePhone
        show={showEditHomeModal}
        handleCancel={closeEditHomeModal}
        handleSave={handleSave}
      />
      <EditBusinessPhone
        show={showEditBusinessPhone}
        handleCancel={closeEditBusinessPhone}
        handleSave={handleSave}
      />
      <EditMobilePhone
        show={showEditMobilePhone}
        handleCancel={closeEditMobilePhone}
        handleNext={handleSave}
      />
      <EditEmailAccount
        show={showEditEmailAccount}
        handleCancel={closeEditEmailAccount}
        handleSave={handleSave}
      />
      <CommonPageContainer title="Manage My Alerts">
        <Row className="mt-3">
          <Col md={8}>
            <ul>
              <li>
                Alerts are notifictions that ZippyX sends to keep you informed of
                transactions and monitor your ZippyX accounts.
              </li>
              <li>
                Most alerts are sent automatically to My Messages by default and
                to any other additional contact methods you select and save.
              </li>
              <li>
                If you choose to activate Push Notifications, you must also enable
                them on your mobile device.
              </li>
              <li>
                Push Notifications are personalized alerts sent directly to your
                mobile device that can help you stay on top of your ZippyX accounts.
                If you sign into ZippyX from a mobile device other
                than your own, Your alerts may be sent to that device until
                another user signs in to the application.
              </li>
              <li>Some fraud prevention alerts cannot be turned off.</li>
            </ul>
            <Tabs
              defaultActiveKey="fraud"
              transition={false}
              id="status-tab"
              className="mt-2 mb-3"
            >
              <Tab eventKey="fraud" title="FRAUD PREVENTION">
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
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={8}>
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      There was unusual activity on my card
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
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Check type="checkbox" label="My Messages" />
                    <Form.Check type="checkbox" label="Email" />
                    <Form.Check type="checkbox" label="Text Message" />
                    <Form.Check type="checkbox" label="Push Notification" />
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={8}>
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      Changes have been made to my ZippyX passwords
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
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Check type="checkbox" label="My Messages" />
                    <Form.Check type="checkbox" label="Email" />
                    <Form.Check type="checkbox" label="Text Message" />
                    <Form.Check type="checkbox" label="Push Notification" />
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={8}>
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      My personal information has been updated on my profile
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
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Check type="checkbox" label="My Messages" />
                    <Form.Check type="checkbox" label="Email" />
                    <Form.Check type="checkbox" label="Text Message" />
                    <Form.Check type="checkbox" label="Push Notification" />
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={8}>
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      A bill payee or Interac e-Transfer contact was added
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
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Check type="checkbox" label="My Messages" />
                    <Form.Check type="checkbox" label="Email" />
                    <Form.Check type="checkbox" label="Text Message" />
                    <Form.Check type="checkbox" label="Push Notification" />
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={12}>
                    <Form.Check
                      type="checkbox"
                      label="There waas an attempt to exceed my ATM daily"
                    />
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      withdrawal limit
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
                    </div>
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={12} className="d-flex">
                    <Form.Check
                      type="checkbox"
                      label="There was an attempt to exceed your Point of Sale daily limit"
                    />
                    <div style={{ fontWeight: 'bold' }}>
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
                    </div>
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={12}>
                    <Form.Check
                      type="checkbox"
                      label="A bank machine withdrawal is more than this amount:"
                    />
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      <InputGroup className="mb-3" style={{ width: 200 }}>
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon1" />
                      </InputGroup>
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
                    </div>
                  </Col>
                </Row>
                <Row style={{ padding: 10, borderBottom: '1px solid grey' }}>
                  <Col md={12}>
                    <Form.Check
                      type="checkbox"
                      label="There was a debit card purchase more than:"
                    />
                    <div className="d-flex" style={{ fontWeight: 'bold' }}>
                      <InputGroup className="mb-3" style={{ width: 200 }}>
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        <FormControl aria-describedby="basic-addon1" />
                      </InputGroup>
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
                    </div>
                  </Col>
                </Row>
                <div
                  className="mt-4 p-3"
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    borderBottom: '1px solid #e5e5e5',
                  }}
                >
                  <Row className="d-flex justify-content-end">
                    <Button
                      variant="outline-danger"
                      className="d-flex"
                      style={{ width: 'auto', marginRight: 10 }}
                    >
                      Reset
                    </Button>
                    <Button
                      className="zippy-btn d-flex"
                      style={{ width: 'auto', marginRight: 10 }}
                    >
                      Save
                    </Button>
                  </Row>
                </div>
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
                  <div className="d-flex flex-column">
                    <ul>
                      <li>
                        An inactive alert status applies to bank accoiunts that
                        were automatically transferred from Paperless to
                        eStatements. If your alert status is displayed as
                        &apos;Inactive&apos;, it means you have not agreed to the
                        terms and conditions for eStatements. Once you have
                        accepted the terms and conditions, you alerts will be
                        activated and you will not see an &apos;Inactive&apos;
                        alert status.
                      </li>
                      <li>
                        In the case of credit cards, your alerts status will
                        always be active.
                      </li>
                      <li>
                        ZippyX Alerts Terms and Conditions are now a part of the
                        <a href="/" className="text-black">
                          Electronic Access Agreement
                        </a>
                      </li>
                    </ul>
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
                          eStatement Terms and Conditions (last updated: November
                          2011) (PDF, 145KB).
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="transactions" title="TRANSACTIONS">
                <Transactions />
              </Tab>
              <Tab eventKey="reminders" title="REMINDERS">
                <Reminders />
              </Tab>
            </Tabs>
          </Col>
          <Col md={4}>
            <Card className="bg-white">
              <Card.Body>
                <h5 className="mt-4 mb-3">Contact Information</h5>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    borderBottom: '1px solid grey',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Email</div>
                    <div style={{ color: 'grey' }}>dtough@hotmail.com</div>
                  </div>
                  <Button variant="link" className="text-black" onClick={openEditEmailAccount}>
                    Edit
                  </Button>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    borderBottom: '1px solid grey',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold' }}>SMS mobile phone</div>
                    <div style={{ color: 'grey' }}>410-553-1372</div>
                  </div>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={openEditMobilePhone}
                  >
                    Edit
                  </Button>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{
                    borderBottom: '1px solid grey',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Home Phone</div>
                    <div style={{ color: 'grey' }}>410-553-1372</div>
                  </div>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={openEditHomeModal}
                  >
                    Edit
                  </Button>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ paddingTop: 5, paddingBottom: 5 }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Business Phone</div>
                  </div>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={openEditBusinessPhone}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-white mt-4">
              <Card.Body>
                <h5>Did you know?</h5>
                <p>
                  You can avoid late credit card payments when you receive your
                  credit card minimum payment amount and due date via email or SMS
                </p>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{
                    marginTop: 10,
                    marginBottom: 5,
                    display: 'block',
                    fontSize: 15,
                  }}
                >
                  Turns on Minimum Payment Due alert now
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{
                    marginTop: 10,
                    marginBottom: 5,
                    display: 'block',
                    fontSize: 15,
                  }}
                >
                  Apply for a ZippyX Credit Card today
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
