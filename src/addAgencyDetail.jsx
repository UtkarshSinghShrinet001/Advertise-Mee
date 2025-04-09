import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function AddAgencyDetail(){
    return(
        <>
  <div className="aa card">
   <Card >
       <i className='addagencydet'>Add Your Agency Here:</i>
       <Card className="colorcard">
       <h1 className="boxdet"><TextField id="outlined-basic" label="Agency Name" variant="outlined" /></h1> 
       <h1 className="boxdet"><TextField id="outlined-basic" label="Location" variant="outlined" /></h1> 
       <h1 className="boxdet"><TextField id="outlined-basic" label="Owner Name " variant="outlined" /></h1> 
       <h1 className="boxdet"><TextField id="outlined-basic" label="Contact Number " variant="outlined" /></h1>
       
       <div className='regbutton'><Button className='but' variant="dark" href=""><b>Add Agency</b></Button></div>

       </Card>
       </Card>
        
       </div>
   </>
    )
}
 export default  AddAgencyDetail;

  