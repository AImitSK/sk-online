"use client";
import SimpleSlider from './components/Logoslider';
import IconBoxSlider from './components/Iconboxenslider';
import ImageTextBox from './components/ImageTextBox';
import AnimatedTitle from './components/AnimatedTitle';
import CTABox from './components/CTABox';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Hero mit Bild */}
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[800px] max-w-screen-2xl mx-auto px-4 mt-8 md:mt-0 space-y-8 md:space-y-0">

        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 order-1 md:order-2">
          <AnimatedTitle />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-bricolage font-medium text-[3rem] text-dunkel md:text-[4.5rem] leading-[1.1] md:leading-[0.9]">
            Zeitgerechtes Webdesign und Digital Marketing
          </h1>
          <p className="font-inter font-light text-dunkel text-base md:text-2xl leading-relaxed">
            Inszeniert von SK Online Marketing
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/agentur" legacyBehavior>
              <a className="inline-block px-6 md:px-8 py-2 bg-dunkel text-white rounded-md hover:bg-white hover:text-dunkel border border-dunkel transition-all max-w-max">
                mehr hierzu
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="w-full -mt-6 -mb-8 flex justify-center items-center">
        <div className="max-w-screen-2xl w-full px-12 flex justify-center">
          <SimpleSlider />
        </div>
      </div>

      {/* BigBox Theaser */}
      <ImageTextBox
        imageSrc="/klee.svg"
        imageAlt="Klee Bild"
        imageBgColor="bg-darkblue"
        textBgColor="bg-lightblue"
        title="UX Design, das die Nutzer begeistert."
        text="Jede Interaktion ein Erlebnis. Wir entwickeln Webseiten, die intuitiv begeistern und den Nutzer mühelos ans Ziel führen."
        link="/leistungen/webdesign-uxdesign"
        linkText="mehr hierzu"
        animationType="rotationZoom"
        position="right"
      />

      {/* Icon-Slider */}
      <div className="w-full h-auto mt-8 mb-8 flex justify-center items-center">
        <div className="w-full h-auto flex justify-center">
          <IconBoxSlider />
        </div>
      </div>

      {/* BigBox Theaser */}
      <ImageTextBox
        imageSrc="/sterne-titel.svg"
        imageAlt="Magic KI"
        imageBgColor="bg-purple"
        textBgColor="bg-lightpurple"
        title="KI Chatbots: Ein gewaltiger Sprung für Ihr Marketing."
        text="Wie die ersten Schritte auf dem Mond revolutionieren KI Chatbots die Art, wie Sie mit Ihren Kunden interagieren."
        link="/leistungen/ki-chatbots"
        linkText="mehr hierzu"
        animationType="zoom"
        position="left"
      />

      {/* BigBox Theaser */}
  

      {/* CTA Box */}
      <CTABox
        title="Wir transformieren Daten in greifbaren digitalen Erfolg."
        text="Klingt wie digitale Alchemie? Wir zeigen Ihnen, wie wir aus Daten, Insights oder kreativem UX-Design wahre digitale Goldstücke „transmutieren“."
        buttonText="Kontakt aufnehmen"
        bgColor="bg-lightgreen"
      />

    </div>
  );
}
