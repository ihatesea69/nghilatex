# NghiLaTeX

A modern, interactive LaTeX workspace with AI-powered assistance for academic writing and document preparation.

**Live Demo:** [https://ihatesea69.github.io/nghilatex/](https://ihatesea69.github.io/nghilatex/)

## Overview

NghiLaTeX is a browser-based LaTeX editor that demonstrates an AI-assisted workflow for academic document creation. It features a clean, Overleaf-inspired interface with real-time preview, intelligent suggestions, and seamless document navigation.

## Features

### Core Functionality

- **Live LaTeX Editor** - Syntax-aware text editor with line numbers and code formatting
- **Real-time PDF Preview** - Instant visualization of compiled documents
- **File Management** - Hierarchical file tree for multi-file projects
- **Document Outline** - Automatic section extraction and navigation
- **AI Assistant** - Intelligent suggestions for improving academic writing

### Interactive Elements

- **Smart Chat Interface** - Natural language commands for document operations
- **Suggested Prompts** - Quick access to common AI operations
- **Version Control** - Navigate between document revisions
- **Compile on Demand** - Manual compilation with visual feedback
- **Zoom Controls** - Adjustable preview scaling

### AI Capabilities

- Academic tone improvement
- Document restructuring
- Citation formatting
- Abstract generation
- LaTeX syntax checking
- Equation validation

## Technology Stack

- Pure HTML5, CSS3, and JavaScript (ES6+)
- No external dependencies or frameworks
- Client-side only - no server required
- Responsive design with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No installation or build process required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ihatesea69/nghilatex.git
cd nghilatex
```

2. Open in browser:
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then navigate to http://localhost:8000
```

Or visit the live demo: [https://ihatesea69.github.io/nghilatex/](https://ihatesea69.github.io/nghilatex/)

### Usage

1. **File Navigation** - Click files in the left sidebar to view different document sections
2. **AI Assistance** - Click the chat input to see suggested prompts, or type custom commands
3. **Compile** - Click the green "Compile" button to refresh the PDF preview
4. **Outline Navigation** - Click sections in the outline panel to jump to specific parts
5. **Version Control** - Use the floating action buttons to navigate between document versions

## Project Structure

```
nghilatex/
├── index.html          # Main application interface
├── styles.css          # Styling and layout
├── app.js              # Application logic and interactions
├── data/
│   ├── drafts.js       # Mock document versions
│   ├── ai_actions.js   # AI action definitions
│   └── citations.js    # Bibliography data
├── assets/
│   ├── icons/          # SVG icons
│   └── previews/       # PDF preview images
└── README.md           # This file
```

## Configuration

### Customizing Content

Edit `data/drafts.js` to modify document content:

```javascript
const DRAFTS = {
    v1: {
        files: {
            'paper/main.tex': '\\documentclass{article}...'
        }
    }
};
```

### Adding AI Actions

Edit `data/ai_actions.js` to add new AI capabilities:

```javascript
const AI_ACTIONS = {
    custom_action: {
        label: 'Custom Action',
        thinkingMessage: 'Processing...',
        duration: 1500
    }
};
```

### Styling

Modify CSS variables in `styles.css`:

```css
:root {
    --bg-dark: #1e1e1e;
    --accent-green: #10b981;
}
```

## Development

### Architecture

The application follows a component-based architecture:

- **Header** - Project information and status
- **FileTree** - File navigation and management
- **Editor** - LaTeX code editing with line numbers
- **AIAssistant** - AI interaction and suggestions
- **PDFPreview** - Document preview rendering
- **PrismApp** - Main application controller

### Adding Features

1. Define new components in `app.js`
2. Add corresponding HTML structure in `index.html`
3. Style components in `styles.css`
4. Wire up event handlers in `setupEventListeners()`

## Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome  | 90+            | Supported |
| Firefox | 88+            | Supported |
| Safari  | 14+            | Supported |
| Edge    | 90+            | Supported |

## Performance

- Initial load time: < 100ms
- Smooth 60fps animations
- No network requests after initial load
- Total bundle size: < 500KB

## Limitations

This is a demonstration project with the following limitations:

- No actual LaTeX compilation (uses pre-rendered previews)
- No real AI integration (uses hardcoded responses)
- No file persistence (changes are not saved)
- No collaborative editing features
- No export functionality

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use ES6+ JavaScript features
- Follow existing naming conventions
- Add comments for complex logic
- Test in multiple browsers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Overleaf's interface design
- LaTeX syntax examples from academic papers
- Icon designs based on common file type conventions

## Contact

Project Link: [https://github.com/ihatesea69/nghilatex](https://github.com/ihatesea69/nghilatex)

Live Demo: [https://ihatesea69.github.io/nghilatex/](https://ihatesea69.github.io/nghilatex/)

## Roadmap

Future enhancements under consideration:

- Real LaTeX compilation integration
- Actual AI model integration (GPT-4, Claude)
- File persistence with local storage
- Export to PDF functionality
- Collaborative editing support
- Plugin system for extensions
- Mobile responsive improvements
- Dark/light theme toggle
- Keyboard shortcuts
- Search and replace functionality

## Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## Changelog

### Version 1.0.0 (2024)

- Initial release
- Core editor functionality
- AI assistant interface
- PDF preview system
- File navigation
- Document outline
- Interactive chat interface
- Version control navigation
