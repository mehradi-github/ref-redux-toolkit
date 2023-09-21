import React, { FC, Fragment } from "react";

const Header: FC = () => {
  return (
    <Fragment>
      <div className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 header-title text-success">
            Find Your Favourite Product
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
