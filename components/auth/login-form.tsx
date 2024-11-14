'use client'

import { GoogleIcon } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { ActionState, login } from '@/lib/auth'
import { useActionState } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  callbackUrl?: string
}

export function LoginForm ({ callbackUrl }: Props) {
  const [state, action] = useActionState<ActionState, FormData>(login, { error: '' })

  return (
    <div className='w-full mx-auto space-y-4'>
      <h3>Empieza Ahora</h3>
      <form
        className='w-full grid gap-3'
        action={action}
      >
        <input
          name='callbackUrl'
          value={callbackUrl}
          type='hidden'
        />
        <input
          name='provider'
          value='resend'
          type='hidden'
        />
        <Input
          className='w-full'
          name='email'
          placeholder='Ingresa tu email'
          type='text'
        />
        <Button>
          Iniciar con enlace mágico
        </Button>
        {state.error && (
          <p>{state.error}</p>
        )}
      </form>
      <p className='text-center text-sm'>Ó:</p>
      <form
        className='w-full'
        action={action}
      >
        <input
          name='provider'
          value='google'
          type='hidden'
        />
        <input
          name='callbackUrl'
          value={callbackUrl}
          type='hidden'
        />
        <Button
          className='w-full secondary-button flex items-center justify-center gap-2'
        >
          <GoogleIcon className='w-4 h-4' />
          Continuar con Google
        </Button>
      </form>
    </div>
  )
}
