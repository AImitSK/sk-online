'use client'; // Stellt sicher, dass die Komponente als Client-Komponente funktioniert

import Link from 'next/link';

export default function CTABox({ title, text, buttonText, bgColor, buttonColor, buttonTextColor }) {
  return (
    <div className={`flex flex-col justify-center items-center py-12 px-12 sm:px-12 md:px-12 lg:px-60 xl:px-80 2xl:px-80 text-center ${bgColor}`}>
      {/* Titel */}
      <h2 className="font-bricolage font-normal text-3xl lg:text-5xl mb-4 text-dunkel">
        {title}
      </h2>

      {/* Text */}
      <p className="font-inter text-xl mb-8 font-light text-dunkel">
        {text}
      </p>

      {/* Button */}
      <Link href="/kontakt" legacyBehavior>
        <a
          style={{ 
            backgroundColor: buttonColor, 
            color: buttonTextColor,
            transition: 'background-color 0.3s ease, color 0.3s ease' 
          }}
          className="inline-block px-6 py-3 rounded-md border border-dunkel"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#44474C';
            e.currentTarget.style.color = '#F5F5F5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = buttonColor;
            e.currentTarget.style.color = buttonTextColor;
          }}
        >
          {buttonText}
        </a>
      </Link>
    </div>
  );
}
