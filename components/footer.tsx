import { ThemeToggle } from './theme-toggle'

export async function Footer () {
  return (
    <div className='w-full h-12 flex items-center justify-between gap-3'>
      <img
        className='h-5'
        src='/icon.svg'
        alt='Icon Logo'
      />
      <div className='flex items-center gap-2'>
        <div className='w-5 h-5 bg-primary' />
        <div className='w-5 h-5 bg-secondary' />
        <div className='w-5 h-5 bg-muted' />
        <div className='w-5 h-5 bg-foreground' />
        <div className='w-5 h-5 bg-background border' />
        <ThemeToggle />
      </div>
    </div>
  )
}
