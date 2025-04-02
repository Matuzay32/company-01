'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

export type FooterMenuItem = {
  label: string;
  href: string;
};

type FooterDropdownProps = {
  label: string;
  menuKey: string;
  items: FooterMenuItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  closeDropdowns: () => void;
};

export const FooterDropdownMenuItem = ({
  label,
  menuKey,
  items,
  activeDropdown,
  toggleDropdown,
  closeDropdowns,
}: FooterDropdownProps) => {
  return (
    <div className="relative group">
      <button
        className="w-full text-left flex items-center justify-between hover:text-cyan-300 transition-colors"
        onClick={() => toggleDropdown(menuKey)}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === menuKey ? 'rotate-180' : ''
          }`}
        />
      </button>
      {activeDropdown === menuKey && (
        <div className="mt-2 space-y-2 pl-4 border-l border-gray-700">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block text-gray-300 hover:text-cyan-300 transition-colors"
              onClick={closeDropdowns}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
