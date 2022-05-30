import { useMsal } from '@azure/msal-react';
import { useTranslation, Trans } from 'react-i18next';
import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';
import ZippyCash_Icons_K from './assets/img/roundicons/business/ZippyCash_Icons_K.png';
import ZippyCash_Icons_L from './assets/img/roundicons/business/ZippyCash_Icons_L.png';
import ZippyCash_Icons_M from './assets/img/roundicons/business/ZippyCash_Icons_M.png';
import BusinessBg from './assets/img/background/help_my_bus_hero.jpg';
import BlueCircle from './assets/img/roundicons/business/bluecircle.png';
import NumberCircle1 from './assets/img/roundicons/business/numbercircle_1.png';
import NumberCircle2 from './assets/img/roundicons/business/numbercircle_2.png';
import NumberCircle3 from './assets/img/roundicons/business/numbercircle_3.png';
import NumberCircle4 from './assets/img/roundicons/business/numbercircle_4.png';
import { b2cPolicies, loginRequest } from './authConfig';
import Footer from './footer/Footer';

export default function Business() {
  const { instance } = useMsal();
  const { t } = useTranslation();

  return (
    <>
      <div
        className="bg-light"
        style={{
          backgroundImage: `url(${Circle_White_01})`,
          backgroundSize: '146.5%',
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>
                  {t('business.business_title')}
                </h2>
                <h1
                  className="redtitle hero-heading display-3"
                  style={{ fontSize: '4em', paddingBottom: '20px' }}
                >
                  {t('business.header_desc')}
                </h1>
                <button
                  type="button"
                  className="btn rounded-0 my-buttonred"
                  onClick={() => instance.loginRedirect({
                    ...loginRequest,
                    authority: b2cPolicies.authorities.signUpBusiness.authority,
                  })}
                >
                  {t('business.sign_up_btn_title')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-3">
                <img
                  src={ZippyCash_Icons_K}
                  alt="an illustration of a woman holding dollar signs"
                  className="img-fluid centerimage"
                  data-aos="flip-left"
                />
              </div>
              <div className="col-12 col-md-9">
                <p className="m-0 content-home">
                  <Trans i18nKey="business.business_description_1" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="bluegradient" className="bg-light">
          <div className="container">
            <div className="row align-items-center py-4  flex-md-row-reverse">
              <div
                className="col-12 col-md-3 text-end position-relative"
                data-aos="flip-left"
              >
                <img
                  src={ZippyCash_Icons_L}
                  alt="illustrated of young people all touching a large light bulb"
                  className="img-fluid position-absolute top-0 start-50 translate-middle "
                />
              </div>
              <div className="col-12 col-md-9 circleoverlap">
                <p className="m-0 whitecopy">
                  <Trans i18nKey="business.business_description_2" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#EDF5F5' }}>
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-3">
                <img
                  src={ZippyCash_Icons_M}
                  alt="illustrated of a young woman jumping in the air"
                  className="img-fluid centerimage"
                  data-aos="flip-left"
                />
              </div>
              <div className="col-12 col-md-9">
                <p className="m-0 content-home">
                  <Trans i18nKey="business.business_description_3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col">
              <div className="mb-3">
                <h1
                  className="redtitle hero-heading display-3"
                  style={{ fontSize: '4em' }}
                >
                  {t('business.how_can_help')}
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4">
              <h4 className="redtitle">{t('business.integrate_payment')}</h4>
              <p className="content-home">
                {t('business.integrate_payment_desc')}
              </p>
              <br />
              <h4 className="redtitle">{t('business.send_and_accept_money')}</h4>
              <p className="content-home">
                {t('business.send_and_accept_money_desc')}
              </p>
              <br />
              <h4 className="redtitle">{t('business.make_payment')}</h4>
              <p className="content-home">
                {t('business.make_payment_desc')}
              </p>
              <br />
              <h1 className="redtitle mb-5">{t('business.signup_free')}</h1>
            </div>
            <div
              className="col-12 col-md-7 col-lg-8 backgroundimage"
              style={{
                backgroundImage: `url(${BusinessBg})`,
                backgroundSize: 'cover',
              }}
            />
          </div>
        </div>
      </div>
      <main style={{ backgroundColor: '#51aad8' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="position-relative top-0"
                data-aos="flip-left"
                data-aos-delay="0"
              >
                <img
                  src={BlueCircle}
                  alt=""
                  className="img-fluid centerimage bluecircle"
                />
                <img
                  src={NumberCircle1}
                  alt=""
                  className="position-absolute top-0 start-50 numbercicle"
                />

                <div className="position-absolute halfcirclecopy">
                  <h5 className="whitetitle text-center">
                    <a href="business-signup.html" className="whitetitle">
                      <Trans i18nKey="business.signup_here" />
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="position-relative top-0"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <img
                  src={BlueCircle}
                  alt=""
                  className="img-fluid centerimage bluecircle"
                />
                <img
                  src={NumberCircle2}
                  alt=""
                  className="position-absolute top-0 start-50 numbercicle"
                />

                <div className="position-absolute halfcirclecopy">
                  <h5 className="whitetitle text-center">
                    <Trans i18nKey="business.send_text_email" />
                  </h5>
                  <p className="whitecopy text-center">
                    <Trans i18nKey="business.choose_works" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="position-relative top-0"
                data-aos="flip-left"
                data-aos-delay="400"
              >
                <img
                  src={BlueCircle}
                  alt=""
                  className="img-fluid centerimage bluecircle"
                />
                <img
                  src={NumberCircle3}
                  alt=""
                  className="position-absolute top-0 start-50 numbercicle"
                />

                <div className="position-absolute halfcirclecopy">
                  <h5 className="whitetitle text-center">
                    <Trans i18nKey="business.link_download" />
                  </h5>
                  <p className="whitecopy text-center">
                    <Trans i18nKey="business.link_download_desc" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="position-relative top-0"
                data-aos="flip-left"
                data-aos-delay="600"
              >
                <img
                  src={BlueCircle}
                  alt=""
                  className="img-fluid centerimage bluecircle"
                />
                <img
                  src={NumberCircle4}
                  alt=""
                  className="position-absolute top-0 start-50 numbercicle"
                />

                <div className="position-absolute halfcirclecopy">
                  <h5 className="whitetitle text-center">
                    <Trans i18nKey="business.open_and_start" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
