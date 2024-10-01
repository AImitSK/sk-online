"use client";
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  BriefcaseIcon,
  CursorArrowRaysIcon,
  FolderIcon,
} from '@heroicons/react/20/solid';

// Content Array
const siteTypes = [
  {
    id: 1,
    name: 'Unternehmensseiten',
    icon: BuildingOfficeIcon,
    text: 'Professionelle Webseiten, die Informationen über ein Unternehmen, seine Dienstleistungen und Produkte präsentieren.',
  },
  {
    id: 2,
    name: 'Magazin-Webseiten',
    icon: NewspaperIcon,
    text: 'Online-Plattformen, die aktuelle Artikel, Nachrichten und redaktionelle Inhalte in einem ansprechenden Layout präsentieren.',
  },
  {
    id: 3,
    name: 'E-Commerce-Webseiten',
    icon: ShoppingCartIcon,
    text: 'Webseiten, die den Verkauf von Produkten oder Dienstleistungen ermöglichen und eine nahtlose Online-Shopping-Erfahrung bieten.',
  },
  {
    id: 4,
    name: 'Blogs',
    icon: PencilSquareIcon,
    text: 'Webseiten, die regelmäßig aktualisierte Beiträge zu bestimmten Themen veröffentlichen und Lesern informative oder unterhaltsame Inhalte bieten.',
  },
  {
    id: 5,
    name: 'Portfolio-Websites',
    icon: BriefcaseIcon,
    text: 'Webseiten, auf denen Kreative, wie Designer oder Fotografen, ihre Arbeiten und Projekte präsentieren und potenzielle Kunden ansprechen können.',
  },
  {
    id: 6,
    name: 'Landingpages',
    icon: CursorArrowRaysIcon,
    text: 'Einzelseiten, die speziell für Marketingkampagnen erstellt werden, um Besucher zu einer bestimmten Aktion, wie dem Ausfüllen eines Formulars oder dem Kauf eines Produkts, zu verleiten.',
  },
  {
    id: 7,
    name: 'Verzeichnisse',
    icon: FolderIcon,
    text: 'Webseiten, die eine Sammlung von Informationen oder Dienstleistungen in einer bestimmten Kategorie oder Branche auflisten und Nutzern bei der Suche und Navigation helfen.',
  },
];

export default function WebdesignListe() {
  return (
    <div className="relative p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteTypes.map((siteType) => (
          <div
            key={siteType.id}
            className="relative min-w-[350px] sm:min-w-0 rounded-xl border border-grey bg-white mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            style={{ overflow: 'hidden' }}
          >
            <div className="flex items-center gap-x-4 border-b border-grey bg-grey p-6">
              <div className="flex-none rounded-lg bg-gradient-to-br from-blue to-darkblue p-2">
                <siteType.icon aria-hidden="true" className="h-8 w-8 text-white" />
              </div>
              <div className="text-lg font-bricolage leading-6 text-dunkel">{siteType.name}</div>
            </div>
            <div className="px-6 py-4 text-sm font-inter font-light leading-6 text-dunkel">
              {siteType.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
