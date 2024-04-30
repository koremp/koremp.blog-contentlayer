import Link from 'next/link';

export default function RecentLink({
  href,
  title,
  desc,
}: {
  href: string,
  title: string,
  desc: string,
}) {
  return (
    <Link
      href={href}
      className=""
    >
      <h3 className="">{title}</h3>
      <span className="">{desc}</span>
    </Link>
  )
}