import { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import {
  Col, Row, Form, Button,
} from 'react-bootstrap';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import StepComponent from '../../../common/StepComponent';
import IdentityVerificationModal from './IdentityVerificationModal';
import CommonPageContainer from '../../../common/CommonPageContainer';

import Api from '../../../api';

const Divider = () => <div className="border-top my-3" />;
const HorizontalLine = () => (
  <hr
    style={{
      height: '2px',
      borderWidth: '0px',
      color: 'gray',
      background: 'gray',
      marginTop: 40,
    }}
  />
);

const LeftCol = ({ currentStep, setCurrentStep }: any) => (
  <Col xs={9}>
    <Row>
      <Col>
        <StepComponent
          steps={2}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          navigateSteps={() => {}}
        />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <h3>Contact Profile:</h3>
        <ul style={{ marginTop: 50 }}>
          <li>
            Change the contact profile by deleting or typing over the existing
            content then selecting Next
          </li>
          <li>
            Enter an email address or mobile phone number for your contact
          </li>
        </ul>
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      View upcoming bill payments and transfers &gt;
      <br />
      Stop a payment &gt;
      <br />
      Change your statement preferences &gt;
    </div>
  </Col>
);

const EditContact: React.FC = () => {
  const { state } = useLocation() as any;
  const { id } = useParams();
  const selectedContact = state?.item;
  const [firstName, setFirstName] = useState(selectedContact?.firstName);
  const [lastName, setLastName] = useState(selectedContact?.lastName);
  const [email, setEmail] = useState(selectedContact?.email);
  const [phone, setPhone] = useState(selectedContact?.phone);
  const [show, setShow] = useState(false);

  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  function saveContact() {
    new Api(instance, accounts[0])
      .postContact({
        firstName,
        lastName,
        email,
        phone,
      })
      .then(() => {
        navigate('../contact-list');
      })
      .catch((error) => {
        throw error.message;
      });
  }

  return (
    <>
      <IdentityVerificationModal
        show={show}
        handleClose={() => setShow(false)}
        selectedContact={selectedContact}
      />
      <CommonPageContainer title={`${(id ? 'Edit' : 'New')} Contact`}>
        <Row>
          <LeftCol currentStep={1} setCurrentStep={() => {}} />
          <RightCol />
        </Row>
        <Row>
          <Col xs="4">
            <span>
              Firstname:
            </span>
          </Col>
          <Col xs="4">
            <Form.Control
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col xs="4">
            <span>
              Lastname:
            </span>
          </Col>
          <Col xs="4">
            <Form.Control
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col xs="4">
            <span>
              Phone:
            </span>
          </Col>
          <Col xs="4">
            <Form.Control
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Col>
        </Row>
        <HorizontalLine />
        <Row style={{ marginTop: 30 }}>
          <Col xs="4">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              Email Address:
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Col>
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <a href="/">Delete</a>
          </Col>
        </Row>
        <HorizontalLine />
        <Row style={{ marginTop: 30 }}>
          <Col>
            <span>Notification Language:</span>
          </Col>
          <Col>
            <Form.Select>
              <option>English</option>
            </Form.Select>
          </Col>
          <Col>{}</Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col style={{ padding: 0, background: 'white' }}>
            <Button
              style={{ margin: 0, background: 'white', border: 'none' }}
              variant="light"
              className="d-flex"
            >
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
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              className="btn zippy-btn"
              onClick={() => {
                if (id) {
                  setShow(true);
                } else {
                  saveContact();
                }
              }}
              style={{ marginLeft: 15 }}
            >
              Next
            </Button>
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
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
        </Row>
      </CommonPageContainer>
    </>
  );
};

export default EditContact;
