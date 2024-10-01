"use client";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import SimpleSlider from './components/Logoslider';
import IconBoxSlider from './components/Iconboxenslider';
import ImageTextBox from './components/ImageTextBox';
import AnimatedTitle from './components/AnimatedTitle';
import CTABox from './components/CTABox';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero mit Bild */}
      <div className="flex flex-col md:flex-row justify-between items-center h-auto lg:h-[800px] max-w-screen-2xl mx-auto px-8 space-y-6 mt-6">

        <div className="w-full md:w-1/2 flex justify-center h-auto lg:h-full items-center order-1 md:order-2 px-8 mt-5">
          {/* Hier das animierte SVG mit begrenzter Größe */}
          <div className="w-full h-auto max-w-[450px]">
            <AnimatedTitle />
          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1 md:pr-6">


          {/* Was ist neu */}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="/kitools" className="inline-flex space-x-6">
              <span className="font-inter rounded-full bg-lightblue px-3 py-1 text-sm font-semibold leading-6 text-blue ring-1 ring-inset ring-blue">
                What's new
              </span>
              <span className="font-inter inline-flex items-center space-x-2 text-sm font-medium leading-6 text-dunkel">
                <span>Social Media Generator</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-dunkel" />
              </span>
            </a>
          </div>



          <h1 className="font-bricolage font-medium text-[2.5rem] text-dunkel md:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] md:leading-[0.9]">
            Zeitgerechtes Webdesign und Digital Marketing
          </h1>
          <p className="font-inter font-light text-dunkel text-base md:text-2xl leading-relaxed">
            SK Online Marketing ist eine Werbeagentur aus Bad Oeynhausen mit dem Schwerpunkt auf digitalen Medien.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link href="/agentur" legacyBehavior>
              <a className="inline-flex items-center px-6 py-2 md:px-8 bg-dunkel text-white rounded-md hover:bg-white hover:text-dunkel border border-dunkel transition-all max-w-max group">
                <span className="mr-2">mehr hierzu</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 ml-2 text-white transition-all group-hover:text-[#44474C]"
                />
              </a>
            </Link>
          </div>


        </div>
      </div>



      {/* Logo Slider */}
      <div className="w-full -mt-6 -mb-8 flex justify-center items-center">
        <div className="max-w-screen-2xl w-full lg:px-12 px-0 flex justify-center">
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
        buttonColor="#D7FF9C"
        buttonTextColor="#44474C"
      />

    </div>
  );
}
