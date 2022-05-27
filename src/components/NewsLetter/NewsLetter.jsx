import React from "react";
import Section from "../Section/Section";
import Header from "../Header/Header";
import classList from "./NewsLetter.module.css";
import pointer from "./../../assets/images/pointer.png"

const NewsLetter = () => {
  return (
    <Section>
      <div className="center">
        <Header fontWeight="semi-bold" fontSize={40} gradient="linear-gradient(to right,#00DBDE 0%, #FC00FF 100%)">
          Get Aped with Us!
        </Header>
        <Header fontSize={20} fontWeight="medium" ><span className={classList.underLiner}>Sign up for our newsletter</span> <img className={classList.pointerImg} src={pointer} alt="" /></Header>
      </div>
    </Section>
  );
};

export default NewsLetter;
