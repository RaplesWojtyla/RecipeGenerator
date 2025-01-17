# Recipe Generator with AI (Gemini, React, Express, Node.js, Vite)
A web application that generates personalized recipes based on available ingredients using Gemini AI for text generation. Built with React for the frontend, and Express and Node.js for the backend, this project demonstrates seamless integration of AI-powered solutions in modern web development. (This is my first project that I made with integrated AI:3)

## Features  
- Input ingredients and get tailored recipe suggestions  
- AI-driven natural language generation for detailed recipe instructions

## Technologies Used  
- **Client-Side**: React  
- **Server-Side**: Express, Node.js  
- **AI Integration**: Gemini AI (Generative Language) 

### Configuration
1. Copy the .env.example file into .env
   ```bash
   cp .env.example .env
   ```
2. Change ```{YOUR_GEMINI_API_KEY}``` to your Gemini API key
   ```bash
   GEMINI_API_KEY={YOUR_GEMINI_API_KEY}
   ```

### Installation (For Development)

1. Install the dependencies for app/server:
    ```bash
    npm install
    ```

2. Install the dependencies for client:
    ```bash
    cd ./frontend
    npm install
    ```

### Running the Project (For Development)

1. Start the app/server:
    ```bash
    cd ./backend
    npm run dev
    ```
2. Start the client
    ```bash
    cd ./frontend
    npm run dev
    ```

## Project Structure

```
recipe-app/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── GeminiRecipe.jsx
│   │   │   ├── Header.jsx
│   │   │   └── IngredientsList.jsx
│   │   │   └── MainContent.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
├── server/
│   ├── api/
│   │   ├── aiService.js
│   └── app.js
├── .env
├── .env.example
├── .gitignore
├── .package-lock.json
├── .package.json
├── .README.md
```

<p align="center"> Created with ❤️ by Wojtyla </p>
