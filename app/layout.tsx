import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import Modal from './components/modals/modal'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
	title: 'AirBnB',
	description: 'AirBnB clone',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`
            ${inter.variable} 
            ${nunito.variable}
            `}
		>
            <body>
                <Modal actionLabel='Submit' title='Hello World' isOpen />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
