import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[url('/image-hero-mobile.jpg')] bg-cover bg-center h-72 md:bg-[url('/image-hero-desktop.jpg')] md:h-100 flex items-start justify-between px-6 md:px-20 py-6 shadow-[inset_0_60px_40px_0px_rgba(0,0,0,0.3)] relative">
      <img className="relative z-30" src={`${import.meta.env.BASE_URL}logo.svg`} alt="Crowdfund Logo" />
      
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-20"></div>}
      
       <MobileMenu isMenuOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <nav className="hidden md:flex text-white text-sm">
        <ul className="flex items-center gap-6">
          <li>
            <a href="#" className="hover:border-b hover:border-b-white/30 focus-visible:outline-2 focus-visible:outline-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:border-b-white/30 focus-visible:outline-2 focus-visible:outline-white">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:border-b-white/30 focus-visible:outline-2 focus-visible:outline-white">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
