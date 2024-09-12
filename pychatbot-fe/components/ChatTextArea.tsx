import React, { useState, useRef, useEffect } from 'react'

interface ChatTextAreaProps {
	input: string
	setInput: React.Dispatch<React.SetStateAction<string>>
}

const ChatTextArea: React.FC<ChatTextAreaProps> = ({
	input,
	setInput,
}: any) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const autoResizeHeight = () => {
		const textarea = textareaRef.current
		if (textarea) {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
			textarea.style.width = `400px`
		}
	}

	useEffect(() => {
		autoResizeHeight()
	}, [input])

	return (
		<div className="flex flex-col bg-[#000000] items-center justify-center w-full gap-2 px-2">
			<h1 className="text-center">
				⊹₊⟡⋆ 𝙈𝙖𝙠𝙚 𝙮𝙤𝙪𝙧 𝙨𝙤𝙘𝙞𝙖𝙡 𝙢𝙚𝙙𝙞𝙖 𝙘𝙖𝙥𝙩𝙞𝙤𝙣 𝙖𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘𝙖𝙡𝙡𝙮 𝙥𝙡𝙚𝙖𝙨𝙞𝙣𝙜! ⊹₊⟡⋆
			</h1>
			<textarea
				ref={textareaRef}
				className="p-2 rounded border-[1px] border-zinc-100 resize-none overflow-hidden text-black"
				placeholder="What kind of caption do you want?"
				value={input}
				onChange={(e) => {
					setInput(e.target.value)
					autoResizeHeight()
				}}
			/>
		</div>
	)
}

export default ChatTextArea
