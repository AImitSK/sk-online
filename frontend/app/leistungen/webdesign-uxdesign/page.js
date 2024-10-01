import Image from "next/image";
import Link from "next/link";
import SimpleSlider from "@/app/components/Logoslider";
import CTABox from "@/app/components/CTABox";
import WebdsignListe from "@/app/components/WebdsignListe";
import { BoltIcon, MagnifyingGlassIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function Page() {

  // Features list for the performance section with icons and descriptions
  const features = [
    {
      name: 'Performance and Load Speed',
      description: 'Fast load times and optimal performance for a smooth user experience.',
      icon: BoltIcon,
    },
    {
      name: 'Content and Search Engine Optimization (SEO)',
      description: 'Meaningful content and SEO optimization to ensure your website is both engaging and visible in search engines.',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Design and User Experience',
      description: 'Attractive, responsive design optimized for conversion and providing intuitive user experience.',
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <div>
      {/* Hero section with image and text */}
      <div className="flex flex-col md:flex-row justify-between items-center h-auto lg:h-[640px] max-w-screen-2xl mx-auto px-8 space-y-8 mt-6 mb-28">
        {/* Image on the right for desktop, left for mobile */}
        <div className="w-full md:w-1/2 flex justify-center h-auto lg:h-full items-center order-1 md:order-2 px-8 mt-5">
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
        {/* Text content on the left for desktop, right for mobile */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-bricolage font-medium text-[2.5rem] text-dunkel md:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] md:leading-[0.9]">
            Webdesign<br />
            UX-Design
          </h1>
          <p className="font-inter font-light text-dunkel text-base md:text-2xl leading-relaxed">
            Every interaction an experience. We develop websites that intuitively captivate and effortlessly guide users to their destination.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/referenzen" legacyBehavior>
              <a className="inline-block px-6 md:px-8 py-2 bg-dunkel text-white rounded-md hover:bg-white hover:text-dunkel border border-dunkel transition-all max-w-max">
                References
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* UX Design section with text and image */}
      <div className="bg-lightblue p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* UX design image */}
          <div className="flex justify-center items-center w-full h-auto px-12">
            <Image
              src="/ux-design.svg"
              alt="Ux-Design"
              layout="responsive"
              width={631}
              height={449}
              className="w-full h-auto"
            />
          </div>

          {/* UX Design description */}
          <div className="flex flex-col justify-start text-left mx-3 lg:mx-8">
            <h2 className="font-bricolage text-3xl font-normal text-dunkel sm:text-4xl my-3">
              UX Design as <br /> Key to Success
            </h2>
            <p className="font-inter font-light text-lg leading-8 text-dunkel my-3">
              Successful UX design puts the user at the center. With thoughtful navigation, clear structures, and intuitive interactions, we create digital experiences that not only inspire but also build trust.
            </p>
            <p className="font-inter font-light text-lg leading-8 text-dunkel my-3">
              Our approach combines creativity with strategy. Through user research and prototyping, we design solutions that address your needs and foster sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Web design content types section */}
      <div className="mt-12">
        <WebdsignListe />
      </div>

      {/* Performance and features section */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            {/* Performance text */}
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-inter font-semibold leading-7 text-blue">PERFORMANCE</h2>
                <p className="font-bricolage mt-2 text-3xl font-normal tracking-tight text-dunkel sm:text-4xl">
                  Web design that turns ideas into success
                </p>
                <p className="font-inter font-light mt-6 text-lg leading-8 text-dunkel">
                  Your web design should do more than look good. It should turn visitors into customers, strengthen your brand, and deliver measurable results.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 font-inter font-light leading-7 text-dunkel lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-dunkel">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Performance image */}
            <div className="p-6">
              <Image
                src="/ux.png"
                alt="Prototype"
                width={700}
                height={425}
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider section */}
      <div className="w-full -mt-6 -mb-8 flex justify-center items-center">
        <div className="max-w-screen-2xl w-full lg:px-12 px-0 flex justify-center">
          <SimpleSlider />
        </div>
      </div>

      {/* Call to Action Box */}
      <div>
        <CTABox
          title="We transform data into tangible digital success."
          text="Sounds like digital alchemy? We'll show you how we transform data, insights, or creative UX design into true digital gold."
          buttonText="Get in touch"
          bgColor="bg-lightblue"
          buttonColor="#005FAB"
          buttonTextColor="#ffffff"
        />
      </div>
    </div>
  );
}
