# Key Generator Application

A React-based web application that generates unique keys based on user information. Built with React and Vite for optimal performance and development experience.

## Features

- Key generation based on user's first name and date of birth
- Clean and modern user interface
- Fast development with Vite's Hot Module Replacement (HMR)

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

## Project Structure

```
src/
  ├── components/
  │   └── GenerateKey.jsx    # Key generation component
  └── ...
```

## Key Generation Logic

The application generates a unique key using the following format:
- First two letters of the user's first name (lowercase)
- Day of birth (2 digits)
- Month of birth (2 digits)
- Year of birth (4 digits)

Example: For a user named "John" born on January 15, 1990, the generated key would be: `jo15011990`

## Development

This project uses:
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - Vite plugin for React

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## License

[Your chosen license]

## Contributing

[Your contribution guidelines]
