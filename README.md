# 🎵 Spotify Clone - Web Player

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://idyllic-cheesecake-6741b6.netlify.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A fully responsive and interactive Spotify web player clone with modern UI/UX, built using vanilla HTML, CSS, and JavaScript. Features include interactive music controls, playlist management, smooth animations, and full accessibility support.

## 🌟 Live Demo

**[View Live Demo →](https://idyllic-cheesecake-6741b6.netlify.app/)**

## ✨ Features

### 🎨 User Interface
- **Pixel-Perfect Design** - Authentic Spotify UI recreation with attention to detail
- **Responsive Layout** - Seamlessly adapts to desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark mode interface with custom color scheme
- **Smooth Animations** - CSS transitions and hover effects for enhanced UX
- **Custom Scrollbar** - Styled scrollbar matching Spotify's design language

### 🎮 Interactive Features
- **Play/Pause Control** - Toggle music playback with visual feedback
- **Shuffle & Repeat** - Enable shuffle and repeat modes with state indicators
- **Progress Bar** - Interactive seek functionality with real-time updates
- **Next/Previous Tracks** - Navigate through playlist seamlessly
- **Card Interactions** - Click on any playlist card to start playback
- **Keyboard Shortcuts** - Space bar for play/pause, arrow keys for seeking
- **Toast Notifications** - User-friendly feedback for actions

### 🎯 Technical Highlights
- **Semantic HTML5** - Proper use of semantic tags (header, main, nav, section, article, footer)
- **ARIA Labels** - Full accessibility support for screen readers
- **CSS Custom Properties** - Maintainable theming with CSS variables
- **Vanilla JavaScript** - No frameworks, pure JavaScript implementation
- **State Management** - Efficient player state handling
- **Smooth Scrolling** - Enhanced navigation experience
- **SEO Optimized** - Proper meta tags and descriptions

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript** | Interactive functionality and state management |
| **Font Awesome** | Icon library for UI elements |
| **Google Fonts** | Montserrat font family |

## 📂 Project Structure

```
Spotify-Clone/
│
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete styling with CSS variables
├── script.js           # Interactive functionality and player controls
├── README.md           # Project documentation
│
└── Images/             # Image assets
    ├── logo.png
    ├── card1img.jpeg through card6img.jpeg
    ├── player_icon1.png through player_icon5.png
    ├── backward_icon.png
    ├── forward_icon.png
    └── library_icon.png
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of web development (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd spotify-clone
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   
   # With Python
   python -m http.server 8000
   
   # With Node.js (http-server)
   npx http-server
   
   # With VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000` (or the port shown)

## 💡 Usage

### Player Controls
- **Play/Pause**: Click the center play button or press `Space bar`
- **Next/Previous**: Click the skip buttons
- **Shuffle**: Click the shuffle icon to enable random playback
- **Repeat**: Click the repeat icon to loop tracks
- **Seek**: Click or drag the progress bar to jump to any position
- **Keyboard Shortcuts**: 
  - `Space` - Play/Pause
  - `→` - Seek forward 5 seconds
  - `←` - Seek backward 5 seconds

### Navigation
- Click on any playlist card to start playback
- Hover over cards to see the play button
- Use the sidebar navigation for different sections

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --spotify-green: #1db954;    /* Primary accent color */
    --spotify-black: #000;       /* Primary background */
    --spotify-gray: #121212;     /* Secondary background */
    --spotify-light-gray: #232323; /* Card background */
}
```

### Adding Playlists
Add new cards in `index.html`:

```html
<article class="card" role="button" tabindex="0">
    <img src="/Images/your-image.jpeg" alt="Playlist name" class="card-img" />
    <p class="card-title">Your Playlist Name</p>
    <p class="card-info">Your playlist description</p>
</article>
```

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: > 1000px
- **Tablet**: 600px - 1000px
- **Mobile**: < 600px

Features adapt gracefully:
- Sidebar hides on mobile
- Cards resize appropriately
- Navigation buttons scale down
- Touch-friendly interactions

## 🔍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| Opera | Latest ✅ |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add volume control functionality
- Implement playlist creation feature
- Add search functionality
- Create user profile section
- Add lyrics display
- Integrate with Spotify API for real data

## 📝 Roadmap

- [ ] Volume control with mute toggle
- [ ] Queue management system
- [ ] Search functionality with filters
- [ ] User authentication (mock)
- [ ] Playlist creation and editing
- [ ] Dark/Light theme toggle
- [ ] Lyrics display feature
- [ ] Audio visualization
- [ ] Integration with Spotify Web API

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sourav Jangra**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from [Spotify](https://spotify.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📸 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)
*Full desktop interface with sidebar and player controls*

### Tablet View
![Tablet View](screenshots/tablet.png)
*Responsive layout optimized for tablets*

### Mobile View
![Mobile View](screenshots/mobile.png)
*Mobile-friendly interface with collapsible sidebar*

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ❤️ by Sourav Jangra</p>
</div>

