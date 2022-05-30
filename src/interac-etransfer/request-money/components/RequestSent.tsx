import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Account, Contact } from '../../../api';
import { PageIds } from '../RequestMoney';

const getSelectedById = (id: number, obj:any) => id && obj?.find((el:any) => el.id === id);
const Divider = () => <div className="border-top my-3" />;

export const RequestSentPure = ({
  account,
  contact,
  mainInfo,
  setCurrentStep,
  navigateStep,
  setContactToSend,
  setSelectedAccount,
  setMainInfo,
}: {
  account: Account,
  contact: Contact,
  mainInfo: any,
  setCurrentStep: any,
  navigateStep: any,
  setContactToSend: any,
  setSelectedAccount: any,
  setMainInfo: any,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center mt-4">
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
        <h4>Your request has been sent</h4>
      </div>
      <Row className="mt-4">
        <Col md={4}>
          <p>Sent To:</p>
        </Col>
        <Col md={8}>
          <p>{ contact && `${contact.firstName} ${contact.lastName}` }</p>
          <p>kentu@shaw.ca</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Request Amount:</p>
        </Col>
        <Col md={8}>
          <p>{ mainInfo && `$ ${mainInfo.amount}` }</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Deposit To:</p>
        </Col>
        <Col md={8}>
          <p>{ account && account.name }</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>This Request Will Expire On:</p>
        </Col>
        <Col md={8}>
          <p>Jan 2, 2022</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4">
        <Col md={4}>
          <p>Reference Number:</p>
        </Col>
        <Col md={8}>
          <p>cbec8cf23v3we3</p>
        </Col>
      </Row>
      <Divider />
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            className="d-flex"
            style={{ marginRight: 10 }}
            onClick={() => {
              setContactToSend(0);
              setSelectedAccount(0);
              setMainInfo({
                amount: 0,
                message: '',
                invoiceNumber: 0,
                notifyByEmail: false,
                notifyTextMessage: false,
                agreed: false,
              });
              navigate('/interac-etransfer/status/requested');
            }}
          >
            Check Status
          </Button>
          <Button
            variant="danger"
            className="zippy-btn"
            onClick={() => {
              setContactToSend(0);
              setSelectedAccount(0);
              setMainInfo({
                amount: 0,
                message: '',
                invoiceNumber: 0,
                notifyByEmail: false,
                notifyTextMessage: false,
                agreed: false,
              });
              setCurrentStep(1);
              navigateStep(PageIds.DetailPageId);
            }}
          >
            Send another transfer
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default function RequestSent({
  accounts,
  contacts,
  selectedAccount,
  selectedContact,
  mainInfo,
  setCurrentStep,
  navigateStep,
  setContactToSend,
  setSelectedAccount,
  setMainInfo,
}: any): JSX.Element {
  const [account] = useState<Account>(getSelectedById(selectedAccount, accounts));
  const [contact] = useState<Contact>(getSelectedById(selectedContact, contacts));

  return (
    <RequestSentPure
      account={account}
      contact={contact}
      mainInfo={mainInfo}
      setCurrentStep={setCurrentStep}
      navigateStep={navigateStep}
      setContactToSend={setContactToSend}
      setSelectedAccount={setSelectedAccount}
      setMainInfo={setMainInfo}
    />
  );
}
