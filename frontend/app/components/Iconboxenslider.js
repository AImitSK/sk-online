"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';

export default function IconBoxSlider() {
    const sliderRef = useRef(null); // Slider-Referenz erstellen

    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="absolute top-1/2 2xl:-right-5 xl:right-0 -right-10 transform -translate-y-1/2 bg-darkblue text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 hidden md:flex" // Navigationspfeil auf Mobilgeräten ausgeblendet
                onClick={onClick}
            >
                ›
            </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="absolute top-1/2 2xl:-left-5 xl:left-0 -left-10 transform -translate-y-1/2 bg-darkblue text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 hidden md:flex" // Navigationspfeil auf Mobilgeräten ausgeblendet
                onClick={onClick}
            >
                ‹
            </div>
        );
    };
    
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        centerPadding: '0px', // Kein Padding an den Rändern
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full flex justify-center mb-11 gap-12 relative">
            <div className="w-full max-w-screen-2xl relative"> {/* Max-width gesetzt und Padding hinzugefügt */}
                <Slider {...settings} ref={sliderRef} className="flex"> {/* Verwende gap für den Abstand */ }

                    {/* Slide 1 */}
                    <div className="px-7">
                        <a href="/leistungen/webdesign-uxdesign" className="block w-full rounded-lg p-6 bg-lightblue space-y-3 hover:bg-grey">
                            <div className="flex items-center justify-between">
                                <h3 className="font-inter font-normal text-2xl leading-6">
                                    Webdesign<br />UX-Design
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        src="/mini-icon/icon-01.png"
                                        alt="Icon"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>

                            <p className="font-inter font-light text-sm text-dunkel">
                                Modernes Webdesign und intuitive UX für unvergessliche Nutzererlebnisse perfekt umgesetzt.
                            </p>

                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-sm font-inter font-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Weitere Slides */}
                    <div className="px-7">
                        <a href="/leistungen/digital-marketing" className="block w-full rounded-lg p-6 bg-lightblue space-y-3 hover:bg-grey">
                            <div className="flex items-center justify-between">
                                <h3 className="font-inter font-normal text-2xl leading-6">
                                    Digital<br />Marketing
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        src="/mini-icon/icon-02.png"
                                        alt="Logo Baeumer"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>

                            <p className="font-inter font-light text-sm text-dunkel">
                                Wir entwickeln Strategien, die Ihre Marke in den Mittelpunkt rücken und sichtbare Ergebnisse erzielen.
                            </p>

                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['SEO', 'Content', 'Social Media', 'PPC', 'Analytics', 'Marketing'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-sm font-inter font-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Weitere Slides */}
                    <div className="px-7">
                        <a href="/leistungen/werbefotografie-film" className="block w-full rounded-lg p-6 bg-lightblue space-y-3 hover:bg-grey">
                            <div className="flex items-center justify-between">
                                <h3 className="font-inter font-normal text-2xl leading-6">
                                    Werbefotografie<br />Werbefilm
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        src="/mini-icon/icon-03.png"
                                        alt="Logo Baeumer"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>

                            <p className="font-inter font-light text-sm text-dunkel">
                                Wir verleihen Ihrer Werbung Flügel mit Fotos und Filmaufnahmen, die begeistern.
                            </p>

                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['Fotografie', 'Werbefilm', 'Bildbearbeitung', 'Produktfotografie', 'Shooting'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-sm font-inter font-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Weitere Slides */}
                    <div className="px-7">
                        <a href="/leistungen/content-management" className="block w-full rounded-lg p-6 bg-lightblue space-y-3 hover:bg-grey">
                            <div className="flex items-center justify-between">
                                <h3 className="font-inter font-normal text-2xl leading-6">
                                    Content<br />Management
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        src="/mini-icon/icon-04.png"
                                        alt="Logo Baeumer"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>

                            <p className="font-inter font-light  text-sm text-dunkel">
                                Von der Planung bis zur Optimierung setzen wir Maßstäbe für Sie und sorgen für perfekten Content.
                            </p>

                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['CMS', 'Content', 'Publishing', 'WordPress', 'Typo3', 'hubspot'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-sm font-inter font-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Weitere Slides */}
                    <div className="px-7">
                        <a href="/leistungen/ki-chatbots" className="block w-full rounded-lg p-6 bg-lightblue space-y-3 hover:bg-grey">
                            <div className="flex items-center justify-between">
                                <h3 className="font-inter font-normal text-2xl leading-6">
                                    KI-Chatbots<br />Automation
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <Image
                                        src="/mini-icon/icon-02.png"
                                        alt="Logo Baeumer"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>

                            <p className="font-inter font-light text-sm text-dunkel">
                                Kommunikation neu gedacht mit individuell trainierten KI-Chatbots für Ihre Marke.
                            </p>

                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['Chatbot', 'KI', 'Automation', 'Natural Language', 'Support', 'AI'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-sm font-inter font-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                </Slider>
            </div>
        </div>
    );
}
