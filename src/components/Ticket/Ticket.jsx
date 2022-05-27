import React from 'react'
import classList from "./Ticket.module.css"
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import ticket from "./../../assets/images/ticket.png"
import Section from '../Section/Section';

const Ticket = () => {
  return (
    (
        <Section padding="0" margin="0" background="linear-gradient(to right, #AC32E4 0%, #7918F2 48%, #4801FF 100%)" >
        <div className={classList.container}>
            <div>
                <Header margin="0 0 20px 0" fontWeight='bold' fontSize={40} color="#E2C668" >The Golden Guests</Header>
                <Paragraph style={{width: "70%"}} margin="0 0 30px 0" >The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection</Paragraph>
                <Button  style={{boxShadow: "-5px -5px 0px 0px black", border: "1px solid black"}} backgroundColor="linear-gradient(to right, #7918F2 48%, #4801FF 100%)" fontSize={20} fontWeight="bold" >Join us to register for the Presale</Button>
            </div>
            <div style={{position: "relative"}}>
                <img src={ticket} alt="" className={classList.ticketImg} />
            </div>
        </div>
        </Section>
    )
  )
}

export default Ticket