import {  ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

export const generateKitToken = (roomID:string, name:string) => {
    
    return  ZegoUIKitPrebuilt.generateKitTokenForTest(
        Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID),
        process.env.NEXT_PUBLIC_ZEGO_APP_SECRET || '',
        roomID,
        Date.now().toString(),
        name
    );
}