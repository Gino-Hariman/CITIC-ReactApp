import React from "react";
import { Container, Section, HeroArrow, LinkImage } from "./HeroElements";
import { Button } from "../parts/Button";
import Bg1 from "../../assets/images/bg1.png";
import IcBottom from "../../assets/images/icBottom.png";
import About from "./About";
import { Main } from "./Main";

const Hero = () => {
  return (
    <>
      {/* HeroOne dari HeroElement * Bg1 */}
      <Container>
        <img className="object-cover" src={Bg1} alt="bg-hero-1" />
        <Section className='hero'>
          <h1>Kuy beli ticket dengan mudah</h1>
          <p>
            Pakai CITIC dapatkan tiket dan teman baru menonton di bioskop mudah
            dan pastinya super cepat
          </p>
          <Button large={true} type="button">
            Beli Tiketmu sekarang
          </Button>
        </Section>

        <HeroArrow>
          <h1>Tentang CITIC</h1>
          <LinkImage to="/bottom" className="mt-3">
            <img src={IcBottom} alt="arrow bottom" />
          </LinkImage>
        </HeroArrow>

        {/* Component About */}
        <About />
        
      </Container>
    </>
  );
};

export default Hero;
