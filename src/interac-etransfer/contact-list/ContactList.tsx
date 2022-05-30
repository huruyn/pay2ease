/* eslint-disable no-console */
import { useMsal } from '@azure/msal-react';
import {
  Col, Row, Card, Table, Button, Modal,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api, { Contact } from '../../api';
import { formatContactName } from '../../Helpers';
import CommonPageContainer from '../../common/CommonPageContainer';

const RemoveContactModal: React.FC<{
  show: boolean;
  selectedContact: Contact;
  onHide: VoidFunction;
  onDeleteConfirm: VoidFunction;
}> = ({
  show,
  selectedContact,
  onHide,
  onDeleteConfirm,
}) => (
  <Modal
    show={show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    id="remove-contact-modal"
  >
    <Modal.Body>
      <h4 style={{ marginTop: 20 }}>Delete Contact - Verification</h4>
      <p>
        Are you sure you want to remove the contact below from your contact
        list?
      </p>
      <Row style={{ marginTop: 50, marginBottom: 20 }}>
        <Col>
          <span>Name:</span>
        </Col>
        <Col>
          {formatContactName(
            selectedContact?.firstName,
            selectedContact?.lastName,
          )}
        </Col>
      </Row>
      <hr
        style={{
          height: '2px',
          borderWidth: '0px',
          color: 'gray',
          background: 'gray',
        }}
      />
      <Row style={{ marginTop: 20, marginBottom: 20 }}>
        <Col>
          <span>Email Address:</span>
        </Col>
        <Col>{selectedContact?.email}</Col>
      </Row>
      <Row style={{ marginTop: 50 }}>
        <Col style={{ padding: 0, background: 'white' }}>
          <Button
            onClick={onHide}
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
          <Button variant="outline-danger" onClick={onHide}>
            Close
          </Button>
          <Button
            id="remove-contact-button"
            className="btn zippy-btn"
            style={{ marginLeft: 15 }}
            onClick={onDeleteConfirm}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);

// As we are using TypeScript - there are no need to use propTypes package.
// eslint-disable-next-line react/prop-types
const ContactList = () => {
  const { instance, accounts } = useMsal();

  const [modalShow, setModalShow] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<{ email: string }>();

  useEffect(() => {
    new Api(instance, accounts[0])
      .listContacts()
      .then((result) => setContacts(result ?? []))
      .catch((error) => console.log('error', error));
  }, []);

  const onDeletePressed = (contact: any) => () => {
    setModalShow(true);
    setSelectedContact(contact);
  };
  const onDeleteConfirm = () => {
    const filtered = contacts?.filter(
      ({ email }: Contact) => email !== selectedContact?.email,
    );
    setContacts(filtered || []);
    setModalShow(false);
  };

  return (
    <div className="page-content">
      <CommonPageContainer title="Contact List">
        <Row>
          <Col md={9}>
            <h4 className="mt-4">Add, Edit or Delete a Contact</h4>
            <ul className="mt-4">
              <li>
                To edit a contact&apos;s details, select the contact&apos;s nameddd
              </li>
              <li>
                <a href="/" className="text-black">
                  Edit your Interac e-Transfer alert preferences
                </a>
              </li>
              <li>
                <Link to="add/">
                  <Button variant="link" className="text-black">
                    Add New Contact
                  </Button>
                </Link>
              </li>
              <li>
                Note: Contacts names can not be identical. Please verify and edit
                (if necessary)
              </li>
            </ul>
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
                  Register for Interac e-Transfer Autodeposit
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
                  Make an additional loan payment
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
                  Order cheques
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Table className="mt-4">
              <thead>
                <tr
                  className="bg-light"
                  style={{ borderTop: '1px solid #c5c5c5' }}
                >
                  <th>Contact Name</th>
                  <th>Notification Language</th>
                  <th>Details</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody style={{ borderTop: 'none' }}>
                {contacts.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <Link to={`edit/${item.id}`} state={{ item }}>
                        {formatContactName(item?.firstName, item?.lastName)}
                      </Link>
                    </td>
                    <td>English</td>
                    <td>
                      {item.email && <div>{item.email}</div>}
                      {item.phone && <div>{item.phone}</div>}
                    </td>
                    <td>
                      <Button
                        onClick={onDeletePressed(item)}
                        variant="light"
                        className="text-black d-flex"
                        id={`contact-list-${index}`}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 25,
                            border: '1px dotted grey',
                            textAlign: 'center',
                            marginRight: 10,
                          }}
                          title="print"
                        >
                          P
                        </div>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                <RemoveContactModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  selectedContact={selectedContact as Contact}
                  onDeleteConfirm={onDeleteConfirm}
                />
              </tbody>
            </Table>
            <div
              className="mt-4 p-3"
              style={{
                borderTop: '1px solid #e5e5e5',
                borderBottom: '1px solid #e5e5e5',
              }}
            >
              <Row className="d-flex justify-content-end">
                <Link to="add/">
                  <Button
                    className="zippy-btn d-flex"
                    style={{ width: 'auto' }}
                  >
                    Add New Contact
                  </Button>
                </Link>
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
              <div className="d-flex align-items-end">
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
        </Row>
      </CommonPageContainer>
    </div>
  );
};

export default ContactList;
