import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import alTranslations from "./locales/al.json";
import enTranslations from "./locales/en.json";

// Get saved language from localStorage or use default
const getSavedLanguage = (): string => {
  try {
    const saved = localStorage.getItem("fijeperpe-language");
    if (saved && (saved === "al" || saved === "en")) {
      return saved;
    }
  } catch (error) {
    // localStorage might not be available
    console.warn("Could not access localStorage:", error);
  }
  return "al"; // default language
};

i18n.use(initReactI18next).init({
  resources: {
    al: {
      translation: alTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  lng: getSavedLanguage(),
  fallbackLng: "al",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

// Save language to localStorage whenever it changes
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("fijeperpe-language", lng);
  } catch (error) {
    console.warn("Could not save language to localStorage:", error);
  }
});

export default i18n;
