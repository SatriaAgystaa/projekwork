import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import Image from 'next/image';

const MainSection = () => {
  return (
    <main id="main" className="py-6 md:py-16 lg:py-18 px-8 md:px-20 lg:px-32">
      <Container fluid>
        <Row className="flex flex-col md:flex-row justify-between gap-10 md:gap-5 lg:gap-0 items-center">
          <Col className="max-w-xl mb-8 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#455A64] leading-tight mb-4 md:mb-5 lg:mb-6">
              Nikmati semua layanan <span className="text-yellow-500 font-semibold">Barenganaja</span> dengan{" "}
              <span
                className="text-yellow-500 font-semibold inline-block border-b-2 border-yellow-500"
                style={{ paddingBottom: "2px" }}
              >
                Aman
              </span>
            </h1>
            <p className="text-lg md:text-base lg:text-xl text-[#455A64] mb-6 md:mb-8 lg:mb-10">
              Banyak layanan yang bisa kamu pilih untuk bisa menikmati akun secara bersama dengan teman, keluarga, dan orang terdekat. Yuk! cek sekarang juga di Barenganaja.
            </p>
            <Button className="p-0 overflow-hidden rounded-md border-none h-12 md:h-14 lg:h-12">
              <div className="flex items-center justify-start h-full">
                <div className="bg-yellow-500 text-white flex items-center justify-center px-8 md:px-10 lg:px-12 py-4 w-3/4 text-lg h-full whitespace-nowrap">
                  Lihat Layanan
                </div>
                <div className="bg-[#025464] flex items-center justify-center w-1/4 text-lg h-full">
                  <ArrowRight className="text-white text-xl md:text-2xl lg:text-3xl" />
                </div>
              </div>
            </Button>
          </Col>

          <Col className="w-full md:w-auto order-1 md:order-2">
            <Image
              src="dashboardbarenganaja/mainsection/illustration.svg"
              alt="Illustration"
              width={480}
              height={480}
              className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem]"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MainSection;
