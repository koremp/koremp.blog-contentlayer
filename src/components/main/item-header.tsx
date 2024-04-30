import Link from 'next/link';

export default function ItemHeader({
  href,
  label
}: {
  href: string,
  label: string
}
) {
  return (
    <div className="">
      <Link
        href={href}
        className="text-xl text-gray-800/60 hover:text-gray-800/80 "
      >
        {label}
      </Link>
    </div >
  )
}