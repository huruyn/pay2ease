import {
  Col, Modal, Row, Form,
} from 'react-bootstrap';

export interface EditEmailAccountContentProps {
  handleCancel: () => void;
  handleSave: () => void;
}

export const EditEmailAccountContent = ({
  handleCancel,
  handleSave,
}: EditEmailAccountContentProps) => (
  <>
    <Row style={{ padding: '30px' }}>
      <h3>EMAIL ADDRESS UPDATE</h3>
      <p style={{ marginTop: '10px' }}>
        this is your email address on file with ZippyX.
      </p>
      <span>
        Communication for ebills, alerts. interac e-Transfer messages and
        promotional materials will be sent to you at this email address.
      </span>
      <Row
        style={{
          display: 'flex',
          margin: '30px 10px',
        }}
      >
        <Col>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="EmailAddress"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Col md={3}>
              <Form.Label>Email Address:</Form.Label>
            </Col>
            <Col md={9}>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="dtough@hotmail.com"
                  style={{ padding: '7px 7px', width: '200px' }}
                  required
                />
                <a href="./" style={{ color: 'black' }}>
                  Send a test email
                </a>
              </Col>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row
        style={{
          display: 'flex',
          margin: '30px 10px',
        }}
      >
        <Col>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="EmailAddress"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Col md={3}>
              <Form.Label column style={{ marginRight: '40px' }}>
                Email format:
              </Form.Label>
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="HTML (include graphics)"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                checked
                onChange={(e) => e.preventDefault()}
              />
              <Form.Check
                type="radio"
                label="Plain text"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Row>
    <Row
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
        padding: '20px 10px',
        backgroundColor: '#e3e3e3',
        margin: '0px',
      }}
    >
      <Col>
        <button
          type="button"
          id="cancel-btn-edit-email-account"
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            padding: '5px 12px',
            border: '0',
          }}
          onClick={handleCancel}
        >
          <i />
          Cancel
        </button>
      </Col>
      <Col style={{ textAlign: 'end' }}>
        <button
          type="button"
          id="save-btn-edit-email-account"
          style={{
            borderRadius: '3px',
            padding: '5px 12px',
            backgroundColor: '#C41F3E',
            borderColor: '#C41F3E',
            color: 'white',
          }}
          onClick={handleSave}
        >
          Save
        </button>
      </Col>
    </Row>
  </>
);
export interface EditEmailAccountProps extends EditEmailAccountContentProps {
  show: boolean;
}
const EditEmailAccount = ({
  show,
  handleCancel,
  handleSave,
}: EditEmailAccountProps) => (
  <Modal animation={false} show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <EditEmailAccountContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </Modal.Body>
  </Modal>
);

export default EditEmailAccount;
