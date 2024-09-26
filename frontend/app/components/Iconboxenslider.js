"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';

export default function IconBoxSlider() {
    const sliderRef = useRef(null); // Slider-Referenz erstellen

    var settings = {
        dots: true,
        infinite: false, // Infinite Loop deaktivieren, um Duplikate zu vermeiden
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        centerPadding: '40px', // Definiert den Abstand zwischen den Kacheln
        arrows: false, // Standardpfeile deaktivieren, um eigene zu verwenden
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
        <div className="w-full flex justify-center mb-11">
            <div className="w-full max-w-screen-2xl px-6"> {/* Max-width gesetzt und Padding hinzugefügt */}
                <Slider
                    {...settings}
                    ref={sliderRef}
                    className="flex justify-center"
                >

                    {/* Slide 1 */}
                    <div className="px-4">
                        <a href="/leistungen/webdesign-uxdesign" className="m-2 group block w-full rounded-lg p-6 bg-white ring-1 ring-dunkel/5 space-y-3 hover:bg-darkblue hover:ring-blue">
                            <div className="items-center mb-3">
                                <Image
                                    src="/mini-icon/icon-01.png"
                                    alt="Logo Baeumer"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="font-inter font-semibold text-lg leading-5 group-hover:text-white">
                                Webdesign / UX-Design
                            </h3>
                            <hr />
                            <p className="font-inter text-sm text-dunkel group-hover:text-white">
                                Modernes Webdesign und intuitive UX für unvergessliche Nutzererlebnisse perfekt umgesetzt.
                            </p>
                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-2 py-0.5 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Slide 2 */}
                    <div className="px-4">
                        <a href="/leistungen/webdesign-uxdesign" className="m-2 group block w-full rounded-lg p-6 bg-white ring-1 ring-dunkel/5 space-y-3 hover:bg-darkblue hover:ring-blue">
                            <div className="items-center mb-3">
                                <Image
                                    src="/mini-icon/icon-02.png"
                                    alt="Logo Baeumer"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="font-inter font-semibold text-lg leading-5 group-hover:text-white">
                                Digital Marketing
                            </h3>
                            <hr />
                            <p className="font-inter text-sm text-dunkel group-hover:text-white">
                                Wir entwickeln Strategien, die Ihre Marke in den Mittelpunkt rücken und sichtbare Ergebnisse erzielen.
                            </p>
                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-2 py-0.5 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Slide 3 */}
                    <div className="px-4">
                        <a href="/leistungen/webdesign-uxdesign" className="m-2 group block w-full rounded-lg p-6 bg-white ring-1 ring-dunkel/5 space-y-3 hover:bg-darkblue hover:ring-blue">
                            <div className="items-center mb-3">
                                <Image
                                    src="/mini-icon/icon-03.png"
                                    alt="Logo Baeumer"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="font-inter font-semibold text-lg leading-5 group-hover:text-white">
                                Werbefotografie
                            </h3>
                            <hr />
                            <p className="font-inter text-sm text-dunkel group-hover:text-white">
                                Wir verleihen Ihrer Werbung Flügel mit Fotos und Filmaufnahmen, die begeistern.
                            </p>
                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-2 py-0.5 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Slide 4 */}
                    <div className="px-4">
                        <a href="/leistungen/webdesign-uxdesign" className="m-2 group block w-full rounded-lg p-6 bg-white ring-1 ring-dunkel/5 space-y-3 hover:bg-darkblue hover:ring-blue">
                            <div className="items-center mb-3">
                                <Image
                                    src="/mini-icon/icon-04.png"
                                    alt="Logo Baeumer"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="font-inter font-semibold text-lg leading-5 group-hover:text-white">
                                Content Management
                            </h3>
                            <hr />
                            <p className="font-inter text-sm text-dunkel group-hover:text-white">
                                Von der Planung bis zur Optimierung setzen wir Maßstäbe für Sie und sorgen für perfekten Content.
                            </p>
                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-2 py-0.5 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </div>

                    {/* Slide 5 */}
                    <div className="px-4">
                        <a href="/leistungen/webdesign-uxdesign" className="m-2 group block w-full rounded-lg p-6 bg-white ring-1 ring-dunkel/5 space-y-3 hover:bg-darkblue hover:ring-blue">
                            <div className="items-center mb-3">
                                <Image
                                    src="/mini-icon/icon-02.png"
                                    alt="Logo Baeumer"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="font-inter font-semibold text-lg leading-5 group-hover:text-white">
                                KI-Chatbots
                            </h3>
                            <hr />
                            <p className="font-inter text-sm text-dunkel group-hover:text-white">
                                Kommunikation neu gedacht mit individuell trainierten KI-Chatbots für Ihre Marke.
                            </p>
                            <div className="flex">
                                <ul className="flex flex-wrap">
                                    {['UX', 'UI', 'Webdesign', 'WordPress', 'Typo3', 'React'].map((item, index) => (
                                        <li key={index} className="mr-1 mb-1 px-2 py-0.5 bg-sky-50 rounded-full border border-sky-100 text-darkblue text-xs">
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
