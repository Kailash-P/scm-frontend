import React, { useState } from "react";
import "../css/menusStyle.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  signOut,
  isAuthenticated,
} from "../../admin/helper/user/userApiHelper";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const changeSideNavToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="navBarHeader">
        <div className="hamContainer" onClick={changeSideNavToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul
            className={
              showMenu
                ? "navbar-nav animate side-nav open"
                : "navbar-nav animate side-nav"
            }
          >
            <Nav.Link href="#!">
              <i className="fa fa-bullseye"></i> &nbsp;Asset Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-file-text"></i> &nbsp;Document Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-money"></i> &nbsp;Cash Flow Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-dollar"></i> &nbsp;Expense Management
            </Nav.Link>
          </ul>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="" className="dropleft">
              <NavDropdown.Item href="#!">
                <Navbar.Text className="text-dark">
                  Signed in as:{" "}
                  <b>{isAuthenticated() && isAuthenticated().user.first_name}</b>
                </Navbar.Text>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#!">
                <a href="#!" onClick={signOut}>
                  <i className="fa fa-sign-out"></i> SignOut
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default UserMenu;
