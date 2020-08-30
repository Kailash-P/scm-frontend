import React from "react";
import Menu from "./Menu";
import "../../baseComponents/css/baseStyle.css";

const Base = ({
  title = "",
  description = "",
  childDivClassName = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <>
      <Menu />
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
