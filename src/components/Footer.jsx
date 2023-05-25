import React from "react";

const Footer = () => {
  return (
    <footer className={`bg-tertiary py-2 mt-5`}>
      <div className="container mx-auto text-center">
        <p className="mt-1 text-secondary text-[12px] ">
          &copy; {new Date().getFullYear()} SAMTI Chiheb Portfolio. All rights
          reserved.
        </p>
        <p className="mt-1 text-secondary text-[12px] ">Created with ♡ By SAMTI Chiheb</p>
      </div>
    </footer>
  );
};

export default Footer;