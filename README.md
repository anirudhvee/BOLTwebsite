# BOLT - Bike Overwatch & Location Tracker (Website)

This repository contains the website for the BOLT project, built with React, TypeScript, and Tailwind CSS using Vite as the build tool. The website serves as the front-facing documentation and demonstration platform for the BOLT embedded systems project.

## About

BOLT (Bike Overwatch & Location Tracker) is an embedded systems project that provides:
- Seamless security
- Real-time tracking
- Instant alerts

This website was created to showcase the BOLT project, which was developed as part of EEC 172: Embedded Systems Final Project by Manasvini Narayanan and Anirudh Venkatachalam. For the actual embedded systems implementation and hardware details, please refer to the main project repository [link to main project repo].

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

- `src/` - Source code directory
  - `components/` - React components
  - `assets/` - Static assets (images, fonts, etc.)
  - `styles/` - CSS and style-related files

## Technologies Used

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide React](https://lucide.dev/) - Icon Library

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting


## License

This project is licensed under the MIT License - see the LICENSE file for details. 