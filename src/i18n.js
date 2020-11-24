import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAr from "./locals/ar/translationAr.json";
import translationEn from "./locals/en/translationEn.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;