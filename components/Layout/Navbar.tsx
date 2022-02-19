import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='mr-4 w-28'>
      <menu className='w-full flex justify-between'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
