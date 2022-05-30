import { useMsal } from '@azure/msal-react';
import { useTranslation, Trans } from 'react-i18next';
import Circle_Grey_01 from './assets/img/background/Circle_Grey-01.jpg';
import orangered from './assets/img/background/orangered.jpg';
import ZippyCash_Icons_H from './assets/img/roundicons/personal/ZippyCash_Icons_H.png';
import ZippyCash_Icons_I from './assets/img/roundicons/personal/ZippyCash_Icons_I.png';
import ZippyCash_Icons_J from './assets/img/roundicons/personal/ZippyCash_Icons_J.png';
import PersonalBg from './assets/img/background/help_my_per_hero.jpg';
import BlueCircle from './assets/img/roundicons/business/bluecircle.png';
import NumberCircle1 from './assets/img/roundicons/business/numbercircle_1.png';
import NumberCircle2 from './assets/img/roundicons/business/numbercircle_2.png';
import NumberCircle3 from './assets/img/roundicons/business/numbercircle_3.png';
import NumberCircle4 from './assets/img/roundicons/business/numbercircle_4.png';
import { b2cPolicies, loginRequest } from './authConfig';
import Footer from './footer/Footer';

export default function Personal() {
  const { instance } = useMsal();
  const { t } = useTranslation();

  return (
    <>
      <div
        className="bg-light"
        style={{
          backgroundImage: `url(${Circle_Grey_01})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>
                  {t('personal.personal_account')}
                </h2>
                <h1
                  className="redtitle hero-heading display-3"
                  style={{ fontSize: '4em', paddingBottom: '20px' }}
                >
                  {t('personal.header_title')}
                </h1>
                <button
                  type="button"
                  className="btn rounded-0 my-buttonred"
                  onClick={() => instance.loginRedirect({
                    ...loginRequest,
                    authority: b2cPolicies.authorities.signUpPersonal.authority,
                  })}
                >
                  {t('personal.sign_up_btn')}
                </button>
              </div>
            </div>
          </div>
          <img
            src={orangered}
            alt=""
            className="orangeredbar position-absolute bottom-0"
          />
          <div className="row mt-4 justify-content-center">
            <div
              className="col-12 col-md-6 col-lg-4 mb-4 position-relative px-5"
              style={{ zIndex: 1 }}
            >
              <div className="mb-4">
                <img
                  src={ZippyCash_Icons_H}
                  alt={t('personal.image_alt_1')}
                  className="img-fluid centerimage"
                  data-aos="flip-left"
                />
              </div>
              <div>
                <h3 className="redtitle text-center">
                  {t('personal.send_btn')}
                </h3>
                <p className="content-home">{t('personal.send_description')}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 position-relative px-5">
              <div className="mb-4">
                <img
                  src={ZippyCash_Icons_I}
                  alt={t('personal.image_alt_2')}
                  className="img-fluid centerimage"
                  data-aos="flip-left"
                  data-aos-delay="200"
                />
              </div>
              <div>
                <h3 className="bluetitle text-center">
                  {t('personal.spend_btn')}
                </h3>
                <p className="content-home">
                  {t('personal.spend_description')}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4  position-relative px-5">
              <div className="mb-4">
                <img
                  src={ZippyCash_Icons_J}
                  alt={t('personal.image_alt_3')}
                  className="img-fluid centerimage"
                  data-aos="flip-left"
                  data-aos-delay="400"
                />
              </div>
              <div>
                <h3 className="redtitle text-center">
                  {t('personal.funzpoints')}
                </h3>
                <p className="content-home">
                  {t('personal.funzpoints_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-12 col-md-11 col-lg-9">
              <div className="mb-3">
                <h1
                  className="redtitle hero-heading display-3 mb-4"
                  style={{ fontSize: '4em' }}
                >
                  {t('personal.personal_title')}
                </h1>
                <p className="content-home">
                  {t('personal.personal_desc')}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-3" />
          </div>
          <div className="row">
            <div className="col-12 col-md-5 col-lg-6">
              <h4 className="redtitle">{t('personal.personal_sub_title1')}</h4>
              <ul>
                <li>
                  {t('personal.personal_sub_desc_1')}
                </li>
                <li>{t('personal.personal_sub_desc_2')}</li>
                <li>
                  {t('personal.personal_sub_desc_3')}
                </li>
              </ul>
              <br />
              <h4 className="redtitle">{t('personal.personal_sub_title2')}</h4>
              <ul>
                <li>{t('personal.personal_sub_desc_4')}</li>
                <li>{t('personal.personal_sub_desc_5')}</li>
              </ul>
              <h1 className="redtitle mt-5">{t('personal.signup_free')}</h1>
              <h2 className="redsubtitle mb-5">
                {t('personal.no_need_back')}
              </h2>
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 backgroundimage"
              style={{
                backgroundImage: `url(${PersonalBg})`,
                backgroundSize: 'cover',
              }}
            />
          </div>
        </div>
        <div style={{ backgroundColor: '#51aad8' }}>
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
                        <Trans i18nKey="personal.signup_here" />
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
                      <Trans i18nKey="personal.send_text_email" />
                    </h5>
                    <p className="whitecopy text-center">
                      <Trans i18nKey="personal.choose_works" />
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
                      <Trans i18nKey="personal.link_download" />
                    </h5>
                    <p className="whitecopy text-center">
                      <Trans i18nKey="personal.link_download_desc" />
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
                      <Trans i18nKey="personal.open_and_start" />
                    </h5>
                  </div>
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
