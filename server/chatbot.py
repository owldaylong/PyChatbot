import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq

app = Flask(__name__)
CORS(app)

api_key = os.getenv('GROQ_API_KEY')

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

@app.route("/")
def hello_world():
    return "<p>Server is working wahooo!</p>"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get('input')

    system_prompt = {
        "role": "system",
        "content":
        "You are a helpful assistant with expertise in making social media post. Reply with at least 50 words in a paragraph and don't use hashtags. You're focused on aesthetic captions only."
    }

    chat_history = [system_prompt, {"role": "user", "content": user_input}]
    # print(chat_history, "INI CHAT HISTORY")

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=chat_history,
        max_tokens=1000,
        temperature=1.2
    )
    print(response, "INI RESPONSE")
    assistant_reply = response.choices[0].message.content
    return jsonify({"response": assistant_reply})
    # return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
