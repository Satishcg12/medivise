'use client'

import { generateKitToken } from '@/utils/zego'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import React from 'react'

const page = ({params} : {params: {id: string}}) => {
  
  
  const token = generateKitToken(params.id,
    'user'
  )
  const zp = ZegoUIKitPrebuilt.create(token)

  const joinMeeting = (element:HTMLDivElement) => {
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference
      }
    })
  }

  return (
    <div ref={joinMeeting} className="h-screen"
    >page</div>
  )
}

export default page