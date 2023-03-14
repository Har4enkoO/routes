import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes/Routes";

import Nav from "react-bootstrap/Nav";

const Navigation = (props) => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link>
          <Link to={AppRoutes.home.path}>Home </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to={AppRoutes.puplications.path}>Posts</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to={AppRoutes.photo.path}>Photos</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to={AppRoutes.contacts.path}>Contacts</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
