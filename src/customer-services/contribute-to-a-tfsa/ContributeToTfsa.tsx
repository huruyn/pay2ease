/* eslint-disable react/prop-types */

import React from 'react';
import {
  Container,
  Row,
  Button,
  Col,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

const CardIconDefaultProps = {
  text: '',
};
const IconButtonPlaceholderDefaultProps = {
  text: '',
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Row>
    <h5
      style={{
        marginTop: '50px',
        lineHeight: '40px',
        borderBottom: '2px solid black',
        padding: 0,
      }}
    >
      {title}
    </h5>
  </Row>
);

const CardIconPlaceholder = ({ text }: { text?: string }) => (
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

CardIconPlaceholder.defaultProps = CardIconDefaultProps;

const IconButtonPlaceholder = ({ text }: { text?: string }) => (
  <Row
    style={{
      marginRight: '15px',
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

IconButtonPlaceholder.defaultProps = IconButtonPlaceholderDefaultProps;

const QuestionIcon = () => (
  <Row
    style={{
      marginRight: '15px',
      fontSize: '12px',
      border: '2px dashed black',
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '200px',
    }}
  >
    <h1 style={{ marginBottom: 0 }}>?</h1>
  </Row>
);

const AddIcon = () => (
  <div
    style={{
      marginRight: '4px',
      border: '2px dashed black',
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
    }}
  >
    <h1
      style={{
        fontSize: 28,
        color: 'red',
        marginBottom: 0,
        marginRight: 5,
        marginLeft: 5,
      }}
    >
      +
    </h1>
  </div>
);

const DefaultCardTitle: React.FC<{ text: string }> = ({ text }) => (
  <h3 style={{ fontWeight: 400, paddingBottom: '15px' }}>{text}</h3>
);

const CardTitleLink: React.FC<{ text: string; href: string }> = ({
  text,
  href,
}) => (
  <a
    href={href}
    style={{ color: 'black', fontWeight: 400, paddingBottom: '15px' }}
  >
    <h4>{text}</h4>
  </a>
);

const LearnMoreTextSecondary: React.FC<{}> = () => (
  <a
    href="/"
    className="text-decoration-none text-black"
    style={{ fontSize: 12, marginTop: '-16' }}
  >
    Learn more
    <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>{'>'}</span>
  </a>
);

const DefaultCardText: React.FC<{ text: string }> = ({ text }) => (
  <p style={{ marginTop: '30px', marginBottom: '0px' }}>{text}</p>
);

const CardDefaultProps = {
  cardTextSecondary: '',
  containerStyle: {},
  cardIcon: '',
  button: undefined,
};

const StyleDefaultProps = {
  style: {},
};

const Link: React.FC<{
  text: string;
  href: string;
  style?: Record<string, string | number>;
}> = ({ text, href, style }) => (
  <Row>
    <a style={{ ...style }} href={href}>
      {text}
    </a>
  </Row>
);

Link.defaultProps = StyleDefaultProps;

const Card: React.FC<{
  cardName: React.ReactNode;
  cardText: any;
  cardTextSecondary?: any;
  cardIcon?: string;
  button?: any;
  containerStyle?: Record<string, string | number>;
}> = ({
  cardName,
  cardText,
  cardIcon,
  cardTextSecondary,
  button,
  containerStyle,
}) => (
  <Col
    style={{
      marginTop: '14px',
      minHeight: '220px',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      ...containerStyle,
    }}
  >
    <Row>
      {cardIcon !== '' && (
        <div style={{ display: 'inline-block', width: '100px' }}>
          <CardIconPlaceholder text={cardIcon} />
        </div>
      )}
      <Col style={{ marginTop: '18px', marginLeft: '25px' }}>
        {cardName}
        {cardText}
        {cardTextSecondary}
        {button}
      </Col>
    </Row>
  </Col>
);

Card.defaultProps = CardDefaultProps;

const ContributeToTfsa = () => (
  <div className="page-content">
    <CommonPageContainer title="Tax-Free Savings Accounts (TFSA)">
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Col
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <IconButtonPlaceholder text="L" />
          <span
            style={{
              marginRight: 10,
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: 13,
              marginBottom: 0,
              padding: 0,
            }}
          >
            Find a banking centre or ATM
          </span>
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: -10,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 0,
              padding: 0,
            }}
          >
            Call us at 1-866-525-8622
          </span>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }} xs={8}>
          <Card
            cardName={
              <DefaultCardTitle text="Grow your money with a special interest rate" />
          }
            cardText="Reach your savings goals sooner with a TFSA Tax Advantage Savings Account&reg. Offer ends on March 31, 2022"
            button={(
              <Link
                text="Learn More >"
                href="/#"
                style={{ color: 'red', marginTop: '15px' }}
              />
          )}
            containerStyle={{
              background: 'rgba(242,243,242,0.9)',
            }}
          />
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '14px',
            border: '2px dashed black',
          }}
          xs={4}
        >
          <span>Image</span>
        </Col>
      </Row>
      <SectionHeader title="Tax-Free Savings Account" />
      <Row style={{ marginLeft: '-25px' }}>
        <span style={{ marginTop: '15px' }}>
          With a Tax-Free Savings Account(TFSA), you can set money aside in
          eligible investment accounts without paying tax on income and gains
          earned within the TFSA.
        </span>
        <span style={{ marginTop: '15px' }}>
          You are able to withdraw funds from your TFSA any time and for any
          purpose without incurring tax, though restrictions may apply depending
          on the investments that are held in your TFSA.
        </span>
      </Row>
      <Row>
        <Card
          cardName={(
            <CardTitleLink
              text="CIBS TFSA Tax Advantage Savings Account"
              href="/#"
            />
        )}
          cardText={
            <DefaultCardText text="Save your money tax-free and access it at any time." />
        }
          cardTextSecondary={<LearnMoreTextSecondary />}
          button={(
            <Button
              style={{ display: 'flex', marginTop: 25, fontSize: 14 }}
              className="zippy-btn"
            >
              Apply or contribute
            </Button>
        )}
          containerStyle={{
            marginTop: '50px',
            background: 'rgba(242,243,242,0.9)',
            marginRight: '10px',
          }}
        />
      </Row>
      <SectionHeader title="Featured TFSA GICs" />
      <Row>
        <Card
          cardName={<CardTitleLink text="CIBS Bonus Rate TFSA GIC" href="/#" />}
          cardText={
            <DefaultCardText text="Earn guaranteed interest at a great rate won't change over your term." />
        }
          button={(
            <Button
              style={{ display: 'flex', marginTop: 25, fontSize: 14 }}
              className="zippy-btn"
            >
              Purchase or contribute
            </Button>
        )}
          containerStyle={{
            marginTop: '50px',
            background: 'rgba(242,243,242,0.9)',
            marginRight: '20px',
          }}
        />
        <Card
          cardName={<CardTitleLink text="CIBS Flexible TFSA GIC" href="/#" />}
          cardText={
            <DefaultCardText text="Enjoy quaranteed returns with the freedom to access your money when you need it." />
        }
          button={(
            <Button
              style={{ display: 'flex', marginTop: 25, fontSize: 14 }}
              className="zippy-btn"
            >
              Purchase or contribute
            </Button>
        )}
          containerStyle={{
            marginTop: '50px',
            background: 'rgba(242,243,242,0.9)',
          }}
        />
      </Row>
      <SectionHeader title="Market Linked GICs(TFSA eligible)" />
      <Row>
        <Card
          cardName={<CardTitleLink text="ZippyX Market Linked GICs" href="/#" />}
          cardText={
            <DefaultCardText text="The interest rate is linked to market performance, so the potential for growth is higher than a fixed-rate GIC" />
        }
          cardTextSecondary={(
            <p>
              To purchase,
              <a style={{ color: 'black', marginLeft: '5px' }} href="/#">
                visit a banking centre.
              </a>
            </p>
        )}
          containerStyle={{
            marginTop: '50px',
            background: 'rgba(242,243,242,0.9)',
          }}
        />
      </Row>
      <Row style={{ marginTop: '50px' }}>
        <span style={{ fontWeight: 500 }}>Tools and advice</span>
        <a
          style={{ fontSize: 13, color: 'black', marginTop: '10px' }}
          href="/home"
        >
          Find the GIC that&aposs right for you
        </a>
        <a
          style={{ fontSize: 13, color: 'black', marginTop: '10px' }}
          href="/home"
        >
          Check out all GIC rates
        </a>
        <a
          style={{ fontSize: 13, color: 'black', marginTop: '10px' }}
          href="/home"
        >
          TFSA calculator
        </a>
        <a
          style={{ fontSize: 13, color: 'black', marginTop: '10px' }}
          href="/home"
        >
          Investor profile tool
        </a>
      </Row>
      <Row
        style={{
          marginTop: 50,
          padding: 15,
          backgroundColor: 'rgba(242,243,242,0.9)',
        }}
      >
        <Col style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <QuestionIcon />
          <h1
            style={{
              fontSize: 22,
              marginBottom: 0,
              fontWeight: 100,
              textAlign: 'center',
            }}
          >
            Have a question?
          </h1>
          <div
            style={{
              width: 2,
              border: '1px solid black',
              height: '100%',
              marginRight: 15,
              marginLeft: 15,
            }}
          />
          <p
            style={{
              fontSize: 14,
              fontWeight: 100,
              marginBottom: 0,
            }}
          >
            Use our automated help for immediate answers to your questions
          </p>
        </Col>
        <Col xs={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button
            style={{ fontSize: 14, paddingRight: 20, paddingLeft: 20 }}
            className="zippy-btn"
          >
            Ask
          </Button>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: 30,
          padding: 8,
          backgroundColor: 'rgba(242,243,242,0.9)',
          borderBottom: '2px solid rgba(0,0,0,0.5)',
        }}
      >
        <AddIcon />
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              fontSize: 18,
              fontWeight: 100,
              marginBottom: 0,
            }}
          >
            Terms and conditions
          </h1>
        </Col>
      </Row>
    </CommonPageContainer>
  </div>
);

export default ContributeToTfsa;
