import React, { useState } from "react";
import classList from "./Navbar.module.css";
import logo from "./../../assets/images/logo.png";
import Header from "./../Header/Header";
import Section from "./../Section/Section";
import Button from "./../Button/Button";
import { NavLink } from "react-router-dom";
import polygon from "./../../assets/images/polygon.png";

const NavItem = ({ children, path }) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink to={path} className={({ isActive }) => setActive(isActive)}>
      <div className={classList.navlink_container}>
        <Header color={active ? "var(--primary-color)" : "white"} fontSize={18}>
          {children}
        </Header>
        {active && <img src={polygon} className={classList.polygonImg} />}
      </div>
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <Section
      extraClass={classList.section_wrapper}
      height="var(--navbar-height)"
      background="black"
      margin="0"
      padding="0"
    >
      <div className={classList.container}>
        <img src={logo} alt="" />
        <NavItem path="/">Home</NavItem>
        <NavItem path="/features">Features</NavItem>
        <NavItem path="/roadmap">Roadmap</NavItem>
        <NavItem path="/team">Team</NavItem>
        <Button path="/join">Join Our Discord</Button>
      </div>
    </Section>
  );
};

export default Navbar;
