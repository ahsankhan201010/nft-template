import React from "react";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import NFTCardList from "../NFTCardList/NFTCardList";

const Collection = () => {
  return (
    <Section>
      <Header
        gradient="linear-gradient(to right,#AC32E4 0%, #7918F2 48%, #4801FF 100%)"
        padding="0 0 20px 0"
        fontSize={70}
        fontWeight="bold"
      >
        Collections
      </Header>
      <Paragraph padding="0 0 40px 0" style={{ width: "90%" }}>
        With more than 180+ hand drawn traits, each NFT is unique and comes with
        a membership to an exclusive group of successful investors. Join an
        ambitious ever-growing community with multiple benefits and utilities
      </Paragraph>
      <NFTCardList />
    </Section>
  );
};

export default Collection;
