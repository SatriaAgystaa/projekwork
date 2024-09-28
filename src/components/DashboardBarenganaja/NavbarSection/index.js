import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MenuButton, X, House, Person, Cart, Gear, QuestionCircle } from 'react-bootstrap-icons';
import Link from 'next/link';
import Image from 'next/image';

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(false); // Menutup navbar setelah klik

  return (
    <nav className="bg-white p-4 md:px-32 px-8 md:py-8 sticky top-0 z-50 shadow-sm md:shadow-none">
      <Container className="mx-auto">
        <Row className="flex items-center justify-between">
          <Col>
            <div className="text-yellow-500 text-2xl font-bold">
              <Link href="#main" passHref>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={160}  /* Ubah ukuran logo sedikit untuk tablet */
                  height={80}  /* Ubah ukuran logo sedikit untuk tablet */
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
          </Col>

          {/* Link navigasi di tampilan tablet dan desktop */}
          <Col className="hidden md:flex space-x-8 lg:space-x-20">
            <Link href="#service" className="text-[#455A64] hover:text-yellow-300 text-md md:text-base lg:text-lg relative group">
              Layanan
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#summary" className="text-[#455A64] hover:text-yellow-300 text-md md:text-base lg:text-lg relative group">
              Pengguna
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#cara-pesan" className="text-[#455A64] hover:text-yellow-300 text-md md:text-base lg:text-lg relative group">
              Cara Pesan
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#partners" className="text-[#455A64] hover:text-yellow-300 text-md md:text-base lg:text-lg relative group">
              Partners
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#faq" className="text-[#455A64] hover:text-yellow-300 text-md md:text-base lg:text-lg relative group">
              FAQ
              <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </Col>

          {/* Tombol menu di tampilan mobile */}
          <Col className="md:hidden text-right">
            <Button onClick={() => setIsOpen(!isOpen)} variant="link" className="text-yellow-500 p-0">
              {isOpen ? <X size={24} /> : <MenuButton size={24} />}
            </Button>
          </Col>
        </Row>

        {/* Menu dropdown di tampilan mobile */}
        <Row className={`md:hidden ${isOpen ? 'absolute' : 'hidden'} top-16 left-0 w-full bg-white font-semibold text-[#455A64] shadow-md py-3 z-50`}>
          <Col className="flex flex-col space-y-4 px-6 py-2">
            <Link href="#service" className="relative py-2 flex items-center group" onClick={handleClick}>
              <House size={20} className="mr-3" />
              Layanan
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
            <Link href="#summary" className="relative py-2 flex items-center group" onClick={handleClick}>
              <Person size={20} className="mr-3" />
              Pengguna
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
            <Link href="#cara-pesan" className="relative py-2 flex items-center group" onClick={handleClick}>
              <Cart size={20} className="mr-3" />
              Cara Pesan
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
            <Link href="#partners" className="relative py-2 flex items-center group" onClick={handleClick}>
              <Gear size={20} className="mr-3" />
              Partners
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
            <Link href="#faq" className="relative py-2 flex items-center group" onClick={handleClick}>
              <QuestionCircle size={20} className="mr-3" />
              FAQ
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavbarSection;
