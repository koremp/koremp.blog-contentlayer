import MainItem from './main-item';

const items = [
  { href: "/posts", label: "Recent Posts" },
  { href: "/wiki", label: "Recent Wiki" },
  { href: "/diary", label: "Recent Diary" },
  { href: "/posts", label: "Recent Posts" }
]

export default function Main() {
  return (
    <main className="w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {
          items.map(({ href, label }) => {
            return (
              <MainItem key={href} href={href} label={label} />
            )
          })
        }
      </div>
    </main>
  )
}