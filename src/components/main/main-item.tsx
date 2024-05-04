import Link from 'next/link'
import RecentLink from './recent-link'

export default function MainItem({
  href,
  label,
}: {
  href: string,
  label: string
}) {
  return (
    <Link
      className="flex-wrap basis-2/5 text-xl text-gray-800/80 hover:text-gray-800/60"
      href={href}
    >
      <Link href="">{label}</Link>
      <div>
        {
          <RecentLink href="" title="" desc="" />
        }
      </div>
    </Link>
  )
}