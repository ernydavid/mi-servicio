import { Logo } from '@/components/ui/navbar/logo'
import { NavMenu } from '@/components/ui/navbar/nav-menu'

export async function Navbar () {
  return (
    <header className='w-full bg-secondary text-secondary-foreground fixed top-0 left-0'>
      <div className='w-full h-12 flex justify-between items-center px-4'>
        <Logo />
        <NavMenu />
      </div>
    </header>
  )
}
