'use client'

import { useState } from 'react'
import ChatTextArea from './ChatTextArea'

type GroqAgent = 'user' | 'system'

interface Messages {
	role: GroqAgent
	content: string
}

const Chat: React.FC = () => {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)

	const sendMessage = async (message: string) => {
		setLoading(true)

		try {
			const payload = {
				input: message,
			}

			const response = await fetch(`http://127.0.0.1:5000/chat`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
			const res = await response.json()
			const lastMessage = res.response

			setInput(lastMessage)
		} catch (error) {
			console.error('THIS IS THE ERROR : ', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex flex-col items-center justify-center w-full gap-2 bg-[#0D1B2A] font-sans">
			<ChatTextArea input={input} setInput={setInput} />
			<div className="flex flex-row gap-2">
				<button
					type="submit"
					className="px-4 rounded-well rounded border-[1px] border-zinc-100 bg-[#1B263B] hover:bg-[#415A77] text-[#E0E6ED]"
					onClick={() => {
						console.log(input)
						sendMessage(input)
					}}
					disabled={loading}>
					{loading ? 'Crafting...' : 'Send'}
				</button>
				<button
					type="button"
					className="px-4 rounded-well rounded border-[1px] border-zinc-100 bg-[#C74B4F] hover:bg-[#D76D6D] text-[#E0E6ED]"
					onClick={() => {
						setInput('')
					}}>
					Clear
				</button>
			</div>
		</div>
	)
}

export default Chat
