import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Chat from '@/components/Chat'
import Header from '@/components/Header'

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
				className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-w-80 min-h-screen bg-[#0D1B2A] text-[#E0E6ED]`}>
				<Header />
				<main className="flex-grow flex items-center justify-center">
					<Chat />
				</main>
				<footer className="flex justify-center mb-5 font-sans text-sm">
					<p>
						{' '}
						⭑ Created by <a href="https://github.com/owldaylong">@𝗈𝗐𝗅𝖽𝖺𝗒𝗅𝗈𝗇𝗀 ⭑</a>
					</p>
				</footer>
			</body>
		</html>
	)
}
