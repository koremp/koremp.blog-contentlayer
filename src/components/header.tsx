import Navigation from './nav/navigation';

export default function Header() {
  return (
    <header className="h-14 px-5 sticky top-0 z-50 w-full divide-x-0 border-x-0 border-y-0 border-b-4 border-gray-400 flex justify-between items-center bg-cyan-200">
      <Navigation />
    </header>
  )
}