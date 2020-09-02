import React, { useState } from "react";
import "../css/menusStyle.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { signOut, isAuthenticated } from "../../admin/helper/user/userApiHelper";

const Menu = () => {
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
              <i className="fa fa-id-card"></i> &nbsp;License Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-book"></i> &nbsp;Inventory Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-exchange"></i> &nbsp;Reverse Distribution
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-money"></i> &nbsp;Cash Flow Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-dollar"></i> &nbsp;Expense Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-ticket"></i> &nbsp;Ticketing Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-credit-card"></i> &nbsp;Payroll Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-user"></i> &nbsp;Employee Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-commenting-o"></i> &nbsp;Communication
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-stack-exchange"></i> &nbsp;Shelf Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-bar-chart"></i> &nbsp;Business Analytics
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-file"></i> &nbsp;Claim Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-ils"></i> &nbsp;Price Check
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-gavel"></i> &nbsp;Legal Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-globe"></i> &nbsp;Marketing Management
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-file-o"></i> &nbsp;Audit Ready
            </Nav.Link>
            <Nav.Link href="#!">
              <i className="fa fa-users"></i> &nbsp;Contact Management
            </Nav.Link>
          </ul>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="" className="dropleft">
              <NavDropdown.Item href="#!">
                <Navbar.Text className="text-dark">
                  Signed in as:{" "}
                  <b>{isAuthenticated() && isAuthenticated().user.first_name}</b>
                </Navbar.Text>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <a href="#!" className="dropdown-item" onClick={signOut}>
                  <i className="fa fa-sign-out"></i> SignOut
                </a>
            </NavDropdown>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Menu;
