import os

from groq import Groq

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

system_prompt = {
    "role": "system",
    "content":
    "You are a helpful assistant with expertise in making social media post. If user is asking for a post, reply with with minimal 50 words in a paragraph and don't use hashtags. You're focused for the aesthetic captions only. If they're only saying hi or thank you, reply it short."

}

chat_history = [system_prompt]
while True:
  # Get user input from the console
  user_input = input("You: ")

  # Append the user input to the chat history
  chat_history.append({"role": "user", "content": user_input})

  response = client.chat.completions.create(model="llama3-70b-8192",
                                            messages=chat_history,
                                            max_tokens=1000,
                                            temperature=1.2)
  # Append the response to the chat history
  chat_history.append({
      "role": "assistant",
      "content": response.choices[0].message.content
  })
  # Print the response
  print("Assistant:", response.choices[0].message.content)
# print(chat_completion.choices[0].message.content)