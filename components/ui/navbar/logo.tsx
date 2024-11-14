import Link from 'next/link'

export function Logo () {
  return (
    <Link
      href='/'
      className='flex items-center gap-1'
    >
      <img
        className='h-5'
        src='/assets/logo-dark.svg'
        alt='Logo'
      />
    </Link>
  )
}
