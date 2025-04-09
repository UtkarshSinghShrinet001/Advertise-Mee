import Card from '@mui/material/Card';
import { Avatar, colors } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function WhatsNew(){
    return(

        
        <>
        <h2 className='WN title'>NOW ADVERTISE YOUR BRAND WITH EMERGING INFLUENCERS...</h2>
       

            
 

   <Card className='Avatar' >
     
     <Avatar className='Avatar'
 alt="Remy Sharp"
 src="https://yt3.googleusercontent.com/ytc/AIdro_lmaYOjcRw0-wAZKvvECrErNkHPIFrM7Lc-ntx5nxRGaLo=s900-c-k-c0x00ffffff-no-rj"
 sx={{ width: 200, height: 200}}
       />
       <CardContent>
         <Typography  class="avatarname">
         Samay Raina
         </Typography>
         <Typography class="avatarname1">
           A well known Youtuber/Standup Comedian
           with more than 10 million followers
         </Typography>
         <button className='bu'>More Info.</button>
       </CardContent>
    
   </Card>



   <Card className='Avatar' >
     
     <Avatar className='Avatar'
 alt="Remy Sharp"
 src="https://www.koimoi.com/wp-content/new-galleries/2021/10/bhuvan-bam-reveals-singing-in-bars-before-youtube-fame-001.jpg"
 sx={{ width: 200, height: 200}}
       />
       <CardContent>
         <Typography  class="avatarname">
           Bhuvan Bam
         </Typography>
         <Typography class="avatarname1">
           A well known Youtuber
           with more than 20 million followers
         </Typography>
         <button className='bu'>More Info.</button>
       </CardContent>
    
   </Card>



   <Card className='Avatar' >
     
      <Avatar className='Avatar'
  alt="Remy Sharp"
  src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230312045624.jpg"
  sx={{ width: 200, height: 200}}
        />
        <CardContent>
          <Typography  class="avatarname">
            Samantha Ruth Prabhu
          </Typography>
          <Typography class="avatarname1">
            A well known actor and Model
            with more than 30 million followers
          </Typography>
          <button className='bu'>More Info.</button>
        </CardContent>
     
    </Card>

    <Card className='Avatar' >
     
     <Avatar className='Avatar'
 alt="Remy Sharp"
 src="Screenshot 2024-08-20 170905"
 sx={{ width: 200, height: 200}}
       />
       <CardContent>
         <Typography  class="avatarname">
           
         </Typography>
         <Typography class="avatarname1">
       
         </Typography>
         <button className='bu'>More Info.</button>
       </CardContent>
    
   </Card>
        </>
       
        
        
    )

   

}

export default WhatsNew;