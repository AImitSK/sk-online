import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamische Jahreszahl

  return (
    <footer className="bg-grey px-5 pb-12 pt-24 mt-24">
      <div className="container mx-auto flex flex-wrap justify-between items-end h-full">
        
        {/* Linker Hauptcontainer */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-full pr-3">
          <div className="flex flex-wrap">
            
            {/* Erster Navigationscontainer */}
            <div className="w-1/2 mb-4">
              <p className="font-inter font-bold leading-normal text-dunkel mb-0">Leistungen</p>
              <Link href="/leistungen/webdesign-uxdesign" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Webdesign / UX-Design</Link>
              <Link href="/leistungen/digital-marketing" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Digital Marketing</Link>
              <Link href="/leistungen/content-management" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Content Management</Link>
              <Link href="/leistungen/e-commerce" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">E-Commerce</Link>
              <Link href="/leistungen/ki-chatbots" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">KI-Chatbots</Link>
              <Link href="/leistungen/werbefotografie-film" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Werbefotografie und Film</Link>
            </div>

            {/* Zweiter Navigationscontainer */}
            <div className="w-1/2 mb-4">
              <p className="font-inter font-bold leading-normal text-dunkel mb-0">SK Online Marketing</p>
              <Link href="/agentur" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Über uns</Link>
              <Link href="/referenzen" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">Referenzen</Link>
              <Link href="/kitools" className="block font-inter font-light leading-normal hover:text-blue text-dunkel">KI-Tools</Link>
            </div>

          </div>

          {/* Container für Copyright und Social Icons */}
          <div className="w-full mt-4 pt-4 flex flex-col justify-end h-full">
            <div className="flex flex-col justify-start">
              <div className="mb-0">
                <Link href="/impressum" className="font-inter font-light leading-normal hover:text-blue text-dunkel">Impressum</Link><span> | </span>
                <Link href="/datenschutz" className="font-inter font-light leading-normal hover:text-blue text-dunkel">Datenschutz</Link><span> | </span>
                <Link href="/#" className="font-inter font-light leading-normal hover:text-blue text-dunkel">Cookie Richtlinien</Link>
              </div>
              <p className="font-inter font-light leading-normal text-dunkel">© {currentYear} Copyright | SK Online Marketing Bad Oeynhausen</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start mt-2 space-x-4 items-end">
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/insta.svg" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Rechter Container mit Logo */}
        <div className="w-full lg:w-1/2 lg:flex hidden items-end justify-end h-full">
          <Image
            src="/logo-sk-onlone-marketing-dunkel.svg"
            alt="SK Online Marketing Logo"
            width={131.6}
            height={42.27}             
            className="cursor-pointer transition-transform duration-300"
          />
        </div>

      </div>
    </footer>
  );
}
