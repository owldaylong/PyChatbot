import React, { useRef, useEffect } from 'react'

interface ChatTextAreaProps {
	input: string
	setInput: React.Dispatch<React.SetStateAction<string>>
}

const ChatTextArea: React.FC<ChatTextAreaProps> = ({ input, setInput }) => {
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
		<div className="flex flex-col bg-[#0D1B2A] items-center justify-center w-full gap-2 px-2">
			<h1 className="text-center font-sans">
				( ˶ˆᗜˆ˵ ) Tell me what kind of caption do you want to get! ( ˶ˆᗜˆ˵ )
			</h1>
			<textarea
				ref={textareaRef}
				className="w-full p-3 rounded border-[1px] border-zinc-100 resize-none overflow-hidden text-black font-sans"
				placeholder="Can you make me a caption for pizza photos..."
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
