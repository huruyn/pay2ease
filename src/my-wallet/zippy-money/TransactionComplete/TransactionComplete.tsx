import {
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';

export default function TransactionComplete({
  transactionType,
}: Pick<TransactionInterface, 'transactionType'>) {
  const navigate = useNavigate();

  return (
    <>
      <PageContainer
        title="Personal Account"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
          <Button className="active">
            Send Money
          </Button>
          <Button>
            Request Money
          </Button>
        </div>
        <div className="account-identifier">
          <FormControl
            placeholder="Enter @ZippyUsername or Email"
          />
          <i className="zippy-cash-icon zc-add" />
        </div>
        <FormControl
          className="amount"
          value="0.00"
          type="number"
          step=".01"
        />
        <div className="select-method">
          <Form.Check
            id="zippy-cash"
            type="radio"
            className="actions"
            label="Zippy.Cash"
            name="actions2"
            checked
          />
          <Form.Check
            id="interac-e-transfer"
            type="radio"
            className="actions"
            label="Interac® e-Transfer"
            name="actions2"
          />
        </div>
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={() => navigate(`/my-wallet/${transactionType}/transaction-start`)}
          >
            Zipp It
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
