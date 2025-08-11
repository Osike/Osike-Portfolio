# Osike Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and an intuitive user experience.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes with automatic system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Section Navigation**: Smooth scrolling navigation with active section highlighting
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **TypeScript**: Full type safety and improved developer experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🏗️ Project Structure

```
Osike-Portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form and information
│   │   ├── Education.tsx    # Educational background
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Philosophy.tsx   # Personal philosophy section
│   │   ├── Projects.tsx     # Portfolio projects showcase
│   │   └── Skills.tsx       # Technical skills display
│   ├── hooks/               # Custom React hooks
│   │   ├── useDarkMode.ts   # Dark mode state management
│   │   └── useScrollSpy.ts  # Active section detection
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and Tailwind imports
│   └── vite-env.d.ts        # Vite type definitions
├── public/                  # Static assets
├── eslint.config.js         # ESLint configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── index.html              # HTML template
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Osike/Osike-Portfolio.git
   cd Osike-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Built With

### Core Technologies
- **[React 18.3.1](https://reactjs.org/)** - UI library for building user interfaces
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4.2](https://vitejs.dev/)** - Fast build tool and development server

### Styling & UI
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Production-ready motion library
- **[Heroicons 2.2.0](https://heroicons.com/)** - Beautiful hand-crafted SVG icons
- **[Lucide React 0.344.0](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### Development Tools
- **[ESLint 9.9.1](https://eslint.org/)** - Code linting and quality checks
- **[PostCSS 8.4.35](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer 10.4.18](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## 🎨 Customization

### Theming

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  navy: '#0A192F',
  teal: {
    400: '#64FFDA',
    500: '#64FFDA',
    600: '#4FD1C7',
  },
}
```

### Dark Mode

Dark mode is implemented using Tailwind's dark mode feature with class-based toggling. The `useDarkMode` hook manages the theme state and persists user preferences in localStorage.

### Animations

Custom animations are defined in the Tailwind configuration:
- `fade-in-up` - Smooth fade and slide animation
- `float` - Continuous floating animation for interactive elements

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablet devices (768px - 1024px)
- Desktop devices (> 1024px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Osike** - [Your Email](mailto:shadyabacus@gmail.com)

Project Link: [https://github.com/Osike/Osike-Portfolio](https://github.com/Osike/Osike-Portfolio)

---

⭐ Star this repository if you found it helpful!