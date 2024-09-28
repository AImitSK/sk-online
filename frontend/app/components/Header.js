'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false); // Für das Dropdown von "Leistungen"

  // Sticky Header Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLeistungen = () => {
    setLeistungenOpen(!leistungenOpen);  // Funktion zum Öffnen/Schließen des Dropdowns
  };

  return (
    <header className={`bg-grey p-4 ${isSticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg' : ''}`}>
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-sk-online-marketing.svg"
              alt="SK Online Marketing Logo"
              width={isSticky ? 80 : 137} // Logo verkleinern bei Sticky
              height={44}
              className="cursor-pointer transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {/* Hamburger Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-16 space-x-16 text-[22px]">
          <div className="group relative">
            <a href="#" className="hover:text-blue py-0 px-4 text-dunkel">
              Leistungen
            </a>
            {/* Dropdown bei Hover */}
            <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-50 bg-white shadow-lg w-max p-4 transition-all duration-300 ease-in-out">
              <ul className="text-left space-y-5 p-5">
                <li><a href="/leistungen/webdesign-uxdesign" className="hover:text-blue text-dunkel">Webdesign / UX-Design</a></li>
                <li><a href="/leistungen/digital-marketing" className="hover:text-blue text-dunkel">Digital Marketing</a></li>
                <li><a href="/leistungen/content-management" className="hover:text-blue text-dunkel">Content Management</a></li>
                <li><a href="/leistungen/ki-chatbots" className="hover:text-blue text-dunkel">KI-Chatbots</a></li>
                <li><a href="/leistungen/werbefotografie-film" className="hover:text-blue text-dunkel">Werbefotografie / Film</a></li>
              </ul>
            </div>
          </div>
          <a href="/agentur" className="hover:text-blue py-0 px-4 text-dunkel">Agentur</a>
          <a href="/referenzen" className="hover:text-blue py-0 px-4 text-dunkel">Referenzen</a>
          <a href="/kitools" className="hover:text-blue py-0 px-4 text-dunkel">KI Tools</a>
        </nav>

        {/* Kontakt Button (hidden on small screens) */}
        <div className="ml-auto hidden md:block">
          <a
            href="/kontakt"
            className="bg-darkblue text-white px-4 py-2 rounded-md hover:bg-blue hover:text-white transition-all duration-300"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 z-50 md:hidden">
            {/* Logo */}
            <Link href="/" className="absolute top-4">
              <Image
                src="/logo-sk-online-marketing.svg"
                alt="SK Online Marketing Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </Link>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close navigation"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Leistungen mit Klick-Öffnung in Mobile */}
            <button
              className="text-2xl hover:text-primary focus:outline-none"
              onClick={toggleLeistungen}  // Hier wird das Dropdown durch Klick geöffnet/geschlossen
            >
              Leistungen
            </button>

            {/* Dropdown Unterpunkte von Leistungen (zentriert und nur bei Klick geöffnet) */}
            {leistungenOpen && (
              <ul className="text-center space-y-4">
                <li><a href="/leistungen/webdesign-uxdesign" className="hover:text-primary">Webdesign / UX-Design</a></li>
                <li><a href="/leistungen/digital-marketing" className="hover:text-primary">Digital Marketing</a></li>
                <li><a href="/leistungen/content-management" className="hover:text-primary">Content Management</a></li>
                <li><a href="/leistungen/ki-chatbots" className="hover:text-primary">KI-Chatbots</a></li>
                <li><a href="/leistungen/werbefotografie-film" className="hover:text-primary">Werbefotografie / Film</a></li>
              </ul>
            )}

            <a href="/agentur" className="text-2xl hover:text-primary">Agentur</a>
            <a href="/referenzen" className="text-2xl hover:text-primary">Referenzen</a>
            <a href="/kitools" className="text-2xl hover:text-primary">KI Tools</a>
            <a href="/kontakt" className="text-2xl bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-over">Kontakt</a>
          </div>
        )}
      </div>
    </header>
  );
}
