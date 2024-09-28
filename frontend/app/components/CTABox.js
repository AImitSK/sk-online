import Link from 'next/link';

export default function CTABox({ title, text, buttonText, bgColor }) {
  return (
    <div className={`flex flex-col justify-center items-center py-12 px-12 sm:px-12 md:px-12 lg:px-60 xl:px-80 2xl:px-80 text-center ${bgColor}`}>
      {/* Titel */}
      <h2 className="font-bricolage font-light text-3xl lg:text-5xl mb-4 text-dunkel">
        {title}
      </h2>

      {/* Text */}
      <p className="font-inter text-xl mb-8 font-light text-dunkel">
        {text}
      </p>

      {/* Button */}
      <Link href="/kontakt" legacyBehavior>
        <a className="inline-block px-6 py-3 bg-transparent text-dunkel rounded-md hover:bg-dunkel hover:text-lightblue border border-dunkel transition-colors">
          {buttonText}
        </a>
      </Link>
    </div>
  );
}
