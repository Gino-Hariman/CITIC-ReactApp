import React from "react";
import {
  Container,
  Nav,
  NavLink,
  NavMenu,
  SocialMedia,
  SocialLink,
  Social,
} from "./FooterElements";
import facebook from "../../assets/images/social/facebook.png";
import youtube from "../../assets/images/social/youtube.png";
import linkedin from "../../assets/images/social/linkedin.png";
import twitter from "../../assets/images/social/twitter.png";
import instagram from "../../assets/images/social/instagram.png";

const Footer = () => {
  const test = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Nav>
        <NavLink to="/">
          {/* <img className="ml-3" src={Logo} alt="logo citic" /> */}
          <h1 className="sm:ml-3 sm:text-3xl text-2xl font-bold">CITIC</h1>
          <p className="sm:ml-3 pt-2 font-normal sm:text-sm text-base ">Cinema Ticket</p>
        </NavLink>
        <NavMenu>
          <NavLink to="/tentang-citic" activeStyle>
            Tentang CITIC
          </NavLink>
          <NavLink to="/fitur-citic" activeStyle>
            Fitur CITIC
          </NavLink>
          <NavLink to="/kontak-citic" activeStyle>
            Kontak CITIC
          </NavLink>
        </NavMenu>
      </Nav>

      <SocialMedia>
        <Social>
          <img src={facebook} alt="" />
        </Social>
        <Social>
          <img src={linkedin} alt="" />
        </Social>
        <Social>
          <img src={twitter} alt="" />
        </Social>
        <Social>
          <img src={youtube} alt="" />
        </Social>

        <Social target="_blank" href="https://www.instagram.com/citic.id/">
          <img src={instagram} alt="" />
        </Social>
      </SocialMedia>
    </Container>
  );
};

export default Footer;
