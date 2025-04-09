import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import { useState ,useEffect} from 'react';
import axios from "axios";
function Header(){
  const[user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(token); // Update state only after the component has rendered
    }
  }, []);

  // function logingout(){   
  //     setUser("");   
  //     localStorage.setItem('token', null); // Saves the string "null"

  // }
   
    return(
        <>
        <section>
            <Navbar expand="lg" >
          <Container>
        
            <Navbar.Brand href="#home">Advertise Mee</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about us">About Us</Nav.Link>
                <Nav.Link href="#bot1">Services</Nav.Link>
                
                <Nav.Link href="#bot1">Contact Us</Nav.Link>   
                <Button className='getstarted1' variant="dark" href="/addAgency">Add Agency</Button>                
               {user?<Button className='getstarted1' variant="dark" href="/">Logout</Button>:<Button className='getstarted1' variant="dark" href="/login">Sign Up / Login</Button> }  
               {/* <Button className='getstarted2' variant="dark" href="/login">Login</Button>  */}
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </section>
        </>
    )
}
export default Header;