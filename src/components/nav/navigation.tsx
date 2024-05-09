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
    <nav className="flex justify-center items-center space-x-6 text-sm font-medium gap-2 m-8">
      {
        navs.map(({ href, label }) => (
          <NavItem href={href} label={label} key={label} />
        ))
      }
    </nav>
  );
}