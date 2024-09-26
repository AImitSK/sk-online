import Link from 'next/link';

export default function CTABox({ title, text, buttonText, bgColor }) {
  return (
    <div className={`flex flex-col justify-center items-center py-12 px-3 md:px-60 text-center ${bgColor}`}>
      {/* Titel */}
      <h2 className="font-bricolage font-medium text-[1.5rem] md:text-[2.5rem] leading-[0.9] md:leading-[0.9] mb-4 text-dunkel">
        {title}
      </h2>

      {/* Text */}
      <p className="text-xl mb-8 text-green">
        {text}
      </p>

      {/* Button */}
      <Link href="/kontakt" legacyBehavior>
        <a className="inline-block px-6 md:px-8 py-2 bg-dunkel text-grey rounded-md hover:bg-transparent hover:text-dunkel border border-dunkel transition-all max-w-max">
          {buttonText}
        </a>
      </Link>
    </div>
  );
}
