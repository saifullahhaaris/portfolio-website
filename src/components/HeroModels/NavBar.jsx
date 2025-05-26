import React, { useState } from 'react';
import { navLinks } from '../../constants';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="inner">
        {/* Hamburger Icon for Mobile - left side */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* SAIF logo on the left */}
        <div className="hidden lg:block">
  <a className="logo" href="#hero">
    SAIF
  </a>
</div>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {open && (
        <nav className="mobile-menu">
            <ul>
            {/* Add SAIF at the top */}
            <li>
                <a href="#hero" onClick={() => setOpen(false)}>
                Saif
                </a>
            </li>

            {/* Existing nav links */}
            {navLinks.map(({ link, name }) => (
                <li key={name}>
                <a href={link} onClick={() => setOpen(false)}>
                    {name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        )}

        {/* Contact button always at right */}
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;





//Dynamic navbar that changes style on scroll using React 


// import React, { useEffect } from 'react'
// import { navLinks } from '../../constants'
// import { useState } from 'react';

// const NavBar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () =>{
//             const isScrolled = window.scrollY > 10;
//             setScrolled(true);
//         }
//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll',handleScroll);
//     },[])
//   return (
//     <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
//         <div className="inner">
//             <a className="logo" href="#hero">
//                 Saif
//             </a>

//             <nav className="desktop">
//                 <ul>
//                     {navLinks.map(({link, name}) => (
//                         <li key={name} className="group">
//                             <a href={link}>
//                                 <span>{name}</span>
//                                 <span className="underline"/>
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             <a href="#contact" className="contact-btn group">
//                 <div className="inner">
//                     <span>
//                         contact me
//                     </span>
//                 </div>
//             </a>
//         </div>
//     </header>
//   )
// }

// export default NavBar
