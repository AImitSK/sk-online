"use client";
import {
  BuildingOfficeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  BriefcaseIcon,
  CursorArrowRaysIcon,
  FolderIcon,
} from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';

// Content Array
const siteTypes = [
  {
    id: 1,
    name: 'Business Websites',
    icon: BuildingOfficeIcon,
    text: 'Professional websites that present information about a company, its services, and products.',
  },
  {
    id: 2,
    name: 'Magazine Websites',
    icon: NewspaperIcon,
    text: 'Online platforms that showcase current articles, news, and editorial content in an appealing layout.',
  },
  {
    id: 3,
    name: 'E-Commerce Websites',
    icon: ShoppingCartIcon,
    text: 'Websites that enable the sale of products or services and offer a seamless online shopping experience.',
  },
  {
    id: 4,
    name: 'Blogs',
    icon: PencilSquareIcon,
    text: 'Websites that regularly publish updates on specific topics, offering readers informative or entertaining content.',
  },
  {
    id: 5,
    name: 'Portfolio Websites',
    icon: BriefcaseIcon,
    text: 'Websites for creatives, like designers or photographers, to showcase their work and attract potential clients.',
  },
  {
    id: 6,
    name: 'Landing Pages',
    icon: CursorArrowRaysIcon,
    text: 'Single pages created specifically for marketing campaigns to drive visitors to perform a specific action, like filling out a form or making a purchase.',
  },
  {
    id: 7,
    name: 'Directories',
    icon: FolderIcon,
    text: 'Websites that provide a collection of information or services in a specific category or industry, helping users search and navigate.',
  },
];

// A scrollable list of different website types with drag-to-scroll functionality
export default function WebdsignListe() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Handle dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative h-80">
      <div
        className="overflow-x-auto py-4 scrollbar-hide hover:scrollbar-visible"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <ul role="list" className="flex space-x-6 px-4">
          {siteTypes.map((siteType) => (
            <li key={siteType.id} className="flex-none w-80 overflow-hidden rounded-xl border border-grey">
              <div className="flex items-center gap-x-4 border-b border-grey bg-grey p-6">
                <div className="flex-none rounded-lg bg-gradient-to-br from-blue to-darkblue p-2">
                  <siteType.icon aria-hidden="true" className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-bricolage leading-6 text-dunkel">{siteType.name}</div>
              </div>
              <div className="px-6 py-4 text-sm font-inter font-light leading-6 text-dunkel">
                {siteType.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
