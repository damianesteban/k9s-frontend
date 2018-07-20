import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// tslint:disable-next-line:import-name
// import { TableList, TableListProps } from './TableList';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Projects</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
