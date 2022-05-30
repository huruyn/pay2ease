import { Button } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function UpcomingBillPaymentsAndTransfers() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Upcoming Bill Payments & Transfer">
        <p>
          You have no bill payments or transfers scheduled.
          <Button variant="link" className="text-black">Set up a future bill payment</Button>
          <span>or</span>
          <Button variant="link" className="text-black">transfer</Button>
        </p>
      </CommonPageContainer>
    </div>
  );
}
