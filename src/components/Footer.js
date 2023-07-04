import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
// import IndeedIcon from "@material-ui/icons/Indeed"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
       <div><InstagramIcon/><FacebookIcon/><LinkedInIcon/></div>
       <p> &copy; 2023 elio</p>
        </div>
  )
}

export default Footer