import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"
// import IndeedIcon from "@material-ui/icons/Indeed"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
       <div className='socialMedia'>
            <InstagramIcon/><EmailIcon/><FacebookIcon/>
       </div>
       <p> 
            &copy; 2023 eliowebdev.com
       </p>
        </div>
  )
}

export default Footer