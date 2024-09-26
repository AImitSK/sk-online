import Image from "next/image";

export default function Footer() {
    return (
      <footer>
    <div className='container h-[500px] flex space-x-[25px] justify-center  bg-grey'>
      <div className='flex flex-1 items-center'>
        <h1 className='font-bricolage text-dunkel text-4xl'></h1>
      </div>
      <div className='flex flex-1 items-center justify-center'>
      <Image
              src="/logo-sk-online-marketing.svg"
              alt="SK Online Marketing Logo"
              width={137} 
              height={44}              
              className="cursor-pointer transition-transform duration-300"
            />
      </div>
    </div>

      </footer>
    );
  }
  