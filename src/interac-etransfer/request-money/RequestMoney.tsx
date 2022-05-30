import { useState, useEffect } from 'react';
import {
  Alert,
  Col,
  Row,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import StepComponent from '../../common/StepComponent';
import RequestDetails from './components/RequestDetails';
import RequestSent from './components/RequestSent';
import RequestMoneyVerificationModal from '../dialogs/RequestMoneyVerificationModal';
import Api, { Account, Contact, InteracEtransferTransaction } from '../../api';
import { TransferDetails } from '../dialogs/SendMoneyVerificationModal';
import CommonPageContainer from '../../common/CommonPageContainer';

export const enum PageIds {
  DetailPageId = 'request-detail',
  VerifyPageId = 'request-verify',
  SentPageId = 'request-sent',
}

export interface RequestMainDetails {
  amount: number;
  invoiceNumber: number;
  message: string;
  notifyByEmail: boolean;
  notifyTextMessage: boolean;
  agreed: boolean;
}

const Divider = () => <div className="border-top my-3" />;

const StepIndexes: any = {
  'request-detail': 1,
  'request-verify': 1,
  'request-sent': 2,
};

export default function RequestMoney() {
  const { stepId = 'request-detail' } = useParams();

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(StepIndexes[stepId || 'request-detail']);

  const [isRequestingMoney, setIsRequestingMoney] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [selectedContact, setSelectedContact] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(0);

  const [mainInfo, setMainInfo] = useState<RequestMainDetails>({
    amount: 0,
    message: '',
    invoiceNumber: 0,
    notifyByEmail: false,
    notifyTextMessage: false,
    agreed: false,
  });

  const [accountsList, setAccountsList] = useState<Account[] | null>([]);
  const [contactList, setContactList] = useState<Contact[] | null>([]);
  const { instance, accounts } = useMsal();

  const validateInputs = (): string | null => {
    if (selectedContact === 0) return 'Please select a contact to request the money from';
    if (selectedAccount === 0) return 'Please select an account';
    if (mainInfo.amount <= 0) return 'Amount should be greater than 0';
    if (mainInfo.amount > 3000) return 'The maximum amount you can send in each transfer is $3,000';
    if (!mainInfo.agreed) return 'Please confirm that you have existing relationship with this contact';
    return null;
  };

  const navigateStep = (pageId: PageIds) => {
    const validationMessage = validateInputs();
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }
    navigate(`/interac-etransfer/request-money/${pageId}`);
  };

  const getTransferDetails = (): TransferDetails => {
    const sourceAccount: Account = accountsList!.find(
      (x) => x.id === selectedAccount,
    )!;
    const destinationContact: Contact = contactList!.find(
      (x) => x.id === selectedContact,
    )!;
    return {
      amount: mainInfo.amount,
      source: {
        name: sourceAccount?.name ?? '',
      },
      destination: {
        firstName: destinationContact?.firstName,
        lastName: destinationContact?.lastName,
        email: destinationContact?.email ?? '',
      },
      fromAccount: sourceAccount?.name,
    };
  };

  const handleRequestMoneyVerificationClose = () => {
    navigateStep(PageIds.DetailPageId);
  };

  const handleRequestMoneyVerificationBack = () => {
    setCurrentStep(1);
    navigateStep(PageIds.DetailPageId);
  };

  useEffect(() => {
    const currentApi = new Api(instance, accounts[0]);

    (async () => {
      try {
        const result = await currentApi.listAccounts();
        setAccountsList(result);
      } catch (err) {
        setTimeout(() => {
          setErrorMessage('Sorry! a problem has occurred when getting accounts.');
        }, 0);
      }

      try {
        const result = await currentApi.listContacts();
        setContactList(result);
      } catch (err) {
        setTimeout(() => {
          setErrorMessage('Sorry! a problem has occurred when getting contacts.');
        }, 0);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stepId]);

  useEffect(() => {
    const validationMessage = validateInputs();
    if (validationMessage) {
      return;
    }
    if (stepId === 'request-verify') {
      setShowVerifyModal(true);
    } else {
      setShowVerifyModal(false);
    }
    setCurrentStep(StepIndexes[stepId || 'request-detail']);
  }, [stepId]);

  useEffect(() => {
    if (errorMessage) window.scrollTo(0, 0);
  }, [errorMessage]);

  const handleRequestMoneyVerificationNext = () => {
    const data: InteracEtransferTransaction = {
      contactId: selectedContact,
      amount: mainInfo.amount,
      type: 'request',
    };
    setIsRequestingMoney(true);
    new Api(instance, accounts[0])
      .postInteracEtransferTransaction(data)
      .then(() => {
        setErrorMessage(undefined);
        setCurrentStep(2);
        navigateStep(PageIds.SentPageId);
      })
      .catch(() => setErrorMessage('Transfer failed.'))
      .finally(() => {
        setIsRequestingMoney(false);
        setShowVerifyModal(false);
      });
  };

  return (
    <div className="page-content">
      <RequestMoneyVerificationModal
        show={showVerifyModal}
        handleClose={handleRequestMoneyVerificationClose}
        handleNext={handleRequestMoneyVerificationNext}
        handleBack={handleRequestMoneyVerificationBack}
        isRequestingMoney={isRequestingMoney}
        transferDetails={getTransferDetails()}
      />
      <CommonPageContainer title="Request Money">
        {errorMessage && (
          <Alert variant="danger" className="zippy-btn rounded-0 text-dark py-2 my-2 px-5">
            <i />
            {errorMessage}
          </Alert>
        )}
        <Row>
          <Col xs={9}>
            <Row>
              <Col>
                <StepComponent
                  steps={2}
                  currentStep={currentStep}
                  setCurrentStep={(stepIndex: number) => {
                    const validationMessage = validateInputs();
                    if (validationMessage) {
                      setErrorMessage(validationMessage);
                      navigateStep(PageIds.DetailPageId);
                      return;
                    }
                    setCurrentStep(stepIndex);
                  }}
                  navigateSteps={navigateStep}
                />
              </Col>
            </Row>
            {(stepId === PageIds.DetailPageId || stepId === PageIds.VerifyPageId) && (
            <RequestDetails
              selectedContact={selectedContact}
              selectedAccount={selectedAccount}
              setContactToSend={setSelectedContact}
              setSelectedAccount={setSelectedAccount}
              setMainInfo={setMainInfo}
              mainInfo={mainInfo}
              accounts={accountsList || []}
              contacts={contactList || []}
              setErrorMessage={setErrorMessage}
              navigateStep={navigateStep}
              validateInputs={validateInputs}
            />
            )}
            {stepId === PageIds.SentPageId && (
            <RequestSent
              accounts={accountsList}
              contacts={contactList}
              selectedAccount={selectedAccount}
              selectedContact={selectedContact}
              mainInfo={mainInfo}
              setContactToSend={setSelectedContact}
              setSelectedAccount={setSelectedAccount}
              setMainInfo={setMainInfo}
              setCurrentStep={setCurrentStep}
              navigateStep={navigateStep}
            />
            )}
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
        </Row>
      </CommonPageContainer>
    </div>
  );
}
