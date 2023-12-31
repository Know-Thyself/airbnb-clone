'use client'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Logo = () => {
	// const router = useRouter()
	return (
		<Image
			src={'/images/logo.jpg'}
			alt='logo'
			className='hidden md:block cursor-pointer'
			height={80}
			width={80}
		/>
	)
}

export default Logo
