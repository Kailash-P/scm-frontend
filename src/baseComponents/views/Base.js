import React from "react";
import Menu from "./Menu";
import "../../baseComponents/css/baseStyle.css";
import { isAuthenticated } from "../../admin/helper/user/userApiHelper";
import UserMenu from "./UserMenu";

const Base = ({
  title = "",
  description = "",
  childDivClassName = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <>
      {isAuthenticated() && isAuthenticated().user.is_admin === true ? (
        <Menu />
      ) : (
        <UserMenu />
      )}
      <div className="baseBody">
        <div className="container-fluid">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
          <div className={childDivClassName}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Base;
