import React from 'react'
import VideoCallComponent from './VideocallComponent'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async ({params} : {params: {id: string}}) => {
  
  const session = await auth();
  if (!session?.user) {
    return <div>unauthorized</div>
  }  
  const {name}=session.user
  return (
    <div >
      <VideoCallComponent roomID={params.id} name={name || 'user'}/>
    </div>
  )
}

export default page