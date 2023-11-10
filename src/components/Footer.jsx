import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-tertiary py-2 mt-5">
      <div className="container mx-auto text-center flex flex-col items-center">
        <p className="mt-1 text-secondary text-[12px]">
          &copy; {new Date().getFullYear()} {t("footer_rights")}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {t("footer_creation")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
