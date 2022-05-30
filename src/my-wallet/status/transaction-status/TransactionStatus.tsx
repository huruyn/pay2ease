import {
  Suspense, useEffect, useState, lazy, SetStateAction,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Crumb } from '../../../common/Breadcrumbs';
import Api, { Transaction } from '../../../api';
import { useAppSelector } from '../../../app/hooks';
import { selectUser, UserState } from '../../../features/user/userSlice';
import { TransactionTypeEnum } from './TransactionTypeEnum';
import { TransactionStatusEnum } from './TransactionStatusEnum';
import TransferStatus from '../../../common/TransferStatus';

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
  const [currentType, setCurrentType] = useState<TransactionTypeEnum>(
    type as TransactionTypeEnum,
  );
  const [currentStatus, setCurrentStatus] = useState<TransactionStatusEnum>(
    status as TransactionStatusEnum,
  );
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
  /*  const checkStatus = (condition: string) => {
    switch (condition) {
      case 'Transfer Completed':
        return (
          <h2 style={{ color: '#00BE7E' }}>
            {' '}
            {condition}
            {' '}
          </h2>
        );
      case 'Transfer Cancelled':
        return <h2 style={{ color: '#FF0D26' }}>{condition}</h2>;
      case 'Transfer Failed':
        return <h2 style={{ color: '#FF0D26' }}>{condition}</h2>;
      case 'Transfer Pending':
        return <h2 style={{ color: '#656565' }}>{condition}</h2>;
      default:
        return <h2 style={{ color: 'green' }}>{condition}</h2>;
    }
  }; */

  const getCrumbs = (
    typeX: TransactionTypeEnum,
    statusX: TransactionStatusEnum,
  ) => {
    const statusLink = `/my-wallet/status/${type}`;
    let typeLabel = '';
    let crumbsTemp: Array<Crumb> = [
      { label: 'Status', link: '/my-wallet/status' },
    ];
    switch (typeX) {
      case TransactionTypeEnum.SENT:
        crumbsTemp = [...crumbsTemp, { label: 'Sent', link: statusLink }];
        typeLabel = 'Transfer';
        break;
      case TransactionTypeEnum.REQUESTED:
        crumbsTemp = [...crumbsTemp, { label: 'Requested', link: statusLink }];
        typeLabel = 'Transfer';
        break;
      case TransactionTypeEnum.RECEIVED:
        crumbsTemp = [...crumbsTemp, { label: 'Received', link: statusLink }];
        typeLabel = 'Transfer';
        break;
      default:
        navigate(`/my-wallet/status/${typeX}`);
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
        navigate(`/my-wallet/status/${typeX}`);
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

  const TransactionComponent = lazy(
    () => import(
      `./${type}/${status}/${type?.replace(/^./, (str) => str.toUpperCase())}${status?.replace(/^./, (str) => str.toUpperCase())}`
    ),
  );

  return (
    <>
      <TransferStatus
        title="Personal Banking"
        subTitle=" Made fun with zippy"
        backIcon={`/my-wallet/status/${type}`}
      >
        <div className="transaction-details">
          <div className="header-status">
            <h2>{crumbs[2]?.label}</h2>
          </div>
          <hr
            style={{ height: '1px', background: '#CFD2D3', margin: '8px 0px' }}
          />
          <div className="details">
            <Suspense fallback={<div>Loading...</div>}>
              {currentType && currentStatus && (
                <TransactionComponent
                  transaction={transaction}
                  user={userState}
                  setCurrentStatus={(value: SetStateAction<string>) => {
                    getCrumbs(
                      currentType,
                      value.toString() as TransactionStatusEnum,
                    );
                  }}
                />
              )}
            </Suspense>
          </div>
        </div>
      </TransferStatus>
    </>
  );
}
