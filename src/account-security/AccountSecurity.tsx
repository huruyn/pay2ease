/* eslint-disable react/prop-types */

import { Container, Row, Col } from 'react-bootstrap';
import CommonPageContainer from '../common/CommonPageContainer';

const CardIconPlaceholder = ({ text }: { text: string }) => (
  <Container
    style={{
      marginTop: '20px',
      border: '2px dashed black',
      borderRadius: '50%',
      minHeight: '80px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Row
      style={{
        fontSize: '12px',
        textAlign: 'center',
        width: '70px',
      }}
    >
      {text}
    </Row>
  </Container>
);

const IconButtonPlaceholder = ({ text }: { text: string }) => (
  <Row
    style={{
      fontSize: '12px',
      border: '2px dashed black',
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '200px',
    }}
  >
    {text}
  </Row>
);

const IconPlaceholder = ({ text }: { text: string }) => (
  <Row
    style={{
      fontSize: '12px',
      border: '2px dashed black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '50px',
    }}
  >
    {text}
  </Row>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Row>
    <h4
      style={{
        marginTop: '50px',
        lineHeight: '40px',
        borderBottom: '3px solid black',
        padding: 0,
      }}
    >
      {title}
    </h4>
  </Row>
);

const CardDefaultProps = {
  cardTextSecondary: '',
  containerStyle: {},
};

/**
 * Represents a card component.
 * @param {string} cardName - Title.
 * @param {string} cardText - Body.
 * @param {string} cardTextSecondary - optional second <p> tag
 * @param {string} buttonIcon - *for now just string placeholder*
 * @param {string} cardIcon - *for now just string placeholder*
 * @param {Record<string, string | number>} containerStyle - Style Object}
 */
const Card: React.FC<{
  cardName: string;
  cardText: string;
  cardTextSecondary?: string;
  buttonIcon: string;
  cardIcon: string;
  containerStyle?: Record<string, string | number>;
}> = ({
  cardName,
  cardText,
  buttonIcon,
  cardIcon,
  cardTextSecondary,
  containerStyle,
}) => (
  <Col
    style={{
      marginTop: '14px',
      border: '2px solid rgba(0, 0, 0, 0.1)',
      minHeight: '220px',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      ...containerStyle,
    }}
  >
    <Row>
      <div style={{ display: 'inline-block', width: '100px' }}>
        <CardIconPlaceholder text={cardIcon} />
      </div>
      <Col style={{ marginTop: '18px' }}>
        <h5 style={{ fontWeight: 600, paddingBottom: '15px' }}>{cardName}</h5>
        <p>{cardText}</p>
        <p>{cardTextSecondary}</p>
      </Col>
    </Row>
    <Col
      xs={12}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '25px',
        paddingBottom: '15px',
      }}
    >
      <IconButtonPlaceholder text={buttonIcon} />
    </Col>
  </Col>
);

Card.defaultProps = CardDefaultProps;

const AccountSecurity = () => (
  <div className="page-content">
    <CommonPageContainer title="Account Security">
      <Row>
        <Col>
          <Row style={{ alignItems: 'center' }}>
            <Col xs={8}>
              <h6
                style={{
                  fontWeight: 400,
                  marginBottom: 0,
                  padding: 0,
                  marginLeft: '-12px',
                }}
              >
                Review and update your security settings to protect your account.
              </h6>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButtonPlaceholder text="Online btn" />
            </Col>
          </Row>
        </Col>
        <SectionHeader title="Identity verification" />
      </Row>
      <Row>
        <Card
          cardName="Verification contact info"
          cardText="Keep your email and phone numbers up to date so we can properly verify your account."
          cardIcon="user icon"
          buttonIcon="Update btn"
          containerStyle={{ marginRight: '10px' }}
        />
        <Card
          cardName="Change password"
          cardText="Ensure you have a unique password to protect your account."
          buttonIcon="Update btn"
          cardIcon="pass icon"
          containerStyle={{ marginLeft: '10px' }}
        />
      </Row>
      <SectionHeader title="Get push verification codes to your device" />
      <Row>
        <Card
          cardName="Registered device: Samsung Duane's Note10+"
          cardText="This device is registered to receive your one-time verification codes by push notification. For your security, only one device can be registered at a time."
          cardTextSecondary="Note: Unregister your device if it gets lost or stolen or if it is no longer secure enough for identity verification."
          cardIcon="device icon"
          buttonIcon="Unregister device btn"
        />
      </Row>
      <SectionHeader title="Security Alerts" />
      <Row>
        <Card
          cardName="Fraud Prevention"
          cardText="Get alerts when there's unusual activity on your account by text, email, push notification or My Messages."
          buttonIcon="Update btn"
          cardIcon="security icon"
        />
      </Row>
      <Row
        style={{ marginTop: '53px', borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
      />
      <Row
        style={{
          marginTop: '8px',
          marginLeft: 0,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}
      >
        <IconPlaceholder text="Icon" />
        <h5 style={{ paddingLeft: '20px', margin: 0, fontSize: '16px' }}>
          Note:
        </h5>
      </Row>
      <Row>
        <Col>
          <h6
            style={{
              marginLeft: '-12px',
              marginTop: '15px',
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            To learn more about ZippyX protects you from fraud, and how you can
            protect yourself, visit
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"> Privacy and Security</a>
            .
          </h6>
        </Col>
      </Row>
    </CommonPageContainer>
  </div>
);

export default AccountSecurity;
