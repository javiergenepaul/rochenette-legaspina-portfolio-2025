"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../../messages/en.json";
import de from "../../messages/de.json";
import fr from "../../messages/fr.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        de: { translation: de },
        fr: { translation: fr },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "de", "fr"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["path", "navigator"],
        lookupFromPathIndex: 2,
      },
    });
}

export default i18n;
