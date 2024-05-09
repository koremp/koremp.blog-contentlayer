"use client"

import { NavItem } from './nav-item';

export const navs = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/wiki",
    label: "Wiki",
  },
  {
    href: "/rewind",
    label: "Rewind",
  },
  {
    href: "/diary",
    label: "Diary",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-auto text-sm font-medium m-auto">
      {
        navs.map(({ href, label }) => (
          <NavItem href={href} label={label} key={label} />
        ))
      }
    </nav>
  );
}