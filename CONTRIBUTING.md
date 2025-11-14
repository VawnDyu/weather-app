# Contributing to Weather App

First off, thank you for considering contributing to Weather App! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)

**Example:**
```markdown
**Bug**: Dark mode toggle not working on mobile

**Steps to Reproduce:**
1. Open app on mobile device
2. Click dark mode toggle
3. Nothing happens

**Expected**: Theme should switch to dark mode
**Actual**: Theme remains in light mode
**Environment**: iOS 16, Safari
```

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

- **Clear description** of the feature
- **Why it would be useful** to users
- **Possible implementation** approach (optional)

### 🔧 Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

4. **Update documentation** if needed
   - Update README.md for new features
   - Add comments to your code

5. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request** with:
   - Clear title describing the change
   - Description of what changed and why
   - Screenshots for UI changes
   - Reference to related issues

## Development Guidelines

### Code Style

- Use **TypeScript** for type safety
- Follow **React best practices**
- Use **functional components** with hooks
- Keep components **small and focused**
- Use **meaningful variable names**
- Add **comments** for complex logic

### Component Structure

```typescript
// Imports
import React, { useState } from 'react';

// Types/Interfaces
interface Props {
  // ...
}

// Component
const Component: React.FC<Props> = ({ prop }) => {
  // State
  const [state, setState] = useState();

  // Functions
  const handleFunction = () => {
    // ...
  };

  // Render
  return (
    // JSX
  );
};

export default Component;
```

### CSS Guidelines

- Use **semantic class names**
- Follow **BEM naming** convention when appropriate
- Keep styles **organized** (group related styles)
- Support **both light and dark modes**
- Ensure **responsive design**

### Commit Message Format

Use clear and descriptive commit messages:

- `Add: New feature description`
- `Fix: Bug fix description`
- `Update: Changes to existing feature`
- `Refactor: Code improvements`
- `Style: CSS/UI changes`
- `Docs: Documentation updates`

**Examples:**
```
Add: Geolocation feature for current location weather
Fix: Dark mode toggle not persisting on page reload
Update: Improve mobile responsive layout
Refactor: Simplify weather icon component logic
Style: Update forecast card design
Docs: Add API rate limiting information to README
```

## Project Structure

```
src/
├── App.tsx          # Main component with all logic
├── App.css          # All styles
└── vite-env.d.ts    # Type declarations
```

## Feature Ideas

Here are some features we'd love to see:

- 📍 Geolocation for automatic city detection
- ⏰ Hourly weather forecast
- 🗺️ Weather map integration
- 🔔 Weather alerts/notifications
- 📊 Historical weather data
- 🏙️ Multiple city comparison
- 🌈 Additional weather details (UV index, air quality)
- 🎨 More theme options
- 🌐 Internationalization (i18n)
- 📱 Progressive Web App (PWA) features

## Questions?

Feel free to open an issue with the tag `question` if you have any questions about contributing!

## Recognition

Contributors will be recognized in the README.md file.

---

Thank you for contributing! 🙌