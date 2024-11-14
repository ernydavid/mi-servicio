import { auth } from '@/auth'
import { ThemeToggle } from './theme-toggle'

export async function Footer () {
  const session = await auth()
  return (
    <div className='w-full h-12 flex items-center justify-between gap-3'>
      <img
        className='h-5'
        src='/icon.svg'
        alt='Icon Logo'
      />
      <div className='flex items-center gap-2'>
        <p className='text-foreground'>IsSession: {JSON.stringify(!!session?.user, null, 1)}</p>
        <p className='text-foreground'>IsOAtuh: {JSON.stringify(!!session?.user.isOAuth, null, 1)}</p>
        <ThemeToggle />
      </div>
    </div>
  )
}
