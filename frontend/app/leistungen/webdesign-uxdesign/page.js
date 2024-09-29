import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Hero mit Bild */}
      <div className="flex flex-col md:flex-row justify-between items-center h-auto lg:h-[800px] max-w-screen-2xl mx-auto px-8 space-y-8 mt-6 mb-32">

        <div className="w-full md:w-1/2 flex justify-center h-auto lg:h-full items-center order-1 md:order-2 px-8 mt-5">
          {/* Hier das animierte SVG mit begrenzter Größe */}
          <div className="w-full h-auto max-w-[544px]">
            <Image
              src="/titel-webdsign.svg"
              alt="SK Online Marketing Logo"
              width={544}
              height={544}
              className="cursor-pointer transition-transform duration-300"
            />

          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-bricolage font-medium text-[2.5rem] text-dunkel md:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] md:leading-[0.9]">
            Webdesign<br />
            UX-Design
          </h1>
          <p className="font-inter font-light text-dunkel text-base md:text-2xl leading-relaxed">
            Jede Interaktion ein Erlebnis. Wir entwickeln Webseiten, die intuitiv begeistern und den Nutzer mühelos ans Ziel führen.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/referenzen" legacyBehavior>
              <a className="inline-block px-6 md:px-8 py-2 bg-dunkel text-white rounded-md hover:bg-white hover:text-dunkel border border-dunkel transition-all max-w-max">
                Referenzen
              </a>
            </Link>
          </div>
        </div>
      </div>


      <div className=" bg-lightblue">

        <div className="flex justify-center">
          <div className="flex flex-col w-1/2 items-center -mt-40">
            <Image
              src="/ux-design.svg"
              alt="Ux-Design"
              width={631}
              height={449}
              className="cursor-pointer transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-end w-1/2 font-bricolage font-light text-3xl lg:text-5xl mb-4 text-dunkel">
            <h2>UX Design als<br />Schlüssel zum Erfolg</h2>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col w-1/2 items-center pl-16 pr-2 mb-10">
            <p>Erfolgreiches UX Design stellt den Nutzer in den Mittelpunkt. Durch eine durchdachte Benutzerführung, klare Strukturen und intuitive Interaktionen schaffen wir digitale Erlebnisse, die nicht nur begeistern, sondern auch Vertrauen aufbauen.</p>
          </div>
          <div className="flex flex-col w-1/2 items-center pr-16 mb-10">
            <p>Unser Ansatz kombiniert Kreativität mit Strategie. Mit Techniken wie User Research und Prototyping gestalten wir Lösungen, die genau dort ansetzen, wo sie gebraucht werden und Ihr Wachstum nachhaltig fördert.</p>
          </div>
        </div>
      </div>




    </div>

  );
}
