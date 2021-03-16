import React from "react";
import {
  Container,
  Section,
  SectionBottom,
  BottomContent,
  MainContent,
} from "./MainElements";
import sec1 from "../../assets/images/sec-1.png";
import sec2 from "../../assets/images/sec-2.png";
import sec3 from "../../assets/images/sec-3.png";
import sec4 from "../../assets/images/sec-4.png";
import { Button } from "../parts/Button";
import Footer from "./Footer";

export const Main = () => {
  return (
    <>
      <Container>
        <Section>
          <MainContent>
            <h1>
              Reservasi tiket nontonmu sebelum keduluan orang lain kuy dicoba
              dulu pasti ketagihan
            </h1>
            <p>
              Sering nih ga dapat tiket bioskop karena selalu keduluan ?? udah
              ga jaman tuh makanya pakai CITIC dan kamu ga akan pernah lagi
              keduluan sama orang lain.
            </p>
          </MainContent>
          <img className="w-full" src={sec1} alt="gmabar reservasi" />
        </Section>
        <Section>
          <img className="w-full" src={sec2} alt="gmabar reservasi" />
          <MainContent>
            <h1>
              Mencari teman menonton adalah fitur yang memudahkan pada jomblo
              nonton bersama calon pasangan
            </h1>
            <p>
              Untuk kamu-kamu yang masih jomblo tenang saja dengan CITIC sudah
              tidak ada lagi kata jomblo karena dengan fitur find friend kamu
              dapat menacari teman menonton sekaligus calon pasangan loh
            </p>
          </MainContent>
        </Section>

        <Section>
          <MainContent>
            <h1>
              Platform pembelian tiket bioskop secara online yang mudah dan
              hanya perlu sekali klik loh
            </h1>
            <p>
              Siapa nih yang paling malas antri buat beli tiket bioskop ?? kuy
              langsung cobain CITIC karena dengan CITIC kamu tidak perlu antri
              lagi untuk mendapatkan tiket yang kamu mau
            </p>
          </MainContent>
          <img className="w-full" src={sec3} alt="gmabar reservasi" />
        </Section>

        <SectionBottom>
          <img className="" src={sec4} alt="" />

          <BottomContent>
            <h1>Gimana sudah penasaran ???</h1>
            <p>Kuy langsung dicoba CITIC-nya dijamin ketagihan dengan...</p>
            <Button large={false} type="button">
              Coba sekarang
            </Button>
          </BottomContent>
        </SectionBottom>

        <Footer />
      </Container>
    </>
  );
};
