import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';
import Api, { User, Account } from '../../api';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import CommonPageContainer from '../../common/CommonPageContainer';

const Divider = () => <div className="border-top my-3" />;

const LeftCol = ({ user, accountList }: { user: User, accountList: Account[] }) => (
  <Col xs={9}>
    <Row>
      <Col>
        <h4 className="mt-4">Register for Autodeposit</h4>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        Want the funds you receive to be automatically deposited into your account, without signing
        on or answering security questions? Try Autodeposit. A notification will be sent to your
        contact method whenever a transfer is deposited to the bank account you select. You can
        register up to 5 email addresses and mobile phone numbers for Autodeposit.
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col xs={3}>Choose contact method:</Col>
      <Col xs={6}>
        <Form.Check type="radio" name="display" id="contact-email" label="Email" checked disabled />
        <Form.Check type="radio" name="display" id="contact-phone" label="Mobile phone number" disabled />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Enter your email Address:</Col>
      <Col xs={6}>
        <Form.Control type="text" value={user.email} />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Automatically Deposit To:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Select account</option>
          {accountList?.map((account: Account) => (
            <option key={account.id} value={account.id}>
              {account.name}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Your Legal Name:</Col>
      <Col xs={9}>
        {user.firstName}
        {' '}
        {user.lastName}
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        By registering, I understand that my legal name (where applicable) and email address or
        mobile phone number will display to anyone who sends me money through
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer.
        <br />
        <br />
        You may still be asked to answer a security question when receiving money from financial
        institutions that don&apos;t fully support Autodeposit.
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col className="text-end">
        <Button>Register</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <b>Note:</b>
        <br />
        Your use of
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer is subject to the
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer Terms and conditions (PDF, 197 KB).
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      Change your contact information &gt;
      <br />
      Change your statement preferences &gt;
      <br />
      View upcoming bill payments and transfers &gt;
    </div>
  </Col>
);

export const AutodepositSettingsPure = ({ user }: { user: User }) => {
  const { instance, accounts } = useMsal();
  const [accountList, setAccountList] = useState<Account[]>([]);

  useEffect(() => {
    new Api(instance, accounts[0])
      .listAccounts()
      .then((res) => {
        setAccountList(res);
      });
  }, [accounts]);
  return (
    <div className="page-content">
      <CommonPageContainer title="Setup AutoDeposit">
        <Row>
          <LeftCol user={user} accountList={accountList} />
          <RightCol />
        </Row>
      </CommonPageContainer>
    </div>
  );
};

export default function AutodepositSettings() {
  const { user } = useAppSelector(selectUser);
  return (user && <AutodepositSettingsPure user={user} />) || null;
}
