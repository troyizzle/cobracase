'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const configurationId = localStorage.getItem('configurationId')
    if (configurationId) setConfigId(configurationId)
  }, [])

  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-500' />
        <h3 className='font-semibold text-xl'>Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default Page
