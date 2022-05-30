import {
  Suspense, useEffect, useState, lazy, SetStateAction,
} from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import Breadcrumbs, { Crumb } from '../../../common/Breadcrumbs';
import Api, { Transaction } from '../../../api';
import { useAppSelector } from '../../../app/hooks';
import { selectUser, UserState } from '../../../features/user/userSlice';
import QuickLinks from '../components/QuickLinks';
import CommonPageContainer from '../../../common/CommonPageContainer';
import { TransactionTypeEnum } from './TransactionTypeEnum';
import { TransactionStatusEnum } from './TransactionStatusEnum';

export interface TransactionInterface {
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
  id: string;
}

export interface TransactionProps {
  user: any;
  transaction: Transaction | undefined;
  setCurrentStatus: any;
}

export default function TransactionStatus() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { type, status, id } = useParams<Partial<TransactionInterface>>();
  const [currentType, setCurrentType] = useState<TransactionTypeEnum>(type as TransactionTypeEnum);
  const [
    currentStatus,
    setCurrentStatus,
  ] = useState<TransactionStatusEnum>(status as TransactionStatusEnum);
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);
  const [userState, setUserState] = useState<UserState>({
    firstName: null,
    lastName: null,
    email: null,
  } as UserState | any);
  const [crumbs, setCrumbs] = useState<Array<Crumb>>([] as Array<Crumb>);
  let user: any;
  if (isAuthenticated) {
    ({ user } = useAppSelector(selectUser));
  } else {
    ({ user } = {
      user: {
        firstName: null,
        lastName: null,
        email: null,
      } as any,
    } as unknown as UserState);
  }

  const getCrumbs = (typeX: TransactionTypeEnum, statusX: TransactionStatusEnum) => {
    const statusLink = `/interac-etransfer/status/${type}`;
    let typeLabel = '';
    let crumbsTemp: Array<Crumb> = [{ label: 'Status', link: '/interac-etransfer/status' }];
    switch (typeX) {
      case TransactionTypeEnum.SENT:
        crumbsTemp = [...crumbsTemp, { label: 'Sent', link: statusLink }];
        typeLabel = 'Send Money';
        break;
      case TransactionTypeEnum.REQUESTED:
        crumbsTemp = [...crumbsTemp, { label: 'Requested', link: statusLink }];
        typeLabel = 'Request Money';
        break;
      case TransactionTypeEnum.RECEIVED:
        crumbsTemp = [...crumbsTemp, { label: 'Received', link: statusLink }];
        typeLabel = 'Receive Money';
        break;
      default:
        navigate(`/interac-etransfer/status/${typeX}`);
    }

    switch (statusX) {
      case TransactionStatusEnum.PENDING:
        crumbsTemp = [...crumbsTemp, { label: `${typeLabel} Pending` }];
        break;
      case TransactionStatusEnum.CANCELLED:
        crumbsTemp = [...crumbsTemp, { label: `${typeLabel} Cancelled` }];
        break;
      case TransactionStatusEnum.COMPLETED:
        crumbsTemp = [...crumbsTemp, { label: `${typeLabel} Completed` }];
        break;
      case TransactionStatusEnum.FAILED:
        crumbsTemp = [...crumbsTemp, { label: `${typeLabel} Failed` }];
        break;
      case TransactionStatusEnum.REMINDER:
        crumbsTemp = [...crumbsTemp, { label: `${typeLabel} Reminder` }];
        break;
      default:
        navigate(`/interac-etransfer/status/${typeX}`);
    }

    setCrumbs(crumbsTemp);
    setCurrentType(typeX);
    setCurrentStatus(statusX);
  };

  useEffect(() => {
    new Api(instance, accounts[0])
      .getInteracEtransferTransaction(Number(id))
      .then((data) => setTransaction(data));

    getCrumbs(currentType, currentStatus);
    setUserState(user);
  }, []);

  const TransactionComponent = lazy(() => import(`./${type}/${status}/${type?.replace(/^./, (str) => str.toUpperCase())}${status?.replace(/^./, (str) => str.toUpperCase())}`));

  return (
    <div className="page-content">
      <CommonPageContainer title="Status">
        <Row>
          <Col xs={9} className="transaction-details">
            <Breadcrumbs
              crumbs={crumbs}
            />
            <h2>{crumbs[2]?.label}</h2>
            <div className="details">
              <Suspense fallback={<div>Loading...</div>}>
                { currentType && currentStatus
                  && (
                  <TransactionComponent
                    transaction={transaction}
                    user={userState}
                    setCurrentStatus={(value: SetStateAction<string>) => {
                      getCrumbs(currentType, value.toString() as TransactionStatusEnum);
                    }}
                  />
                  )}
              </Suspense>
            </div>
          </Col>
          <Col xs={3}>
            <QuickLinks />
            <div className="quick-tips">
              <h4>Your Interac e-Transfer Details</h4>
              <ul>
                <li>
                  You can also view information about your Interac® e-Transfer on the
                  &quot;Account Details&quot; page. Select the account from which you made the
                  transfer to view the details of your transfer in the list of
                  transactions
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
