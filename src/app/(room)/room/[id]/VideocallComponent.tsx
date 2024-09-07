'use client'

import { generateKitToken } from '@/utils/zego'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import React from 'react'

const VideoCallComponent = ({roomID,name} : {roomID: string, name: string}) => {
  
  
  const token = generateKitToken(roomID, name)
  const zp = ZegoUIKitPrebuilt.create(token)

  const joinMeeting = (element:HTMLDivElement) => {
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      }
    })
  }

  return (
    <div ref={joinMeeting} className="h-screen"
    ></div>
  )
}

export default VideoCallComponent