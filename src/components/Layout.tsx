import React, { FC, Fragment, ReactNode } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Product from "./product";
type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      {children}
    </Fragment>
  );
};
export default Layout;
