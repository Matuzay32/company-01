import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Componente genérico para el dropdown en móvil
export type MenuItem = {
  label: string;
  href: string;
};

type MobileDropdownProps = {
  label: string;
  menuKey: string;
  items: MenuItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  closeMobileMenu: () => void;
};

export const MobileDropdownMenuItem = ({
  label,
  menuKey,
  items,
  activeDropdown,
  toggleDropdown,
  closeMobileMenu,
}: MobileDropdownProps) => {
  return (
    <div>
      <button
        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
        onClick={(e) => {
          toggleDropdown(menuKey);
        }}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === menuKey ? "rotate-180" : ""
          }`}
        />
      </button>
      {activeDropdown === menuKey && (
        <div className="pl-4 pr-2 py-2 space-y-1">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
