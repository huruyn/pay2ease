import { Dispatch, SetStateAction } from 'react';
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Account, Contact, User } from '../../../api';
import { TransferMainDetails } from '../SendMoney';
import { formatContactName } from '../../../Helpers';

interface DetailsPageProps {
  selectedContact : number;
  setContactToSend: Dispatch<SetStateAction<number>>;
  mainInfo: TransferMainDetails;
  setMainInfo: Dispatch<SetStateAction<TransferMainDetails>>;
  accounts: Account[] | null;
  contacts: Contact[] | null;
  selectedAccount: number;
  setSelectedAccount: Dispatch<SetStateAction<number>>;
  handleSecurity: any;
  isProcessing: boolean;
  user: User | undefined;
}
const DetailsPage = ({
  selectedContact = 0,
  setContactToSend,
  mainInfo,
  setMainInfo,
  accounts,
  contacts,
  selectedAccount,
  setSelectedAccount,
  user,
  handleSecurity,
  isProcessing,
}: DetailsPageProps): JSX.Element => {
  const getUserFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const getUserEmail = () => (user && user?.email);

  const handleContactChange = (evt: any) => {
    setContactToSend(Number(evt.target.value));
  };

  const handleAccountChange = (evt: any) => {
    setSelectedAccount(Number(evt.target.value));
  };

  const getEmail = (id: number) => {
    const contact = id ? contacts?.find((el: Contact) => el.id === id) : 'No email';
    return (contact as Contact)?.email || 'No email';
  };

  const getSelectedContactItem = () => contacts?.find((el: Contact) => el.id === selectedContact);

  return (
    <>
      <h4>Your Interac e-Transfer Details</h4>
      <ul>
        <li>
          Fees apply to Interac e-Transfer transactions.
          {' '}
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer fees
          </a>
        </li>
        <li>
          There are limits on how much money you can send in a day, a week and a
          month.
          {' '}
          <a href="/" className="text-black">
            Learn more about Interac e-Transfer limits
          </a>
        </li>
        <li>
          Note: Sending money outside of Canada? Use the
          {' '}
          <a href="/" className="text-black">
            ZippyX Global Money Transfer Services
          </a>
        </li>
      </ul>
      <Row className="mt-4">
        <Col md={4}>
          <Form.Label>Send Money To:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="send-account-select"
            onChange={handleContactChange}
            value={selectedContact}
          >
            <option>Select</option>
            {contacts?.map((item: Contact) => (
              <option key={item.id} value={item.id}>
                {formatContactName(item.firstName, item.lastName)}
              </option>
            ))}
          </Form.Select>
          <div className="contact-details">
            <div>
              { `Email: ${getEmail(selectedContact)}` }
            </div>
            {contacts && user && (
            <div className="contact-details-controls">
              <Link
                to={`/interac-etransfer/contact-list/edit/${selectedContact}`}
                className={`contact-details-links noselect ${!selectedContact && 'disabled-link'}`}
                state={{ item: getSelectedContactItem() }}
              >
                Edit Contact
              </Link>
              <Link
                to="/interac-etransfer/contact-list/edit"
                className="contact-details-links noselect"
                state={{ item: getSelectedContactItem() }}
              >
                New Contact
              </Link>
            </div>
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Amount:</Form.Label>
        </Col>
        <Col md={8}>
          <FormControl
            value={mainInfo?.amount}
            type="number"
            step=".01"
            onChange={(evt) => setMainInfo({ ...mainInfo, amount: Number(evt.target.value) })}
          />
          <Form.Label>
            The maximum amount you can send in each transfer is $3,000.
          </Form.Label>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>From Account:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="from-account-info"
            onChange={(evt) => handleAccountChange(evt)}
            value={selectedAccount}
          >
            <option>Select</option>
            {
              accounts?.map((account:Account) => (
                <option key={account.name} value={account.id}>{account.name}</option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Transfer Method:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Select
            className="transfer-method"
            onChange={(evt) => setMainInfo({ ...mainInfo, transferMethod: evt.target.value })}
            value={mainInfo?.transferMethod}
          >
            <option>Email</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Message (Optional):</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(evt) => setMainInfo({ ...mainInfo, message: evt.target.value })}
            value={mainInfo?.message}
          />
          <p>
            Do not provide the security question, any part of the security
            answer or any confidential information in your message to the
            contact. This message will be viewable on the Interac e-Transfer
            Status page.
          </p>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
      <Row className="mt-2">
        <Col md={12}>
          <p>
            This is how you will appear in all emails to your Interac e-Transfer
            contacts. If incorrect,
            {' '}
            <a href="/" className="text-black">
              edit your profile.
            </a>
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Your Email Nickname:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{getUserFullName()}</Form.Label>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <Form.Label>Your Email Address:</Form.Label>
        </Col>
        <Col md={8}>
          <Form.Label>{getUserEmail()}</Form.Label>
        </Col>
      </Row>
      <hr style={{ height: '1px', width: '100%' }} />
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
          <Button
            className="zippy-btn d-flex"
            onClick={handleSecurity}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span>
                Next
                <Spinner style={{ marginLeft: '16px' }} animation="border" variant="light" size="sm" />
              </span>
            ) : (
              'Next'
            )}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DetailsPage;
