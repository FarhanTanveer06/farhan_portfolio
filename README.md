# Portfolio Website

A modern, responsive portfolio website built with React, styled to match a professional design similar to the reference portfolio.

## Features

- ✨ Modern and responsive design
- 📱 Mobile-friendly layout
- 🎨 Beautiful gradient animations
- 📧 Contact form with Web3Forms integration
- 🎯 Smooth scrolling navigation
- 💼 Portfolio showcase with filtering
- 📄 Resume section with timeline

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Environment Variables:
   - Create a `.env` file in the root directory
   - Add your Web3Forms Access Key:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```

3. Customize your information:
   - Update personal details in `src/components/About.jsx`
   - Update resume information in `src/components/Resume.jsx`
   - Add your projects in `src/components/Portfolio.jsx`
   - Update contact information in `src/components/Contact.jsx`
   - Update your name in `src/components/Hero.jsx` and `src/components/Footer.jsx`

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Navigation bar
│   ├── Hero.jsx          # Hero/Home section
│   ├── About.jsx         # About section
│   ├── Expertise.jsx     # Expertise section
│   ├── Resume.jsx        # Resume section
│   ├── Portfolio.jsx     # Portfolio section
│   ├── Contact.jsx       # Contact form section
│   └── Footer.jsx        # Footer
├── App.jsx               # Main app component
├── App.css               # App styles
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Web3Forms Setup
 
 1. Visit [https://web3forms.com/](https://web3forms.com/)
 2. Sign up for a free account
 3. Get your access key
 4. Add the key to your `.env` file:
    ```
    VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-here
    ```

## Customization

### Colors
The main color scheme uses gradients:
- Primary: `#667eea` to `#764ba2`
- You can customize colors in the CSS files

### Adding Projects
Edit `src/components/Portfolio.jsx` and add your projects to the `projects` array.

### Adding Skills
Edit `src/components/Resume.jsx` and update the `skills` array.

## License

This project is open source and available under the MIT License.

