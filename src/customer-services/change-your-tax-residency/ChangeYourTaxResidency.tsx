import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ChangeYourTaxResidency() {
  return (
    <>
      <CommonPageContainer title="Change Your Tax Residency">
        <b>Step: 1 - 2</b>
        <div className="pt-3 pb-3">
          Tax residency is a method used by the Candada Revenue Agency (CRA) and
          by other countries to determine how much tax you should pay. Most
          countries, including Canada, determine taxes based on the amount of time
          you spend in the country, rather than your citizenship. For instance,
          some Canadians spend the winter months outside of Canada. The U.S.,
          however, taxes all U.S. citizens as U.S. residents. It is your
          responsibility to determine your tax residency status in other
          countries.
        </div>
        <Form>
          <Row className="pt-3 pb-3">
            <Col md="4">Are you a tax resident of Candada?</Col>
            <Col md="8">
              <Form.Check
                type="radio"
                name="is-resident"
                label="Yes"
                id="is-resident-yes"
              />
              <Form.Check
                type="radio"
                name="is-resident"
                label="No"
                id="is-resident-no"
              />
            </Col>
          </Row>
          <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
            <Col md="4">Are you a U.S. person for tax purposes?</Col>
            <Col md="8">
              <Form.Check
                type="radio"
                name="is-us-person-for-tax"
                label="Yes"
                id="is-person-for-tax-yes"
              />
              <Form.Check
                type="radio"
                name="is-us-person-for-tax"
                label="No"
                id="is-person-for-tax-no"
              />
            </Col>
          </Row>
          <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
            <Col md="4">Do you pay taxes in any other countries?</Col>
            <Col md="8">
              <Form.Check
                type="radio"
                name="do-pay-in-any-other-countries"
                label="Yes"
                id="do-play-yes"
              />
              <Form.Check
                type="radio"
                name="do-pay-in-any-other-countries"
                label="No"
                id="do-play-no"
              />
            </Col>
          </Row>
        </Form>
        <p>
          By selecting Continue I declare, as required by Cannadian law, that the
          tax residency information and U.S. Person status provided (including any
          Tax Identification Number) are, to the best of my knowledge and belief,
          correct and complete.
        </p>
        <p>
          If any of this information changes, I will provide ZippyX with the updated
          information within 30 days.
        </p>
        <p>
          Failure to provide satisfactory self-certification of Tax residency or
          U.S. Person status may result in my account information being reported
          to the relevant tax authority and I may be subject to penalty under the
          income Tax Act
        </p>
        <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
          <Col>
            <Button variant="light" className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              Cancel
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="zippy-btn d-flex">
              Register for eBills
            </Button>
          </Col>
        </Row>
      </CommonPageContainer>
    </>
  );
}
