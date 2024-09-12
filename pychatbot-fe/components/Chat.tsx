'use client'

import { useState } from 'react'
import ChatTextArea from './ChatTextArea'

type GroqAgent = 'user' | 'system'

interface Messages {
	role: GroqAgent
	content: string
}

const initialMessage: Messages[] = [
	{
		role: 'system',
		content:
			"Hello, I'm a social media specialist who's ready to help you to get you your best caption!",
	},
]

const Chat: React.FC = () => {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)

	const sendMessage = async (message: string) => {
		setLoading(true)

		try {
			let payload = {
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
		<div className="flex flex-col bg-[#000000] items-center justify-center w-full gap-2">
			<ChatTextArea input={input} setInput={setInput} />
			<div className="flex flex-row gap-2">
				<button
					type="submit"
					className="px-4 rounded-well rounded border-[1px] border-zinc-100"
					onClick={() => {
						console.log(input)
						sendMessage(input)
					}}
					disabled={loading}>
					{loading ? 'Sending...' : 'Send'}
				</button>
				<button
					type="button"
					className="px-4 rounded-well rounded border-[1px] border-zinc-100"
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
