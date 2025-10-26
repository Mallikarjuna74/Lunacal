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

## 🚀 Automated Deployment to GitHub Pages

This project is configured for continuous deployment to GitHub Pages using GitHub Actions.

### How it Works

A GitHub Actions workflow is set up in `.github/workflows/deploy.yml`. This workflow automatically triggers on every push to the `main` branch. It performs the following steps:

1.  **Checks out** the repository code.
2.  **Sets up Node.js** to the required version.
3.  **Installs** project dependencies using `npm install`.
4.  **Builds** the application for production using `npm run build`.
5.  **Deploys** the contents of the `dist` directory to the `gh-pages` branch.

GitHub Pages is then automatically served from this `gh-pages` branch.

### Configuration

1.  **Vite Config**: The `vite.config.ts` file is configured with `base: '/Lunacal/'` to ensure all asset paths are correct for the GitHub Pages URL structure.

2.  **Repository Settings**: In your GitHub repository settings under **Settings > Pages**, ensure that the source is set to **Deploy from a branch** and the branch is set to `gh-pages`.

Once you commit and push these changes, the deployment will run automatically, and your site will be live!
