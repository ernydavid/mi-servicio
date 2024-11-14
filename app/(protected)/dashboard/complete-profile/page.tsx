type SearchParams = Promise<{
    callbackUrl?: string
}>

export default async function CompleteProfilePage (props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const { callbackUrl } = searchParams

  return (
    <div className='w-full flex flex-col gap-6 max-w-5xl mx-auto'>
      <p>Complete profile</p>
      {callbackUrl}
    </div>
  )
}
