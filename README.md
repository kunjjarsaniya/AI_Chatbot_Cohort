# AI-Powered Chat Application

A modern, real-time chat application powered by AI, built with React.js, Node.js, and Socket.IO. This application features a responsive UI with typing indicators, message timestamps, and smooth animations.

## Features

- 💬 Real-time messaging with WebSockets
- 🤖 AI-powered responses
- ✨ Smooth typing indicators
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI
- 🔔 Message timestamps
- ⚡ Fast and efficient message delivery
- 🔄 Auto-scrolling chat

## Tech Stack

### Frontend
- React.js
- Socket.IO Client
- CSS3 (Flexbox, CSS Variables, Animations)
- Vite (Build Tool)

### Backend
- Node.js
- Express.js
- Socket.IO
- Google Generative AI API
- Dotenv

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Google Generative AI API Key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kunjjarsaniya/AI_Chatbot_Cohort.git
cd AI_Chatbot_Cohort
```

### 2. Set Up Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your API key:
   ```env
   PORT=3000
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Set Up Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
AI_Chatbot_Cohort/
├── backend/                 # Backend server code
│   ├── src/
│   │   ├── app.js          # Express application setup
│   │   └── services/       # Business logic and AI services
│   ├── .env                # Environment variables
│   ├── package.json
│   └── server.js           # Server entry point
│
└── frontend/               # Frontend React application
    ├── public/             # Static files
    ├── src/
    │   ├── App.jsx         # Main application component
    │   ├── App.css         # Main styles
    │   ├── main.jsx        # Application entry point
    │   └── assets/         # Images and other assets
    ├── package.json
    └── vite.config.js      # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [Google Generative AI](https://ai.google.dev/gemini-api/docs)
- [React](https://reactjs.org/)
- [Socket.IO](https://socket.io/)
- [Vite](https://vitejs.dev/)

---

<p align="center">
  Made with ❤️ by Kunj Jarsaniya
</p>
