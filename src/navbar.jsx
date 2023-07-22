import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type="search" name="" id="search" placeholder='search for...'  />
                <div className='searchicon'><SearchIcon></SearchIcon></div>
            </div>
                <div className='items'>
                   {/* <div className='item'> <NotificationsRoundedIcon></NotificationsRoundedIcon></div> */}
                   <div className='item'> 
                    <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                   </Badge>  
                  </div>
                 <div className='item'> 
                   <Badge badgeContent={5} color="primary">
                   <NotificationsRoundedIcon color="action" />
                   </Badge>  
                 </div>
                 <div className='borderr'></div>
                 
                <div className='douglas'>Douglas mcgee</div>
                 
                <div className='avatar'>
                 <Stack direction="row" spacing={3}>
                  <Avatar alt="https://www.websplashers.com/wp-content/uploads/2021/08/Whatsapp-Dp-Download2.jpg" />
                 </Stack>
                 </div>
              </div>
           </div>
         </div>
  )
}

export default Navbar