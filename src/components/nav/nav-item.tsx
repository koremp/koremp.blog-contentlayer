"use client"

import classNames from 'classnames';
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


  return (
    <Link
      href={href}
      onClick={onClick}
      className='text-2xl hover:text-gray-800/80'
    >
      {label}
    </Link >
  );
}