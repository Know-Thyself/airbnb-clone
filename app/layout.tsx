import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const nunito = Nunito({subsets: ['latin'], variable: '--font-nunito'})

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
		<html lang='en' className={`${inter.variable} ${nunito.variable}`}>
			<body>{children}</body>
		</html>
	)
}
