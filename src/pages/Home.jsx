import React from "react";
import classList from "./Home.module.css";
import MainBanner from "../components/MainBanner/MainBanner";
import Collection from "../components/Collection/Collection";
import Ticket from "../components/Ticket/Ticket";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div className={classList.main_wrapper}>
      <MainBanner />
      <Collection />
      <Ticket />
      <NewsLetter />
    </div>
  );
};

export default Home;
