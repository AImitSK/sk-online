"use client";
import Link from 'next/link';
import Image from "next/image";

export default function Page() {
  return (
    <div className='container h-[800px] flex space-x-[25px]'>
      <div className='flex flex-1 items-center'>
        <h1 className='font-bricolage text-dunkel text-4xl'>Content Management</h1>
      </div>
      <div className='flex flex-1 items-center justify-center bg-grey'>
      <Image
              src="/logo-sk-online-marketing.svg"
              alt="SK Online Marketing Logo"
              width={137} 
              height={44}              
              className="cursor-pointer transition-transform duration-300"
            />
      </div>
    </div>
  );
}
