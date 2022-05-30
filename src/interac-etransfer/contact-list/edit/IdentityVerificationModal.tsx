import { useState } from 'react';
import {
  Col, Modal, Row, Button, Form, FormControl,
} from 'react-bootstrap';

const VerificationStep = ({
  handleNext,
  handleClose,
  handleBack,
  data,
}: any) => (
  <>
    <Row style={{ padding: '15px' }}>
      <h2>EDIT CONTACT - Verification</h2>
      <div className="mt-5">
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col>
            <p>Name:</p>
          </Col>
          <Col>
            <p>{data?.name}</p>
          </Col>
        </Row>
        <hr style={{ marginTop: '0px' }} />
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col>
            <p>Email Address:</p>
          </Col>
          <Col>
            <p>{data?.email}</p>
          </Col>
        </Row>
        <hr style={{ marginTop: '0px' }} />
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Col>
            <p>Notification Language:</p>
          </Col>
          <Col>
            <p>{data?.lang}</p>
          </Col>
        </Row>
        <hr style={{ marginTop: '0px' }} />
      </div>
    </Row>
    <Row
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
        backgroundColor: '#EAEAEA',
        padding: '0px',
        margin: '0px',
      }}
    >
      <Col style={{ padding: '15px' }}>
        <Button
          variant="link"
          onClick={handleClose}
          style={{
            borderRadius: '4px',
            color: 'black',
            padding: '5px 12px',
            textDecoration: 'none',
          }}
        >
          <i />
          Cancel
        </Button>
      </Col>
      <Col style={{ textAlign: 'end', padding: '15px' }}>
        <button
          type="button"
          style={{
            marginRight: '15px',
            borderRadius: '4px',
            borderColor: '#C41F3E',
            color: '#C41F3E',
            padding: '5px 12px',
          }}
          onClick={handleBack}
        >
          Back
        </button>
        <button
          type="button"
          style={{
            borderRadius: '4px',
            padding: '5px 12px',
            backgroundColor: '#C41F3E',
            borderColor: '#C41F3E',
            color: 'white',
          }}
          onClick={handleNext}
        >
          Continue
        </button>
      </Col>
    </Row>
  </>
);

const SendCodeStep = ({ handleNext, handleClose }: any) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const sendCode = () => {
    setIsSent(true);
  };

  return (
    <>
      <Row style={{ padding: '15px' }}>
        <h2>IDENTITY VERIFICATION</h2>
        <div className="mt-4">
          <p>
            In order to protect your online security, we need to verify your
            identity.
            <a href="/">Learn about one-time verification codes.</a>
          </p>
          <p>
            Please choose a contact method. We will send you an automated
            message that includes a one-time verification code and details of
            the applicable transaction to the contact method you choose. Once
            you receive the verification code, please enter it belong as soon as
            possible because it will expire.
          </p>
          <p>
            Note: For account security, we&apos;re no longer sending one-time
            verification codes to personal or free email services.
          </p>
          <p>
            If you close this page you won&apos;t be able to enter the one-time
            verification code.
          </p>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}
          >
            <Col>
              {!showOptions && (
                <>
                  <div
                    style={{
                      padding: '0.375rem 0.75rem',
                      fontWeight: 'bold',
                      fontSize: 22,
                    }}
                  >
                    Samsung Duane&apos;s Note10+
                  </div>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={() => setShowOptions(true)}
                  >
                    Send code another way
                  </Button>
                </>
              )}
              {showOptions && (
                <>
                  <Form.Label>Your contact method</Form.Label>
                  <Form.Select className="another-verification-way">
                    <option>Choose</option>
                    <option value={"Samsung Duane's Note10+"}>
                      Push to your device: Samsung Duane&apos;s Note10+
                    </option>
                    <option value="Text: 410-553-1372">
                      Text: 410-553-1372
                    </option>
                    <option value="Call: 410-553-1372">
                      Call: 410-553-1372
                    </option>
                  </Form.Select>
                </>
              )}
            </Col>
            <Col md={4}>
              {!isSent && (
                <Button variant="outline-danger" onClick={sendCode}>
                  Send Code
                </Button>
              )}
              {isSent && (
                <Button variant="outline-danger" onClick={sendCode}>
                  Resend Code
                </Button>
              )}
            </Col>
          </Row>
          {isSent && (
            <>
              <div
                className="mt-3"
                style={{
                  padding: '0.375rem 0.75rem',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 55,
                    height: 55,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                <div>
                  <h4>The verification code has been sent.</h4>
                  <p>
                    Please check your messages then enter the one-time
                    verification code below.
                  </p>
                </div>
              </div>
              <div className="mt-4" style={{ padding: '0.375rem 0.75rem' }}>
                <Form.Label>Enter the verification code</Form.Label>
                <FormControl type="text" style={{ width: 200 }} />
              </div>
            </>
          )}
        </div>
      </Row>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
          backgroundColor: '#EAEAEA',
          padding: '0px',
          margin: '0px',
        }}
      >
        <Col style={{ padding: '15px' }}>
          <Button
            variant="link"
            onClick={handleClose}
            style={{
              borderRadius: '4px',
              color: 'black',
              padding: '5px 12px',
              textDecoration: 'none',
            }}
          >
            <i />
            Cancel
          </Button>
        </Col>
        <Col style={{ textAlign: 'end', padding: '15px' }}>
          {isSent && (
            <button
              type="button"
              style={{
                borderRadius: '4px',
                padding: '5px 12px',
                backgroundColor: '#C41F3E',
                borderColor: '#C41F3E',
                color: 'white',
              }}
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </Col>
      </Row>
    </>
  );
};

export const ModalContent = ({
  handleBack,
  selectedContact,
  step,
  handleNext,
  closeMethod,
}: any) => (
  <>
    {step === 0 && (
      <VerificationStep
        data={selectedContact}
        handleNext={handleNext}
        handleBack={handleBack}
        handleClose={closeMethod}
      />
    )}
    {step === 1 && (
      <SendCodeStep
        data={selectedContact}
        handleNext={closeMethod}
        handleClose={closeMethod}
      />
    )}
  </>
);

export interface IdentityVerificationModalProps {
  show: boolean;
  handleClose: () => void;
  selectedContact: object;
}
const IdentityVerificationModal = ({
  show,
  handleClose,
  selectedContact,
}: IdentityVerificationModalProps) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(1);
  };

  const closeMethod = () => {
    handleClose();
  };

  return (
    <Modal show={show} size="lg">
      <Modal.Body style={{ padding: '0px' }}>
        <ModalContent
          show={show}
          handleClose={handleClose}
          selectedContact={selectedContact}
          step={step}
          handleNext={handleNext}
          closeMethod={closeMethod}
          handleBack={handleBack}
        />
      </Modal.Body>
    </Modal>
  );
};

export default IdentityVerificationModal;
