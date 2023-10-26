'use client'

import Image from "next/image";

const Avatar = () => {
  return <Image src={'/images/placeholder.png'} height={30} width={30} alt="Avatar" className="rounded-full"/>
}

export default Avatar;