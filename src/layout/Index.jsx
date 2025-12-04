import React from "react";
import { CustomNavbar } from "../Navbar/Index";
import { Footer } from "../Footer/Index";

export const Layout = (props) => {
  return (
    <div className={props.class}>
      <CustomNavbar />
      {props.children}
      <Footer />
    </div>
  );
};
