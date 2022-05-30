import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { Contact } from '../../api';
import Contacts from './Contacts/Contacts';

function ContactInput({
  contactList,
  setContactList,
  selectedContact,
  setSelectedContact,
}: {
  contactList: Array<Contact>;
  setContactList: Dispatch<SetStateAction<Array<Contact>>>;
  selectedContact: Contact;
  setSelectedContact: Dispatch<SetStateAction<Contact>>;
}) {
  const [showContactList, setShowContactList] = useState<boolean>(false);

  return (
    <>
      <div className="contact-selector">
        <div className="contact-identifier">
          <FormControl
            type="text"
            placeholder="Enter @ZippyUsername or Email"
            value={selectedContact?.email}
            onChange={() => false}
          />
          <Button
            className={`btn-select-contact btn-transparent${selectedContact?.email ? ' active' : ''}`}
            type="button"
            onClick={() => {
              if (selectedContact?.email) {
                setSelectedContact({
                  id: null,
                  email: '',
                  firstName: '',
                  lastName: '',
                  phone: '',
                } as unknown as Contact);
              } else {
                setShowContactList(true);
              }
            }}
          >
            <i className="zippy-cash-icon zc-add" />
          </Button>
        </div>

        <div className="contact-list-wrap">
          <Contacts
            contactList={contactList}
            setContactList={setContactList}
            setSelectedContact={setSelectedContact}
            showContactList={showContactList}
            setShowContactList={setShowContactList}
          />
        </div>
      </div>
    </>
  );
}

ContactInput.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  setContactList: PropTypes.func,
  selectedContact: PropTypes.objectOf(PropTypes.any),
  setSelectedContact: PropTypes.func,
};

ContactInput.defaultProps = {
  contactList: [],
  setContactList: undefined,
  selectedContact: {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  setSelectedContact: undefined,
};

export default ContactInput;
