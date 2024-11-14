import { logout } from '@/lib/auth'
import { Button } from '@/components/ui/button'

export function SignOutButton () {
  return (
    <form action={logout}>
      <Button
        variant='outline'
        type='submit'
      >
        Log Out
      </Button>
    </form>
  )
}
