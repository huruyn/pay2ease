import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en-US',
  lng: 'en-US',
  resources: {
    'en-CA': {
      translations: require('./locales/en-CA/translations.json')
    },
    'en-US': {
      translations: require('./locales/en-US/translations.json')
    },
    'es-US': {
      translations: require('./locales/es-US/translations.json')
    },
    'fr-CA': {
      translations: require('./locales/fr-CA/translations.json')
    },
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en-CA', 'en-US', 'es-US', 'fr-CA'];

export default i18n;