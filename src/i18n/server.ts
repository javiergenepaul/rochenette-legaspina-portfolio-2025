// Server-safe i18n instance — no React bindings, no browser APIs.
// Used by constant.tsx for module-level translation calls.
import i18next from "i18next";

import en from "../../messages/en.json";
import de from "../../messages/de.json";
import fr from "../../messages/fr.json";

const i18nServer = i18next.createInstance();

i18nServer.init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "de", "fr"],
  interpolation: { escapeValue: false },
});

export default i18nServer;
