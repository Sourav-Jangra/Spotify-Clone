# Contributing to Spotify Clone

Thank you for considering contributing to this project! This document outlines the process for contributing to the Spotify Clone project.

## 🌟 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Browser and OS** information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** for the enhancement
- **Mockups or examples** if applicable
- **Priority level** (nice-to-have, important, critical)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test thoroughly** across different browsers
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

## 📝 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Indent with tabs (or 4 spaces)
- Use lowercase for element names
- Include alt text for all images
- Add meaningful comments for complex sections

```html
<!-- Good Example -->
<article class="card" role="button" tabindex="0" aria-label="Play playlist">
    <img src="image.jpg" alt="Playlist cover art" />
    <p class="card-title">Playlist Name</p>
</article>
```

### CSS
- Use CSS custom properties for colors and common values
- Follow BEM naming convention where appropriate
- Group related properties together
- Include browser prefixes when needed
- Add comments for complex selectors
- Keep selectors simple and performant

```css
/* Good Example */
.card {
    background-color: var(--spotify-light-gray);
    border-radius: var(--border-radius-sm);
    transition: all var(--transition-speed) ease;
}

.card:hover {
    transform: translateY(-5px);
}
```

### JavaScript
- Use modern ES6+ syntax
- Write clear, descriptive variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Handle errors gracefully
- Use const/let instead of var

```javascript
// Good Example
/**
 * Toggle play/pause state of the music player
 */
function togglePlayPause() {
    playerState.isPlaying = !playerState.isPlaying;
    
    if (playerState.isPlaying) {
        startPlayback();
    } else {
        stopPlayback();
    }
}
```

## 🔍 Testing Checklist

Before submitting a PR, ensure:

- [ ] Code works on Chrome, Firefox, Safari, and Edge
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] No console errors or warnings
- [ ] Accessibility features work (keyboard navigation, screen readers)
- [ ] Code follows project style guidelines
- [ ] Comments are clear and helpful
- [ ] No unnecessary files or dependencies added

## 🚀 Development Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   cd spotify-clone
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and test thoroughly

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Add feature: description of feature"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request

## 📋 Commit Message Guidelines

Use clear, descriptive commit messages:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

Examples:
```
feat: Add volume control slider
fix: Resolve progress bar click issue on mobile
docs: Update README with new features
style: Improve card hover animation
refactor: Simplify player state management
```

## 🎯 Priority Areas

We especially welcome contributions in these areas:

1. **Accessibility improvements**
2. **Mobile experience enhancements**
3. **Performance optimizations**
4. **Browser compatibility fixes**
5. **New features from the roadmap**
6. **Documentation improvements**

## ❓ Questions?

Feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Check existing issues and pull requests

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards others

Thank you for contributing! 🎉
