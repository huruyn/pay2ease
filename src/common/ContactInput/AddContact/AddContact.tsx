import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import {
  Dispatch,
  useState,
} from 'react';
import { useMsal } from '@azure/msal-react';
import Api, { Contact } from '../../../api';

function AddContact({
  onContactCreated,
}: {
  onContactCreated: Dispatch<Contact>;
}) {
  const { instance, accounts } = useMsal();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const isValid = (): boolean => {
    const regEmail = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

    if (firstName.length < 3) return false;
    if (lastName.length < 3) return false;
    if (!email.match(regEmail)) return false;
    if (nickname && nickname.length < 3) return false;

    return !!firstName && !!lastName && !!email;
  };

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setNickname('');
  };

  const addContact = () => {
    if (isValid()) {
      setIsProcessing(true);
      new Api(instance, accounts[0])
        .postContact({
          firstName,
          lastName,
          email,
          nickname,
        }).then((response: Contact) => {
          resetFields();
          onContactCreated(response);
        }).finally(() => setIsProcessing(false));
    }
  };

  return (
    <>
      <div className="container-header">
        <h2 className="title">Add  Contact</h2>
      </div>
      <div className="container-body">
        <FormControl
          type="text"
          className="common-input"
          placeholder="Firstname"
          name="firstname"
          value={firstName}
          onChange={(evt) => setFirstName(evt.target.value)}
        />
        <FormControl
          type="text"
          className="common-input"
          placeholder="Lastname"
          name="lastname"
          value={lastName}
          onChange={(evt) => setLastName(evt.target.value)}
        />
        <FormControl
          type="text"
          className="common-input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <FormControl
          type="text"
          className="common-input"
          placeholder="Nickname (optional)"
          name="nickname"
          value={nickname}
          onChange={(evt) => setNickname(evt.target.value)}
        />
      </div>
      <div className="action">
        <Button
          className="zippy-btn"
          disabled={isProcessing || !isValid()}
          onClick={() => addContact()}
        >
          {isProcessing && <div className="loading spinner-border" role="status" />}
          Add Contact
        </Button>
      </div>
    </>
  );
}

AddContact.propTypes = {
  onContactCreated: PropTypes.func,
};

AddContact.defaultProps = {
  onContactCreated: undefined,
};

export default AddContact;
