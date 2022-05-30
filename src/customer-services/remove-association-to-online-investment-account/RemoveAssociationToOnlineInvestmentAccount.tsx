import { Button, Col, Row } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function RemoveAssociationToOnlineInvestmentAccount() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Remove Association to Investment Account(s)">
        <b>Step: 1 - 2</b>
        <div className="pt-3 pb-3">
          <p>
            If your card is set up to navigate from ZippyX to your
            ZippyX Wealth Management Online Investment Account(s), you can remove
            the association here.
          </p>
          <p>
            By removing the association you will be required to sign on separately
            to ZippyX and ZippyX Wealth Management Online Investment
            sites.
          </p>
          <p>
            For more information about navigation between the ZippyX
            and ZippyX Wealth Management Online Investment sites select the
            Investing tab above.
          </p>
        </div>
        <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
          <Col md="12" className="d-flex justify-content-end">
            <Button variant="outline-danger" style={{ marginRight: '10px' }}>Return to Customer Services</Button>
            <Button className="zippy-btn">Remove Association</Button>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}
