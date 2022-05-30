import { useMsal } from '@azure/msal-react';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';
import NumberFormat from 'react-number-format';
import { useNavigate, useParams } from 'react-router-dom';
import Api, { Transaction, TransferType } from '../../../api';
import MonthSelectComponent from '../../../common/MonthSelectComponent';
import TransferStatus from '../../../common/TransferStatus';
import { formatContactName } from '../../../Helpers';

const CheckStatus = (statusType: String) => {
  switch (statusType) {
    case 'completed':
      return <i className="zippy-cash-icon zc-completed" />;
    case 'pending':
      return <i className="zippy-cash-icon zc-pending" />;
    case 'cancelled':
      return <i className="zippy-cash-icon zc-cancelled" />;
    case 'failed':
      return <i className="zippy-cash-icon zc-failed" />;
    default:
      return (
        <span>
          ?
        </span>
      );
  }
};
const SentTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.SEND)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <div className="month-select-container">
        <MonthSelectComponent prefix="sent" />
      </div>
      <div className="data-list-container">
        <div className="mt-2">
          {transactions.map((item: Transaction) => (
            <>
              <div
                role="button"
                tabIndex={0}
                className="data-list"
                onClick={() => navigate(`/my-wallet/status/sent/${item.status}/${item.id}`)}
                onKeyDown={() => navigate(`${item.status}/${item.id}`)}
                key={`sent_${item.id}`}
              >
                <div className="left-data-list">
                  <div className="check-icon">{CheckStatus(item.status)}</div>
                  <div className="type">
                    <div className="type-name">
                      {formatContactName(
                        item.contact?.firstName,
                        item.contact?.lastName,
                      )}
                    </div>
                    <div className="type-ref">{item.id}</div>
                  </div>
                </div>

                <div className="right-data-list">
                  <div className="type">
                    <div className="type-amount">
                      <NumberFormat
                        value={item.amount}
                        defaultValue={0}
                        displayType="text"
                        prefix="$ "
                        thousandSeparator
                        decimalScale={2}
                        fixedDecimalScale
                      />
                    </div>
                    <div className="type-date">
                      {DateTime.fromISO(item.date).toLocaleString(
                        DateTime.DATE_MED,
                      )}
                    </div>
                  </div>
                  <div className="icon-left">
                    <span>
                      <BsInfoCircle />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">
                No Transactions
              </td>
            </tr>
          )}
        </div>
      </div>
      <div className="send-money-btn-container">
        <Button
          className="zippy-btn d-flex send-btn "
          onClick={() => navigate('/my-wallet/zippy-money/send/transaction-start')}
        >
          Send Money
        </Button>
      </div>
    </>
  );
};

const ReceivedTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.RECEIVE)
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <div className="month-select-container">
        <MonthSelectComponent prefix="received" />
      </div>
      <div className="data-list-container">
        <div className="mt-2">
          {transactions.map((item: Transaction) => (
            <>
              <div
                role="button"
                tabIndex={0}
                className="data-list"
                onClick={() => navigate(
                  `/my-wallet/status/received/${item.status}/${item.id}`,
                )}
                onKeyDown={() => navigate(
                  `/my-wallet/status/received/${item.status}/${item.id}`,
                )}
                key={`received_${item.id}`}
              >
                <div className="left-data-list">
                  <div className="check-icon">{CheckStatus(item.status)}</div>
                  <div className="type">
                    <div className="type-name">
                      {formatContactName(
                        item.contact?.firstName,
                        item.contact?.lastName,
                      )}
                    </div>
                    <div className="type-ref">{item.id}</div>
                  </div>
                </div>

                <div className="right-data-list">
                  <div className="type">
                    <div className="type-amount">
                      <NumberFormat
                        value={item.amount}
                        defaultValue={0}
                        displayType="text"
                        prefix="$ "
                        thousandSeparator
                        decimalScale={2}
                        fixedDecimalScale
                      />
                    </div>
                    <div className="type-date">
                      {DateTime.fromISO(item.date).toLocaleString(
                        DateTime.DATE_MED,
                      )}
                    </div>
                  </div>
                  <div className="icon-left">
                    <span>
                      <BsInfoCircle />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">
                No Transactions
              </td>
            </tr>
          )}
        </div>
      </div>
    </>
  );
};

const RequestedTabContent = ({ navigate, instance, accounts }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransactions(TransferType.REQUEST)
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <div className="month-select-container">
        <MonthSelectComponent prefix="requested" />
      </div>
      <div className="data-list-container">
        <div className="mt-2">
          {transactions.map((item: Transaction) => (
            <>
              <div
                role="button"
                tabIndex={0}
                className="data-list"
                onClick={() => navigate(
                  `/my-wallet/status/requested/${item.status}/${item.id}`,
                )}
                onKeyDown={() => navigate(
                  `/my-wallet/status/requested/${item.status}/${item.id}`,
                )}
                key={`sent_${item.id}`}
              >
                <div className="left-data-list">
                  <div className="check-icon">{CheckStatus(item.status)}</div>
                  <div className="type">
                    <div className="type-name">
                      {formatContactName(
                        item.contact?.firstName,
                        item.contact?.lastName,
                      )}
                    </div>
                    <div className="type-ref">{item.id}</div>
                  </div>
                </div>

                <div className="right-data-list">
                  <div className="type">
                    <div className="type-amount">
                      <NumberFormat
                        value={item.amount}
                        defaultValue={0}
                        displayType="text"
                        prefix="$ "
                        thousandSeparator
                        decimalScale={2}
                        fixedDecimalScale
                      />
                    </div>
                    <div className="type-date">
                      {DateTime.fromISO(item.date).toLocaleString(
                        DateTime.DATE_MED,
                      )}
                    </div>
                  </div>
                  <div className="icon-left">
                    <span>
                      <BsInfoCircle />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
          {!transactions?.length && (
            <tr>
              <td colSpan={4} className="text-center text-gray">
                No Transactions
              </td>
            </tr>
          )}
        </div>
      </div>
      <div className="request-money-btn-container">
        <Button
          className="zippy-btn d-flex request-btn"
          onClick={() => navigate('/my-wallet/zippy-money/request/transaction-start')}
        >
          Request Money
        </Button>
      </div>
    </>
  );
};

export default function InteracETransferDetails() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { tabId } = useParams();
  const selectedTabId = tabId || 'sent';
  return (
    <>
      <TransferStatus
        title="Personal Banking"
        subTitle="Transfer made easy with zippy"
      >
        <div className="nav-tab-container">
          <Tabs
            defaultActiveKey={selectedTabId || 'sent'}
            transition={false}
            id="status-tab"
            className="mt-2 mb-3 "
            onSelect={(tabKey) => {
              navigate(`/my-wallet/status/${tabKey}`);
            }}
          >
            <Tab eventKey="sent" title="Sent">
              <SentTabContent
                navigate={navigate}
                instance={instance}
                accounts={accounts}
              />
            </Tab>
            <Tab eventKey="received" title="Received">
              <ReceivedTabContent
                navigate={navigate}
                instance={instance}
                accounts={accounts}
              />
            </Tab>
            <Tab eventKey="requested" title="Requested">
              <RequestedTabContent
                navigate={navigate}
                instance={instance}
                accounts={accounts}
              />
            </Tab>
          </Tabs>
        </div>
      </TransferStatus>
    </>
  );
}
