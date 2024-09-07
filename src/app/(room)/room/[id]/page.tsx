import React from 'react'
import VideoCallComponent from './VideocallComponent'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async ({params} : {params: {id: string}}) => {
  
  const session = await auth();
  if (!session?.user) {
    return <div>unauthorized</div>
  }  

  return (
    <div >
      <VideoCallComponent roomID={params.id} name={session?.user?.name || "user"} />
    </div>
  )
}

export default page