

import react from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'



function Navs () {
    return (

<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link onClick = { () => console.log('test')}>Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> 


    );
}

export default Navs;