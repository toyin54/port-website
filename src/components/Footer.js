import React from 'react'
import InstaIcon from '@mui/icons-material/Instagram'
import LinkedIcon from '@mui/icons-material/LinkedIn'


import '../styles/Footer.css'
function Footer(){ 
    return( 
    <div className='footer'>
        <div className='socialMedia'>
            <InstaIcon  href = "twitter.com"/>
            <LinkedIcon />
        </div>
        <p> &copy; Ayyub Jose PortFolio Website</p>
    </div>
    )

}

export default Footer;