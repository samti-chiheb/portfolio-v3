import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
    Cookies.set("i18next", event.target.value);
  };

  return (
    <select
      className="text-secondary cursor-pointer w-14 rounded-md p-1 bg-tertiary"
      onChange={handleChangeLanguage}
      value={i18n.language}
    >
      <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LanguageSwitcher;
