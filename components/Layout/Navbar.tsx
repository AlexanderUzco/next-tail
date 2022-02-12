import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='mr-4'>
      <menu className=''>
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
