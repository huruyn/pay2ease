import { useMsal } from '@azure/msal-react';
import { useTranslation, Trans } from 'react-i18next';
import Slider from 'react-slick';
import ZippyCash_Landing_Slider_01 from '../assets/img/slider/ZippyCash_Landing_Slider-01.jpg';
import ZippyCash_Landing_Slider_02 from '../assets/img/slider/ZippyCash_Landing_Slider-02.jpg';
import ZippyCash_Landing_Slider_03 from '../assets/img/slider/ZippyCash_Landing_Slider-03.jpg';
import ZippyCash_Icons_A from '../assets/img/roundicons/home/ZippyCash_Icons_A.png';
import ZippyCash_Icons_B from '../assets/img/roundicons/home/ZippyCash_Icons_B.png';
import ZippyCash_Icons_C from '../assets/img/roundicons/home/ZippyCash_Icons_C.png';
import { b2cPolicies, loginRequest } from '../authConfig';
import Footer from '../footer/Footer';

export default function HomeLoggedOut() {
  const { instance } = useMsal();
  const { t } = useTranslation();

  return (
    <>
      <div className="homepage-container">
        <section className="hero slider">
          <Slider
            autoplay
            autoplaySpeed={3000}
            arrows={false}
            dots={false}
            dotsClass="slick-dots"
          >
            <div>
              <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_01})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="sliderh2">{t('home.personal_account')}</h2>
                      <h1 className="hero-heading display-3 fw-bold">
                        <Trans i18nKey="home.zip_it">
                          Zipp it
                          <br />
                          to me!
                        </Trans>
                      </h1>
                      <button
                        type="button"
                        className="hero-button btn btn-light rounded-0"
                        onClick={() => instance.loginRedirect({
                          ...loginRequest,
                          authority: b2cPolicies.authorities.signUpPersonal.authority,
                        })}
                      >
                        {t('home.sign_up_btn')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_02})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="sliderh2">{t('home.personal_account')}</h2>
                      <h1 className="hero-heading display-3 fw-bold">
                        <Trans
                          i18nKey="home.zip_it"
                        >
                          Zipp it
                          <br />
                          to me!
                        </Trans>
                      </h1>
                      <button
                        type="button"
                        className="hero-button btn btn-light rounded-0"
                        onClick={() => instance.loginRedirect({
                          ...loginRequest,
                          authority: b2cPolicies.authorities.signUpPersonal.authority,
                        })}
                      >
                        {t('home.sign_up_btn')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_03})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="sliderh2">{t('home.personal_sign_up')}</h2>
                      <h1 className="hero-heading display-3 fw-bold">
                        <Trans
                          i18nKey="home.zip_it"
                        >
                          Zipp it
                          <br />
                          to me!
                        </Trans>
                      </h1>
                      <button
                        type="button"
                        className="hero-button btn btn-light rounded-0"
                        onClick={() => instance.loginRedirect({
                          ...loginRequest,
                          authority: b2cPolicies.authorities.signUpPersonal.authority,
                        })}
                      >
                        {t('home.sign_up_btn')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <section className="header-cta text-light mb-4">
          <div id="redgradient" className="ctaband">
            <div className="container py-4">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-8">
                  <h2>{t('home.business_account')}</h2>
                  <h1 className="fw-bold">{t('home.business_account_desc')}</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn btn-light rounded-0 my-button"
                    onClick={() => instance.loginRedirect({
                      ...loginRequest,
                      authority: b2cPolicies.authorities.signUpBusiness.authority,
                    })}
                  >
                    {t('home.sign_up_btn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main>
          <div>
            <div className="container">
              <div className="row align-items-center py-4 flex-md-row-reverse">
                <div className="col-12 col-md-6 col-lg-3">
                  <img src={ZippyCash_Icons_A} alt={t('home.image_alt_1')} className="img-fluid centerimage" data-aos="flip-left" />
                </div>
                <div className="col-12 col-md-6 col-lg-9">
                  <h2 className="redtitle">{t('home.question_1')}</h2>
                  <p className="m-0 content-home">
                    <Trans
                      i18nKey="home.answer_1"
                    >
                      Yes, you can! There is a better way. We make it easier for
                      you to do what you really want with your money: earn it,
                      keep it, send it, save it, use it with as much ease and
                      security as you want - and get rewarded on top of that. Why?
                      Because it
                      {'&apos;'}
                      s your money and you should have options.
                      <strong>
                        You
                        {'&apos;'}
                        ve got them with Zippy.
                      </strong>
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="redgradient" className="bg-light">
            <div className="container">
              <div className="row align-items-center py-4">
                <div className="col-12 col-md-6 col-lg-3 text-end position-relative" data-aos="flip-left">
                  <img src={ZippyCash_Icons_B} alt={t('home.image_alt_2')} className="img-fluid position-absolute top-0 start-50 translate-middle" data-aos="flip-left" />
                </div>
                <div className="col-12 col-md-6 col-lg-9 circleoverlap">
                  <br />
                  <h2 className="whitetitle">{t('home.question_2')}</h2>
                  <p className="m-0 whitecopy">
                    <Trans
                      i18nKey="home.answer_2"
                    >
                      We think financial services should be a win-win. We take less of your money
                      {' '}
                      because fees just don
                      {'&apos;'}
                      t need to be that high.
                      <strong>
                        It
                        {'&apos;'}
                        s that simple.
                      </strong>
                    </Trans>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row align-items-center py-4 flex-md-row-reverse">
                <div className="col-12 col-md-6 col-lg-3">
                  <img src={ZippyCash_Icons_C} alt={t('home.image_alt_3')} className="img-fluid centerimage" data-aos="flip-left" />
                </div>
                <div className="col-12 col-md-6 col-lg-9">
                  <h2 className="redtitle">{t('home.question_3')}</h2>
                  <p className="m-0 content-home">
                    <Trans
                      i18nKey="home.answer_3"
                    >
                      Zippy is zippier. A lot zippier. Almost instantaneous, even across borders.
                      {' '}
                      We doubled down on speed and security to make sure your money goes where you
                      {' '}
                      want it, when you want it, with nothing getting in the way.
                      {' '}
                      <strong>
                        You
                        {'&apos;'}
                        ve got places to go after all, so go on!
                      </strong>
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
