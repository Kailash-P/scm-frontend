import React, { useState } from "react";
import "../css/menusStyle.css";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { signOut } from "../../admin/helper/user/userApiHelper";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const changeSideNavToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className='navBarHeader'>
        <Navbar.Brand href="#!">
        <img
            alt=""
            src="../../cloudvillehomepage.png"
            width="30"
            height="30"
            className="d-inline-block"
            onClick={ changeSideNavToggle }
        />{' '}
        SCM
        </Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className={ showMenu ? "navbar-nav animate side-nav open" : "navbar-nav animate side-nav"}>
            <Nav.Link href="#!"><i className="fa fa-bullseye"></i> &nbsp;Asset Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-file-text"></i> &nbsp;Document Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-id-card"></i> &nbsp;License Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-book"></i> &nbsp;Inventory Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-exchange"></i> &nbsp;Reverse Distribution</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-money"></i> &nbsp;Cash Flow Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-dollar"></i> &nbsp;Expense Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-ticket"></i> &nbsp;Ticketing Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-credit-card"></i> &nbsp;Payroll Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-user"></i> &nbsp;Employee Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-commenting-o"></i> &nbsp;Communication</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-stack-exchange"></i> &nbsp;Shelf Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-bar-chart"></i> &nbsp;Business Analytics</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-file"></i> &nbsp;Claim Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-ils"></i> &nbsp;Price Check</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-gavel"></i> &nbsp;Legal Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-globe"></i> &nbsp;Marketing Management</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-file-o"></i> &nbsp;Audit Ready</Nav.Link>
            <Nav.Link href="#!"><i className="fa fa-users"></i> &nbsp;Contact Management</Nav.Link>
            </ul>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#!" style={{textDecoration: false}} onClick={signOut}><i className="fa fa-power-off"></i> &nbsp;Sign Out</a>
                </Navbar.Text>
            </Navbar.Collapse>
          </div>
      </Navbar>
    </>
  );
};

export default Menu;
