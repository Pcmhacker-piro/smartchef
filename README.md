# SmartChef – AI-Powered Recipe & Meal Planning Assistant

SmartChef is an AI-powered recipe recommendation application that helps users discover recipes based on available ingredients, dietary preferences, and serving sizes.

## Project Setup

### Prerequisites

- Node.js 18 or later
- npm
- Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd smartchef
```

### 2. Initialize the Frontend (React + Vite)

Create the React application using Vite:

```bash
npm create vite@latest client -- --template react
cd client
npm install
cd ..
```

If Vite asks whether to install dependencies and start the application immediately, choose **No**.

### 3. Configure the Frontend

Replace the default Vite starter files with the SmartChef frontend files.

Remove the following unused starter files:

- `client/src/App.css`
- `client/src/index.css`
- `client/src/assets/react.svg`
- `client/public/vite.svg`

Add the SmartChef project files:

- `client/index.html`
- `client/vite.config.js`
- `client/.env.example`
- All required files inside `client/src/`

### 4. Install Frontend Dependencies

```bash
cd client
npm install
npm install react-router-dom lucide-react
```

### 5. Run the Frontend

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

## Project Structure

```text
smartchef/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
├── docs/
├── .gitignore
└── README.md

## Development Status

- [x] Repository initialized
- [x] Frontend project initialized with React and Vite
- [ ] Frontend UI implementation
- [ ] Backend initialization
- [ ] Frontend-backend integration
- [ ] AI recipe generation integration
- [ ] Testing and deployment