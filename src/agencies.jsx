import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import sh from '/images/logo/sh.png'
import gaa from '/images/logo/gaa.png'
import download from '/images/logo/download.jpeg'
import ogl from '/images/logo/ogl.png'
import bbdo from '/images/logo/bbdo.jpeg'
import aa from '/images/logo/aa.avif'
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
function Agencies(){

   return (
    <>
      <h2 className='agencydes'>The Top Most Branding Agencies Are Here.</h2>
      
      <Card className='agenciesdetail'>
    <Typography>
      
    <div class="container3">
        <img src={sh} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>Shapers Private Limited</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4> Gomtinagar, Lucknow <br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button>
            
        </div>
    </div>
    </Typography>
   </Card> <br />
   <Card className='agenciesdetail'>
    <Typography>
    <div class="container3">
        <img src={gaa} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>Gorakhpur Advertising Agency</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4> Tara Mandal, Gorakhpur<br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button>
        </div>
    </div>
    </Typography>
   </Card><br />
   <Card className='agenciesdetail'>
    <Typography>
    <div class="container3">
        <img src={aa} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>Annanya Associates</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4>Tara Mandal, Gorakhpur <br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button>
        </div>
    </div>                 
    </Typography>
   </Card><br />
   <Card className='agenciesdetail'>
    <Typography>
    <div class="container3">
        <img src={ogl} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>Ogilvy</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4> 636 11th Ave, New York, NY 10036, USA <br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button>
        </div>
    </div>
    </Typography>
   </Card><br />
   <Card className='agenciesdetail'>
    <Typography>
    <div class="container3">
        <img src={download} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>Wieden+Kennedy</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4> 224 NW 13th Ave, Portland, OR 97209, USA <br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button>
        </div>
    </div>
    </Typography>
   </Card> <br />
   <Card className='agenciesdetail'>
    <Typography>
    <div class="container3">
        <img src={bbdo} alt="Description of image" width="150px" height="150px" />
        <div class="content2">
            <h2>BBDO Worldwide</h2>
            <h4 style={{display:'inline-block'}}>Description:</h4> Global advertising and marketing agency known for innovative campaigns. <br/>
            <h4 style={{display:'inline-block'}}>Address:</h4>  6th Ave, New York, NY 10019, USA<br />
            <Button className='but' variant="dark" href="/ageninfo">View Details</Button> 
        </div>
    </div>
    </Typography>
   </Card>
   
    </>
   )

} 

export default Agencies;