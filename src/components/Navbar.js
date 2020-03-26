import React, { Component } from 'react'
import {
  Navbar as NavigationBar, NavbarBrand, NavbarToggler,
  Collapse, Nav, NavItem
} from 'reactstrap'

import history from '../utils/history'
import styled from 'styled-components'

const Logout = styled('span')`
  cursor: pointer;
`

export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.onLogout = () => {
      localStorage.removeItem('token')
      this.props.check()
      history.push('/login')
    }
  }
  render() {
    return (
      <NavigationBar color='dark' dark expand='md'>
        <NavbarBrand>Ticketing</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            {this.props.isLogin &&(
              <NavItem>
                <Logout className='nav-link' onClick={this.onLogout}>Logout</Logout>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </NavigationBar>
    )
  }
}
