import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import a1 from '/images/a1.png'
import fb from '/images/logo/fb.png'
import ins from '/images/logo/ins.png'
import twee from '/images/logo/twee.png'
import you from '/images/logo/you.png'
import melogo from '/images/logo/melogo.png'
import i1 from '/images/logo/i1.png'
import i2 from '/images/logo/i2.png'
import i3 from '/images/logo/i3.png';
import Header from './Components/Header'; 


function Home() {
    return (
        <>
        <Header />
        <section id="home">
      <div className='home1'>
                    <Grid container spacing={2}>
                        {/* First column */}
                        <Grid className='homedetail' item xs={12} sm={6} >
                            <p className='hometitle'>Elevate Your Brand with our Digital Service </p>
                            <p className='homedescription'>Your Brand our Collab Our Market</p>
                            <Button className='getstarted' variant="dark" href="/agencies">Get Started</Button>
                            <Button className='getstarted' variant="dark" href="/WhatsNew">What's New</Button>
                        </Grid>
                        {/* Second column */}
                        <Grid item xs={12} sm={6}  >
                        <img className='bw' src={a1} alt="" height="120%" width="90%"  />
                           </Grid>
                          
                    </Grid>
                </div>
      </section>
     
      <section id="company">
        <center>
      <img className='logo' src={you} alt="" height="200px" width="200px" />
      <img className='logo' src={ins} alt="" height="200px" width="200px" />
      <img className='logo' src={twee} alt=""  height="200px" width="200px" />
      <img className='logo' src={fb} alt=""  height="200px" width="200px" />
      </center>
      </section>

      <section id='about us'>
      <Grid container spacing={2}>
                        {/* First column */}
                        <Grid className='homedetail' item xs={12} sm={5} >
                        <img className='bw1' src={a1} alt="" height="120%" width="90%"  />
                          
                        </Grid>
                        {/* Second column */}
                        <Grid item xs={12} sm={7}  >
                        
                        <p className='hometitle1'>About Us </p>
                            <p className='homedescription1'>Experience The Power Of Digital Marketing</p>
                            <Button className='getstarted' variant="dark" href="#pricing">More Details</Button>
                           </Grid>
                          
                    </Grid>
      </section>
      <section className='whyus' id="whyus">
       <center><p className='hometitle2'>Why Us?</p> 
        <p className='homedescription2'>Fast, Cheap, Smooth and Efficient Service</p>
        </center>
        <div></div><div></div>
        <Grid container spacing={6} className='homedetail' >
          <Grid item xs={12} sm={4}>
          <img className='i1' src={i1} alt="" height="100%" width="100%"  />
          </Grid>
          <Grid item xs={12} sm={4}>
          <img className='i2' src={i2} alt="" height="100%" width="100%"  />
          </Grid>
          <Grid item xs={12} sm={4}>
          <img className='i3' src={i3} alt="" height="100%" width="100%"  />
          </Grid>
       </Grid>
       <section id='bot1'>
        <center><p className='bot'c>Advertise Mee</p></center>
        <hr /><hr />
        <Grid container spacing={6} className='bot1' >
          <Grid item xs={12} sm={4}>
          <p>Services
            <div></div>
            <center><p className='bot2'>- Best Agencies</p>
           <p className='bot2'>- Good Service Experience</p>
           </center>
          </p>
          </Grid>
          <Grid item xs={12} sm={4}>
          <p>Links
            <div></div>
            <center><p className='bot2'>-Term of Use</p>
            <p className='bot2'>-Privacy Policy</p>
            </center>
          </p>
          </Grid>
          <Grid item xs={12} sm={4}>
          <p>Contact Us
            <div></div>
            <center><p className='bot2'> - P.H- 8090322789</p>
            <p className='bot2'>-Email-trooftiger001@gmail.com</p>
            </center>
          </p>
          </Grid>
       </Grid>
       <hr /><hr />
       
        </section>
        
        
      </section>
        </>
      );
}

export default Home;