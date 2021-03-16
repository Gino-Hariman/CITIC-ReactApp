import React from "react";
import Rectangle2 from "../../assets/images/rectangle2.png";
import Bg2 from "../../assets/images/bg2.png";
import { Container, Section, Content, Bottom } from "./AboutElements";
import { Main } from "./Main";

const About = () => {
  return (
    <>
      <Container>
        <img src={Rectangle2} alt="rectangle section 2" />
        <Section>
          <img src={Bg2} alt="" />
          <Content>
            <h1>
              <span className="lg:leading-relaxed">
                CITIC adalah sebuah platform yang dibuat untuk memudahkan kamu
                membeli tiket bioskop
              </span>
            </h1>
            <p>
              CITIC telah didesain khusus untuk kamu yang mager beli tiket
              langsung di bioskop dan telah didukung dengan berbagai fitur baru
              dan sangat menarik sehingga kamu pasti ketagihan.
            </p>
          </Content>
        </Section>
      </Container>
      <Bottom>
        <h1>Fitur CITIC</h1>
      </Bottom>

      {/* Component Main */}
      <Main />
    </>
  );
};

export default About;
