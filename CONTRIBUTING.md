# Contributing to NghiLaTeX

Thank you for your interest in contributing to NghiLaTeX! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and version information
- Any relevant error messages

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- Clear and descriptive title
- Detailed description of the proposed functionality
- Explanation of why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch from `master`
3. Make your changes
4. Test your changes in multiple browsers
5. Commit with clear, descriptive messages
6. Push to your fork
7. Submit a pull request

#### Pull Request Guidelines

- Follow the existing code style
- Update documentation as needed
- Add comments for complex logic
- Test in Chrome, Firefox, Safari, and Edge
- Keep changes focused and atomic
- Reference related issues

## Development Setup

1. Clone your fork:
```bash
git clone https://github.com/your-username/nghilatex.git
cd nghilatex
```

2. Create a branch:
```bash
git checkout -b feature/your-feature-name
```

3. Make changes and test locally by opening `index.html` in a browser

4. Commit your changes:
```bash
git add .
git commit -m "feat: Add your feature description"
```

5. Push to your fork:
```bash
git push origin feature/your-feature-name
```

## Coding Standards

### JavaScript

- Use ES6+ features
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Follow existing naming conventions
- Avoid global variables when possible

### CSS

- Use CSS variables for colors and spacing
- Follow BEM naming convention where applicable
- Group related styles together
- Add comments for complex selectors

### HTML

- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Keep structure clean and organized
- Use meaningful class names

## Commit Message Format

Follow conventional commits format:

```
type(scope): subject

body

footer
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(editor): Add syntax highlighting for LaTeX commands
fix(preview): Correct PDF zoom calculation
docs(readme): Update installation instructions
```

## Testing

Before submitting a pull request:

1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Verify all interactive features work
3. Check console for errors
4. Test on different screen sizes
5. Verify no broken links or missing assets

## Documentation

Update documentation when:

- Adding new features
- Changing existing functionality
- Modifying configuration options
- Adding new dependencies

## Questions?

Feel free to open an issue for questions or clarifications about contributing.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
