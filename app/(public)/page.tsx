import { auth } from '@/auth'
import { FormError } from '@/components/auth/form-error'
import { LoginForm } from '@/components/auth/login-form'
import { getErrorMessage, SignInPageErrorParam } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type SearchParams = Promise<{
  callbackUrl?: string
  error?: SignInPageErrorParam
}>

export default async function Home ({ searchParams }: {
  searchParams: SearchParams
}) {
  const { callbackUrl, error } = await searchParams
  const session = await auth()

  return (
    <div className='w-full max-w-5xl mx-auto min-h-[calc(100dvh-96px)] flex flex-col justify-center md:flex-row gap-6 text-center md:text-left md:items-center'>
      <div className='h-full flex flex-col justify-center md:basis-3/6'>
        <div>
          <Image
            width={360}
            height={360}
            className='w-full max-w-sm mx-auto md:mx-0 dark-image'
            src='/assets/hero-dark.svg'
            priority
            alt='Hero Image Dark'
          />
          <Image
            width={360}
            height={360}
            priority
            className='w-full max-w-sm mx-auto md:mx-0 hidden md:block dark:hidden'
            src='/assets/hero-light.svg'
            alt='Hero Image'
          />
        </div>
        <div className='w-full space-y-3'>
          <h1 className='font-medium tracking-tighter'>
            Reporte  completo de tu servicio
          </h1>
          <p
            className='text-muted w-10/12 text-center md:text-left mx-auto md:mx-0'
          >
            Lleva un control de tus horas, publicaciones,
            revisitas y estudios con esta aplicación web
            sencilla e intuitiva.
          </p>
        </div>
      </div>
      <div className='w-full max-w-md flex flex-col gap-6 md:basis-3/6 mx-auto'>
        {!session
          ? (
            <LoginForm callbackUrl={callbackUrl} />
            )
          : (
            <div className='mt-5 flex flex-col items-center justify-center gap-4'>
              <h3>Bienvenido {session.user.name}!</h3>
              <Link
                href='/dashboard'
                className='mx-auto button-primary-link'
              >
                Entrar Ahora
              </Link>
            </div>
            )}
        {error && (
          <FormError error={getErrorMessage(error)} />
        )}
      </div>

    </div>
  )
}
