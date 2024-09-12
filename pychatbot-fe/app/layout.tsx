import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Chat from '@/components/Chat'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Aesthetic Captions (˶˃ ᵕ ˂˶) ᯓ★',
	description: 'Make your social media caption aesthetically pleasing',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-w-80 min-h-screen bg-[#000000] text-white`}>
				<Chat />
			</body>
		</html>
	)
}
