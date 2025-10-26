# Lunacal Frontend Assignment

This project is a frontend application built as part of the Lunacal internship assignment. It features a responsive user profile interface with several interactive components, including a dynamic image gallery.

The application is built using a modern web development stack to create a clean, efficient, and maintainable user interface.

## ✨ Features

- **Interactive Image Gallery**: A scrollable gallery to display user images.
- **Image Upload**: Functionality to add new images to the gallery.
- **Responsive Design**: Components are designed to work across different screen sizes.
- **Modern UI Components**: Clean and reusable components for building the user profile page.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js (version 18.x or later) and npm installed on your machine.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/lunacal.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd lunacal
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode. Open http://localhost:5173 (or the address shown in your terminal) to view it in your browser. The page will automatically reload if you make any changes to the code.

## 🛠️ Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Vite**: A fast and modern build tool for web development.

## 🚀 Deploying to GitHub Pages

You can easily deploy this project to GitHub Pages by following these steps.

### 1. Set the `base` path in Vite Config

Your project will be hosted in a subfolder on GitHub Pages (e.g., `https://<username>.github.io/<repo-name>/`). You need to tell Vite about this by setting the `base` property in your `vite.config.ts` file.

Open `vite.config.ts` and add the `base` property, replacing `<REPO_NAME>` with the name of your GitHub repository.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<REPO_NAME>/', // e.g., '/lunacal-assignment/'
  plugins: [react()],
})
```

### 2. Install the `gh-pages` package

This is a helper package to make deploying the `dist` folder simple.

```bash
npm install gh-pages --save-dev
```

### 3. Add Deploy Scripts to `package.json`

Add a `predeploy` and `deploy` script to your `package.json`. These scripts will build your application and then push the contents of the `dist` folder to a `gh-pages` branch on your repository.

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
```

### 4. Deploy

Run the deploy script. This will build your project and push it to GitHub.

```bash
npm run deploy
```

After the script finishes, go to your GitHub repository's **Settings** > **Pages**. Make sure the source is set to deploy from the `gh-pages` branch. Your site should be live within a few minutes!
