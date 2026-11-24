

const MobileMenu = ({isMenuOpen, toggleMobileMenu}) => {
  return (
    <>
      <button type="button" className="md:hidden focus-visible:outline-2 focus-visible:outline-white relative z-30" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} aria-expanded={isMenuOpen} onClick={toggleMobileMenu}>
        {isMenuOpen ? <img src={`${import.meta.env.BASE_URL}icon-close-menu.svg`} alt="" /> : <img src={`${import.meta.env.BASE_URL}icon-hamburger.svg`} alt="" />}
      </button>
      <nav className={`md:hidden text-black text-lg font-medium top-0 absolute left-0 w-full z-30 duration-200 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className=" bg-white w-[90%] rounded-lg shadow-lg absolute top-22 left-1/2 -translate-x-1/2 divide-y divide-gray-500/30">
          <li>
            <a className="block px-6 py-4.5 focus-visible:-outline-offset-2 focus-visible:outline-gray-500" href="#">About</a>
          </li>
          <li>
            <a className="block px-6 py-4.5 focus-visible:-outline-offset-2 focus-visible:outline-gray-500" href="#">Discover</a>
          </li>
          <li>
            <a className="block px-6 py-4.5 focus-visible:-outline-offset-2 focus-visible:outline-gray-500" href="#">Get Started</a> 
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
