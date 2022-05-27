import React from 'react'
import Section from '../Section/Section';
import classList from "./Footer.module.css"
import logo from "./../../assets/images/footer-logo.png"
import Paragraph from '../Paragraph/Paragraph';
import twitterIcon from "./../../assets/images/twitter-icon.png"
import discordIcon from "./../../assets/images/discord-icon.png"
import instaIcon from "./../../assets/images/insta-icon.png"


const Footer = () => {
  return (
    (
        <Section>
            <div className={classList.container}>
                <img src={logo} alt="" />
                <Paragraph color='#767676' >Terms of Service</Paragraph>
                <Paragraph color='#767676' >Privacy Policy</Paragraph>
                <div className={classList.icon_container} >
                    <img src={twitterIcon} alt="" />
                    <img src={discordIcon} alt="" />
                    <img src={instaIcon} alt="" />
                </div>
            </div>
        </Section>
    )
  )
}

export default Footer