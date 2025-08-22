# CodeDock: Collaborative Real-Time Code Editor

CodeDock is a full-stack, real-time collaborative code editor. Multiple users can join a room, share a unique room ID, and work together on code, files, and projects instantly. The platform supports live code editing, file management, chat, drawing, and AI-powered code assistance.

## 🚀 Features

- Real-time collaborative code editing across multiple files
- Create, open, edit, save, delete, and organize files and folders
- Download the entire codebase as a zip file
- Unique room generation for collaboration
- Comprehensive language support & syntax highlighting with auto-detection
- Execute code directly in the editor (multi-language)
- Instant updates and synchronization for all users
- User join/leave notifications and online/offline status
- Real-time group chat and user presence list
- Tooltips showing who is editing what
- Auto-suggestions based on language
- Customizable font size, font family, and multiple themes
- Collaborative drawing/sketching in real-time
- AI Copilot: Generate, insert, copy, or replace code with AI assistance

## 💻 Tech Stack

- React, TypeScript, Vite, Tailwind CSS (Frontend)
- Node.js, Express.js, Socket.io (Backend)
- ESLint, Prettier, Vercel for deployment & code quality

## ⚙️ Installation & Setup

### Manual Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/collaborative-code-editor.git
   ```
2. **Create .env files:**
   - In `client/.env` set:
     ```bash
     VITE_BACKEND_URL=<your_server_url>
     ```
   - In `server/.env` set:
     ```bash
     PORT=3000
     ```
3. **Install dependencies:**
   ```bash
   npm install     # Run in both client and server directories
   ```
4. **Start servers:**
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
5. **Open in browser:**
   ```bash
   http://localhost:5173/
   ```

