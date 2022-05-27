import React from "react";
import classList from "./NFTCardList.module.css";
import star from "./../../assets/images/star.png";
import Header from "../Header/Header";
import user1 from "./../../assets/images/user1.png";
import nft1 from "./../../assets/images/nft1.png";
import user2 from "./../../assets/images/user2.png";
import nft2 from "./../../assets/images/nft2.png";
import user3 from "./../../assets/images/user3.png";
import nft3 from "./../../assets/images/nft3.png";
import nft4 from "./../../assets/images/nft4.png";
import nft5 from "./../../assets/images/nft5.png";
import nft6 from "./../../assets/images/nft6.png";


const data = [
  {
    user: {
      photo: user1,
      name: "Knight"
    },
    stars: 213,
    nft: nft1,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
  {
    user: {
      photo: user2,
      name: "Knight"
    },
    stars: 213,
    nft: nft2,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
  {
    user: {
      photo: user3,
      name: "Knight"
    },
    stars: 213,
    nft: nft3,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
  {
    user: {
      photo: user1,
      name: "Knight"
    },
    stars: 213,
    nft: nft4,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
  {
    user: {
      photo: user2,
      name: "Knight"
    },
    stars: 213,
    nft: nft5,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
  {
    user: {
      photo: user3,
      name: "Knight"
    },
    stars: 213,
    nft: nft6,
    price: "0.25 ETH",
    duration: "12h 55m 2s"
  },
]


const NFTCard = ({user: {photo, name}, stars, nft, price, duration}) => (
  <div className={classList.card_container}>
    <div className={classList.user_container}>
      <div className={classList.card_user_child_container}>
        <img className={classList.userImg} src={photo} alt="" />
        <Header fontSize={14} >@{name}</Header>
      </div>
      <div style={{justifySelf: "end"}} className={classList.card_user_child_container}>
        <img className={classList.starImg} src={star} alt="" />
        <Header fontSize={14} >{stars}</Header>
      </div>
    </div>
    <img src={nft} className={classList.nftImg} alt="" />
    <div className={classList.user_container}>
      <div>
        <Header color="#A7A7A7" fontSize={14} >Current bid</Header>
        <Header fontSize={18} fontWeight="bold" >{price}</Header>
      </div>
      <div style={{justifySelf: "end", textAlign: "end"}}>
      <Header color="#A7A7A7" fontSize={14} >Ending in</Header>
        <Header fontSize={18} fontWeight="bold" >{duration}</Header>
      </div>
    </div>
  </div>
);

const NFTCardList = () => {
  return (
    <div className={classList.container}>
      {data?.map((el, index) => <NFTCard key={index} {...el} />)}
    </div>
  );
};

export default NFTCardList;
