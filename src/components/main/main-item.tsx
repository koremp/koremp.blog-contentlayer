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
    <div className="flex-col basis-5/12 bg-teal-400 rounded p-4">
      <Link className=" text-xl text-gray-800/80 hover:text-gray-800/60" href={href}>
        {label}
      </Link>
      <div className="mt-4 pl-2">
        <ul>
          {
            <li>
              <RecentLink href="" title="ex" desc="" />
            </li>
          }
        </ul>
      </div>
    </div >
  )
}