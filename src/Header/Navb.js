import React from "react";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

class Navb extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="primary" expand="md" className="Navb">
        <NavbarBrand href="#">WhatsAppr</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">
                How to Use
              </NavLink>
            </NavItem>
           
          </Nav>

          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="#">
                About me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
  // return (
  //   <div className="Navb">
  //     <h1 className="navTitle">WhatsAppr</h1>
  //     <Nav fill>
  //       <NavItem>
  //         <NavLink className="NavLink" href="#"><h5 className="navText">WhatsAppr</h5></NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink className="NavLink" href="#"><h5 className="navText">How to use</h5></NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink className="NavLink" href="#"><h5 className="navText">Contact & Feedback</h5></NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink className="NavLink" href="#"><h5 className="navText">About me</h5></NavLink>
  //       </NavItem>
  //     </Nav>
  //   </div>
  // );
}

export default Navb;