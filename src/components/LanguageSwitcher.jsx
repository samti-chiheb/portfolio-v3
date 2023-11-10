import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
    Cookies.set("i18next", event.target.value);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <select
      className="text-secondary cursor-pointer w-14 rounded-md p-1 bg-tertiary"
      onChange={handleChangeLanguage}
      value={selectedLanguage}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default LanguageSwitcher;
