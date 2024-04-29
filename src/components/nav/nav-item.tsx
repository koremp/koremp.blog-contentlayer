"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const className = pathname?.startsWith(href) ? "text-gray-800" : "text-gray-800/60"

  return (
    <Link
      href={href}
      onClick={onClick}
      className={'text-2xl hover:text-gray-800/80' + ' ' + className}
    >
      {label}
    </Link >
  );
}