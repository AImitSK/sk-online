'use client';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Keine Breadcrumbs auf der Root-Seite anzeigen
  if (pathname === '/') {
    return <div style={{ height: '50px' }}></div>; // Platzhalter mit fixer Höhe
  }
  

  const pathArray = pathname.split('/').filter((path) => path);

  // Seitenobjekte für Breadcrumbs erstellen
  const pages = pathArray.map((path, index) => {
    const href = '/' + pathArray.slice(0, index + 1).join('/');
    const isLast = index === pathArray.length - 1;

    return {
      name: path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      href,
      current: isLast,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex justify-end mr-6 my-3">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-dunkel hover:text-darkblue">
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-dunkel" />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className={`ml-4 text-sm font-inter font-light ${page.current ? 'text-dunkel' : 'text-dunkel hover:text-darkblue'}`}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
