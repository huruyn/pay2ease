import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Contact } from '../../../api';
import { ContactTypeEnum } from '../../../constants/enum/ContactTypeEnum';
import { formatContactName } from '../../../Helpers';
import AddContact from '../AddContact/AddContact';

function Contacts({
  contactList,
  setContactList,
  selectedContact,
  setSelectedContact,
  showContactList,
  setShowContactList,
}: {
  contactList: Array<Contact>;
  setContactList: Dispatch<SetStateAction<Array<Contact>>>;
  selectedContact: Contact;
  setSelectedContact: Dispatch<SetStateAction<Contact>>;
  showContactList: boolean,
  setShowContactList: Dispatch<SetStateAction<boolean>>;
}) {
  const [contactType, setContactType] = useState<ContactTypeEnum>(ContactTypeEnum.PERSONAL);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [filteredContactList, setFilteredContactList] = useState<Array<Contact>>(contactList);
  const [searchValue, setSearchValue] = useState<string>('');
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isNewContact, setIsNewContact] = useState<boolean>(false);

  const filter = (value: string) => {
    setSearchValue(value);
    setFilteredContactList(contactList.filter((contactItem) => {
      const search = value.toLowerCase();
      return contactItem?.firstName?.toLowerCase().includes(search)
        || contactItem?.lastName?.toLowerCase().includes(search)
        || contactItem?.email?.toLowerCase().includes(search);
    }));
  };

  const contactCreate = (contact: Contact) => {
    const newContactAdded = [...contactList, contact];
    setContactList(newContactAdded);
    setIsNewContact(false);
    setShowContactList(true);
    setInitialized(false);
  };

  useEffect(() => {
    if (!initialized && contactList.length) {
      setInitialized(true);
      setIsProcessing(false);
      filter('');
    }

    if (showContactList) {
      setIsNewContact(false);
    }
  });

  return (
    <>
      <div className={`contact-container ${!isNewContact && showContactList ? 'visible' : 'hidden'}`}>
        <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
          <Button
            className={contactType === ContactTypeEnum.PERSONAL ? 'active' : ''}
            onClick={() => setContactType(ContactTypeEnum.PERSONAL)}
            disabled={contactType === ContactTypeEnum.PERSONAL}
          >
            Personal
          </Button>
          <Button
            className={contactType === ContactTypeEnum.BUSINESS ? 'active' : ''}
            onClick={() => setContactType(ContactTypeEnum.BUSINESS)}
            disabled={contactType === ContactTypeEnum.BUSINESS && true}
          >
            Business
          </Button>
        </div>
        <div className="contact-search">
          <i className="zippy-cash-icon zc-search" />
          <FormControl
            placeholder="Search..."
            value={searchValue}
            onChange={(evt) => filter(evt.target.value)}
          />
        </div>
        <div className="contact-list-container">
          {filteredContactList.length > 0
          && (
          <div className="personal-contacts">
            <h4>Contacts</h4>
            {filteredContactList?.map((item: Contact) => (
              <div className={`contact-item${selectedContact.id === item.id ? ' selected' : ''}`} key={item.id}>
                <div className="contact-name">
                  {formatContactName(item.firstName, item.lastName)}
                </div>
                <button
                  className="btn-select-contact btn-transparent"
                  type="button"
                  onClick={() => {
                    if (item.email) {
                      setSelectedContact(item);
                      setShowContactList(false);
                    }
                  }}
                >
                  <i className="zippy-cash-icon zc-personal" />
                </button>
              </div>
            ))}
          </div>
          )}
          {!initialized && filteredContactList.length === 0 && searchValue === '' && (
          <div>Loading...</div>
          )}
          {initialized && filteredContactList.length === 0 && searchValue !== '' && (
          <div>No match</div>
          )}
          {initialized && filteredContactList.length === 0 && searchValue === '' && (
          <div>No contacts</div>
          )}
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            disabled={isProcessing}
            onClick={() => {
              setShowContactList(false);
              setIsNewContact(true);
            }}
          >
            {isProcessing && <div className="loading spinner-border" role="status" />}
            Add Contact
          </Button>
        </div>
      </div>
      <div className={`contact-container ${isNewContact && !showContactList ? 'visible' : 'hidden'}`}>
        <AddContact
          onContactCreated={(contact: Contact) => contactCreate(contact)}
        />
      </div>
    </>
  );
}

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  setContactList: PropTypes.func,
  selectedContact: PropTypes.objectOf(PropTypes.any),
  setSelectedContact: PropTypes.func,
  showContactList: PropTypes.bool,
  setShowContactList: PropTypes.func,
};

Contacts.defaultProps = {
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
  showContactList: false,
  setShowContactList: undefined,
};

export default Contacts;
