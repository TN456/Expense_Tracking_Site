import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';     //This is NavLink is used to make to not reload the whole page
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { doLogOut, getCurrentUserDetail, isLoggedIn } from '../auth';

function CustomNavbar(args) {

  let navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const [login,setLogin]=useState(false)
  const [user,setUser] = useState(undefined)

  useEffect(()=>{


    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())

  },[login])


  const logout=()=>{
    doLogOut(()=>{
      setLogin(false)
      navigate("/")
    })
  }

  return (
    <div>
      <Navbar color='dark' dark expand='md' fixed=''>
        <NavbarBrand tag={ReactLink} to="/">Expense Tracking Site</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            {
              login && (
                <>
                <NavItem>
              <NavLink onClick={logout} >
                <button color="danger">Logout</button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                {user.email}
              </NavLink>
            </NavItem>
                </>
              )
            }
            {
              !login && (
                  <>
                  <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
                  </>
              )
              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;