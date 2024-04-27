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

  const className = pathname?.startsWith(href) ? "text-slate-900" : "text-slate-100"

  return (
    <Link
      href={href}
      className={"transition-colors hover:text-slate-60 py-1 " + className}
      onClick={onClick}
    >
      {label}
    </Link >
  );
}