import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { MenuItem } from './MobileDropdownMenuItem';
import Abstract from '@/components/3d/Abstract';
import CustomSection from '../Others/CustomSection';

export type CardItem = {
  title: string;
  description: string;
  // href: string;
  icon: React.ReactNode;
};

// Componente genérico para el dropdown en escritorio
type DesktopDropdownProps = {
  label: string;
  menuKey: string;
  items: MenuItem[];
  cards?: CardItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  closeDropdowns: () => void;
};

// Componente para renderizar la tarjeta (card) de cada menú
const MenuCard = ({ card }: { card: CardItem }) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-md transition-colors">
      <div>
        <h3 className="font-medium text-white">{card.title}</h3>
        <p className="text-sm text-gray-400">{card.description}</p>
      </div>
    </div>
  );
};

export const DesktopDropdownMenuItem = ({
  label,
  menuKey,
  items,
  cards,
  activeDropdown,
  toggleDropdown,
  closeDropdowns,
}: DesktopDropdownProps) => {
  return (
    <div className="relative group" data-dropdown>
      <button
        className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
        onClick={() => toggleDropdown(menuKey)}
        onMouseEnter={() => toggleDropdown(menuKey)}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === menuKey ? 'rotate-180' : ''
          }`}
        />
      </button>
      {activeDropdown === menuKey && (
        <div
          className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
          onMouseLeave={closeDropdowns}
        >
          <div className="flex">
            <div className="w-1/2 py-4 px-4 border-r border-gray-600/50">
              <div className="space-y-1">
                {items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={closeDropdowns}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {cards && (
              <div className="w-1/2 py-4 px-4 space-y-2">
                {cards.map((card, idx) => (
                  <MenuCard key={idx} card={card} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
