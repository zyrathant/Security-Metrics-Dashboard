const chatbotToggle = document.getElementById("chatbot-toggle");
const headerToggle = document.getElementById("header-toggle");
const chatbot = document.getElementById("chatbot");

const questions = document.getElementById("questions");
const messages = document.getElementById("messages");

chatbotToggle.onclick = () => {
  chatbot.style.display = "block";
  chatbotToggle.style.display = "none";
};
headerToggle.onclick = () => {
  chatbot.style.display = "none";
  chatbotToggle.style.display = "flex";
};

const replies = {
  Hello: ["Hi there!", "How can I help you?", "Greetings!", "Welcome!"],
  "Tell me about the most common attack type in cybersecurity.": [
    "Malware attacks are the most popular type of attacks. Followed by phishing and DdoS attacks. May I help you with anything else?",
  ],
  "Tell me about the most commonly used security measure?": [
    "That would be implementing Multi-Factor Authentication! Can I help you with anything else?",
  ],
  "I would like to hire you!": [
    "That's great you can find our details in the About Us section. Feel free to pop a message!! Anything else you need help with?",
  ],
  "That is all for today. Thank you!!": [
    "See you later!",
    "Take care!",
    "Have a great day!",
    "Goodbye!",
  ],
};

function sendResponse(userMessage) {
  addQuestion(userMessage);

  const response = getResponse(userMessage);
  if (response) {
    addMessage(response);
  } else {
    addMessage("I am not sure how to respond to that.");
  }
}

function addQuestion(question) {
  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.textContent = question;
  messages.appendChild(questionElement);
  messages.scrollTop = questions.scrollHeight;
}
function addMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

function getResponse(userMessage) {
  for (const question in replies) {
    if (userMessage === question) {
      const answers = replies[question];
      return answers[Math.floor(Math.random() * answers.length)];
    }
  }
  return null;
}
