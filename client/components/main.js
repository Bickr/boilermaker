import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { logout } from '../store';
import { setMessages } from '../store';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn, getMessages } = props

  return (
    <div>
      <Navbar>
        <Navbar.Brand>
<<<<<<< HEAD
          <img src="/Bickr-logo.jpeg" id="nav-bar-logo" />
=======
          <img src="/Bickr-logo.png" id="nav-bar-logo" />
>>>>>>> master
        </Navbar.Brand>
        {
          isLoggedIn ?
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/">
                  Home
                </NavItem >
                <NavItem eventKey={2} onClick={handleClick} href="/">
                  Logout
                </NavItem >
              </Nav>
            </Navbar.Collapse>
            :
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/">
                  Home
              </NavItem >
                < NavItem eventKey={2} href="/login">
                  Login
                </NavItem >
                < NavItem eventKey={3} href="/signup">
                  Sign Up
              </NavItem >
              </Nav>
            </Navbar.Collapse>
        }
      </Navbar>
      <hr />
      {children}
    </div >
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.me.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getMessages() {
      dispatch(setMessages())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */