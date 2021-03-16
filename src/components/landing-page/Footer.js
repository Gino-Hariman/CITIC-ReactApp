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
          <h1 className="ml-3 text-3xl font-bold">CITIC</h1>
          <p className="ml-3 pt-2 font-normal">Cinema Ticket</p>
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
        <SocialLink>
          <img src={facebook} alt="" />
        </SocialLink>
        <SocialLink>
          <img src={linkedin} alt="" />
        </SocialLink>
        <SocialLink>
          <img src={twitter} alt="" />
        </SocialLink>
        <SocialLink>
          <img src={youtube} alt="" />
        </SocialLink>

        <Social target="_blank" href="https://www.instagram.com/citic.id/">
          <img src={instagram} alt="" />
        </Social>
      </SocialMedia>
    </Container>
  );
};

export default Footer;
