// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // Load translation using http -> see /public/locales
  .use(HttpApi)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    // The translations will be in /public/locales
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    // Language to use if translations in user language are not available
    fallbackLng: "en", // Set English as the default fallback language
    // Set default namespace used if not passed to translation function
    defaultNS: "translations",
    // Disable keys separation in translation keys
    keySeparator: false,
    // React already safes from xss
    interpolation: {
      escapeValue: false,
    },
    // Specify language detection order
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "querystring",
        "htmlTag",
        "path",
        "subdomain",
      ],
      // Only look at navigator to detect language
      lookupNavigator: true,
      caches: ["cookie"], // Cache the detected language in cookies
    },
    // React options
    react: {
      useSuspense: false,
    },
  });

export default i18n;