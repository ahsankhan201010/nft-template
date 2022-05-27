import React, {useState, useRef, useEffect} from "react";
import Section from "../Section/Section";
import classList from "./MainBanner.module.css";
import main_nft from "./../../assets/images/main-nft.png";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import ray from "./../../assets/images/ray.png";

const Ray = () => (
  <div className={classList.ray_container} >
    <img src={ray} alt="" />
    <img src={ray} alt="" />
    <img src={ray} alt="" />
  </div>
);

const MainBanner = () => {
  const [email, setEmail] = useState("your@gmail.com")
  const inputRef = useRef(null)
  useEffect(() => {
    //input focus on CDM
    inputRef.current.focus()
  },[])
  return (
    <Section padding="var(--navbar-height) 0 0 0" margin="0">
      <div className={classList.container}>
        <div>
          <img className={classList.main_nft_img} src={main_nft} />
        </div>
        <div className={classList.content_wrapper}>
          <Header
            margin="0 0 -30px 0px"
            wrapperStyle={{ justifySelf: "start" }}
            variant="h1"
            fontSize={70}
            fontWeight="bold"
            customClass={classList.flex_item}
          >
            EXCLUSIVE <Ray/>
          </Header>
          <Paragraph
            padding="0 0 50px 0"
            gradient="linear-gradient(to right,#00DBDE 0%, #FC00FF 100%)"
            style={{ marginBottom: "30px" }}
            fontSize={40}
          >
            newest NFT release
          </Paragraph>
          <Paragraph margin="0">
            he <strong>BILLIONAIRE CLUB</strong> is a private collection of 10 000 billionaire
          </Paragraph>
          <Paragraph>
            apes NFTs—unique digital collectibles. The apes are stored as
          </Paragraph>
          <Paragraph>
            ERC-721 tokens on the Ethereum blockchain and hosted on IPFS
          </Paragraph>
          <Paragraph fontWeight="medium" margin="0 0 20px 0" color="var(--primary-color)">
            Reveal on October 20th
          </Paragraph>
          <div className={classList.field_wrapper}>
            <input ref={inputRef} value={email} onChange={e => setEmail(e.target.value)} type="text" className={classList.custom_input} />
            <Button fontSize={24} fontWeight="medium">
              Register
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MainBanner;
