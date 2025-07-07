# React Spreadsheet - Intern Assignment

A pixel-perfect React spreadsheet prototype built to match the provided Figma design, featuring Google Sheets/Excel-like functionality.

## 🚀 Live Demo

Access the live application at: [Your deployed URL here]

## 📋 Project Overview

This project is a static, front-end-only React application that recreates a professional spreadsheet interface. It focuses on delivering a pixel-perfect implementation with interactive features and smooth user experience.

### Key Features

- **Interactive Spreadsheet Grid**: Click and double-click cells to select and edit
- **Google Sheets-like Experience**: Familiar keyboard navigation and cell editing
- **Professional Toolbar**: Font formatting, alignment, and styling options
- **Formula Bar**: Display and edit cell formulas and values
- **Tab Navigation**: Multiple sheet support with add/close functionality
- **Responsive Design**: Works seamlessly across different screen sizes
- **TypeScript Support**: Full type safety with strict mode enabled

## 🛠 Tech Stack

- **React 18** with TypeScript (strict mode)
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for professional UI components
- **Lucide React** for consistent iconography

## 🏗 Architecture

### Component Structure
```
src/
├── components/
│   ├── Spreadsheet.tsx      # Main grid component with cell management
│   ├── Toolbar.tsx          # Formatting and action buttons
│   ├── TabNavigation.tsx    # Sheet tab management
│   ├── FormulaBar.tsx       # Cell reference and formula editing
│   └── ui/                  # shadcn/ui components
├── pages/
│   └── Index.tsx            # Main application layout
└── lib/
    └── utils.ts             # Utility functions
```

### Key Implementation Details

- **Cell Management**: Each cell has a unique identifier and maintains its own state
- **Selection Handling**: Visual feedback for selected cells with keyboard navigation
- **Edit Mode**: Double-click to enter edit mode, Enter/Escape to confirm/cancel
- **Interactive Feedback**: All buttons log actions to console for demonstration

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd react-spreadsheet-intern
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design Implementation

This prototype closely follows the provided Figma design with attention to:

- **Pixel-perfect spacing** and component alignment
- **Professional color scheme** with subtle gray tones and blue accents
- **Consistent typography** using system fonts
- **Smooth animations** and hover states
- **Responsive behavior** across different viewport sizes

## 🔧 Code Quality

The codebase maintains high standards with:

- **TypeScript strict mode** for enhanced type safety
- **ESLint + Prettier** configuration for consistent code formatting
- **Component-based architecture** for maintainability
- **Clean commit history** with descriptive messages
- **Comprehensive error handling** and user feedback

## 🚀 Deployment

The application is optimized for static hosting and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

Build the project with `npm run build` and deploy the `dist` folder.

## 🔮 Future Enhancements

Potential improvements for future iterations:

- **Keyboard Navigation**: Arrow key navigation between cells
- **Column Resizing**: Drag-to-resize column widths
- **Data Persistence**: Local storage or backend integration
- **Formula Engine**: Actual spreadsheet calculations
- **Import/Export**: CSV and Excel file support
- **Collaboration**: Real-time multi-user editing

## 🏆 Trade-offs & Decisions

### Architecture Decisions

1. **Component State vs Global State**: Used local component state for simplicity, suitable for prototype scope
2. **Custom Table vs Library**: Built custom table component for precise control over styling and behavior
3. **Static Data**: No backend integration as per requirements, focusing on UI/UX excellence

### Performance Considerations

- Implemented efficient cell rendering with React keys
- Used callback functions to prevent unnecessary re-renders
- Minimal state updates for smooth interactions

### Accessibility

- Keyboard navigation support for essential interactions
- Proper ARIA labels and semantic HTML
- High contrast ratios for text and backgrounds

## 📝 License

This project was created as part of an intern assignment and is for demonstration purposes.

---

Built with 💻 and ☕ for the React Intern Assignment
