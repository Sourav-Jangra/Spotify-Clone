// Spotify Clone - Interactive Features
// Author: Sourav Jangra

// ============================
// Player State Management
// ============================
const playerState = {
    isPlaying: false,
    currentTime: 0,
    duration: 203, // 3:23 in seconds
    volume: 70,
    isShuffle: false,
    isRepeat: false,
    currentPlaylist: 'Today\'s Top Hits'
};

// ============================
// Search and Filter State
// ============================
const appState = {
    currentGenre: 'all',
    searchQuery: '',
    playlists: [
        { name: 'Today\'s Top Hits', genre: 'pop', songs: 50 },
        { name: 'Chill Lofi Beats', genre: 'indie', songs: 30 },
        { name: 'Workout Energy', genre: 'hiphop', songs: 45 },
        { name: 'Late Night Vibes', genre: 'pop', songs: 35 },
        { name: 'RapCaviar', genre: 'hiphop', songs: 60 },
        { name: 'All Out 2010s', genre: 'pop', songs: 75 },
        { name: 'Rock Classics', genre: 'rock', songs: 55 },
        { name: 'Indie Gems', genre: 'indie', songs: 40 },
        { name: 'Jazz Masters', genre: 'indie', songs: 50 }
    ]
};

// ============================
// DOM Elements
// ============================
const playPauseBtn = document.querySelector('.player-control-icon[alt="Play/Pause Icon"]');
const progressBar = document.querySelector('.progress-bar');
const currentTimeDisplay = document.querySelector('.curr-time');
const totalTimeDisplay = document.querySelector('.total-time');
const shuffleBtn = document.querySelector('.player-control-icon[alt="Shuffle Icon"]');
const repeatBtn = document.querySelector('.player-control-icon[alt="Shuffle "]');
const prevBtn = document.querySelector('.player-control-icon[alt="Previous Icon"]');
const nextBtn = document.querySelector('.player-control-icon[alt="Next Song Icon"]');
const cards = document.querySelectorAll('.card');
const searchInput = document.querySelector('.search-input');
const genreTags = document.querySelectorAll('.genre-tag');
const navOptions = document.querySelectorAll('.nav-option');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const createPlaylistBtn = document.getElementById('create-playlist-btn');

// ============================
// Utility Functions
// ============================
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateProgressBar() {
    const percentage = (playerState.currentTime / playerState.duration) * 100;
    progressBar.value = percentage;
    progressBar.setAttribute('aria-valuenow', Math.round(percentage));
    currentTimeDisplay.textContent = formatTime(playerState.currentTime);
}

// ============================
// Player Controls
// ============================
function togglePlayPause() {
    playerState.isPlaying = !playerState.isPlaying;
    
    if (playerState.isPlaying) {
        playPauseBtn.style.opacity = '1';
        startPlayback();
        showToast(`▶ Now Playing: ${playerState.currentPlaylist}`);
    } else {
        stopPlayback();
        showToast('⏸ Paused');
    }
}

let playbackInterval;

function startPlayback() {
    playbackInterval = setInterval(() => {
        if (playerState.currentTime < playerState.duration) {
            playerState.currentTime += 0.1;
            updateProgressBar();
        } else {
            if (playerState.isRepeat) {
                playerState.currentTime = 0;
            } else {
                stopPlayback();
                playNext();
            }
        }
    }, 100);
}

function stopPlayback() {
    clearInterval(playbackInterval);
}

function toggleShuffle() {
    playerState.isShuffle = !playerState.isShuffle;
    shuffleBtn.style.opacity = playerState.isShuffle ? '1' : '0.7';
    shuffleBtn.style.color = playerState.isShuffle ? '#1db954' : 'white';
    shuffleBtn.style.filter = playerState.isShuffle ? 'drop-shadow(0 0 8px rgba(29, 185, 84, 0.5))' : 'none';
    
    showToast(playerState.isShuffle ? '🔀 Shuffle On' : '🔀 Shuffle Off');
}

function toggleRepeat() {
    playerState.isRepeat = !playerState.isRepeat;
    repeatBtn.style.opacity = playerState.isRepeat ? '1' : '0.7';
    repeatBtn.style.color = playerState.isRepeat ? '#1db954' : 'white';
    repeatBtn.style.filter = playerState.isRepeat ? 'drop-shadow(0 0 8px rgba(29, 185, 84, 0.5))' : 'none';
    
    showToast(playerState.isRepeat ? '🔁 Repeat On' : '🔁 Repeat Off');
}

function playNext() {
    playerState.currentTime = 0;
    updateProgressBar();
    showToast('⏭ Playing Next Track');
    
    if (playerState.isPlaying) {
        startPlayback();
    }
}

function playPrevious() {
    playerState.currentTime = 0;
    updateProgressBar();
    showToast('⏮ Playing Previous Track');
    
    if (playerState.isPlaying) {
        startPlayback();
    }
}

// ============================
// Progress Bar Interaction
// ============================
function seekTo(event) {
    const rect = progressBar.getBoundingClientRect();
    const percentage = ((event.clientX - rect.left) / rect.width) * 100;
    playerState.currentTime = (percentage / 100) * playerState.duration;
    progressBar.value = percentage;
    updateProgressBar();
}

// ============================
// Search and Filter Functions
// ============================
function handleSearch(query) {
    appState.searchQuery = query.toLowerCase();
    filterAndDisplayPlaylists();
}

function handleGenreFilter(genre) {
    appState.currentGenre = genre;
    
    // Update active state
    genreTags.forEach(tag => {
        if (tag.dataset.genre === genre) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    });
    
    filterAndDisplayPlaylists();
    showToast(`🎵 Filtered by: ${genre === 'all' ? 'All Genres' : genre}`);
}

function filterAndDisplayPlaylists() {
    const filtered = appState.playlists.filter(playlist => {
        const matchesGenre = appState.currentGenre === 'all' || playlist.genre === appState.currentGenre;
        const matchesSearch = appState.searchQuery === '' || 
                             playlist.name.toLowerCase().includes(appState.searchQuery);
        return matchesGenre && matchesSearch;
    });
    
    console.log(`Found ${filtered.length} playlists matching filters`);
}

// ============================
// Card Interactions
// ============================
function handleCardClick(event) {
    const card = event.currentTarget;
    const cardTitle = card.querySelector('.card-title').textContent;
    
    // Visual feedback
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 100);
    
    playerState.currentPlaylist = cardTitle;
    playerState.currentTime = 0;
    playerState.isPlaying = true;
    updateProgressBar();
    playPauseBtn.style.opacity = '1';
    startPlayback();
    
    showToast(`🎧 Loading: ${cardTitle}`);
}

cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

// ============================
// Navigation Functions
// ============================
function handleNavigation(navId) {
    navOptions.forEach(opt => {
        opt.classList.remove('active');
    });
    
    const selectedNav = document.getElementById(navId);
    if (selectedNav) {
        selectedNav.classList.add('active');
    }
    
    const sectionName = navId.replace('nav-', '');
    showToast(`📍 Navigating to ${sectionName.toUpperCase()}`);
}

navOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const navId = option.id;
        handleNavigation(navId);
    });
});

// ============================
// Sidebar Toggle
// ============================
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebarToggle.style.color = sidebar.classList.contains('active') ? '#1db954' : 'white';
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 600) {
        if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            sidebarToggle.style.color = 'white';
        }
    }
});

// Close sidebar when navigating on mobile
if (window.innerWidth <= 600) {
    navOptions.forEach(option => {
        option.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarToggle.style.color = 'white';
        });
    });
}

// ============================
// Playlist Creation
// ============================
if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', () => {
        const playlistName = prompt('Enter playlist name:', 'My Playlist');
        if (playlistName) {
            appState.playlists.push({
                name: playlistName,
                genre: 'all',
                songs: 0
            });
            showToast(`✨ Playlist "${playlistName}" created!`);
        }
    });
}

// ============================
// Toast Notifications
// ============================
function showToast(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ============================
// Event Listeners
// ============================
playPauseBtn.addEventListener('click', togglePlayPause);
progressBar.addEventListener('click', seekTo);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrevious);

// Search input with debounce
let searchTimeout;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });
}

// Genre filtering
genreTags.forEach(tag => {
    tag.addEventListener('click', () => {
        handleGenreFilter(tag.dataset.genre);
    });
});

progressBar.addEventListener('input', (e) => {
    playerState.currentTime = (e.target.value / 100) * playerState.duration;
    updateProgressBar();
});

// ============================
// Keyboard Shortcuts
// ============================
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        togglePlayPause();
    }
    
    if (e.code === 'ArrowRight') {
        playerState.currentTime = Math.min(playerState.currentTime + 5, playerState.duration);
        updateProgressBar();
    }
    
    if (e.code === 'ArrowLeft') {
        playerState.currentTime = Math.max(playerState.currentTime - 5, 0);
        updateProgressBar();
    }
    
    // Number keys for quick navigation
    if (e.code === 'Digit1') handleNavigation('nav-home');
    if (e.code === 'Digit2') handleNavigation('nav-search');
    if (e.code === 'Digit3') handleNavigation('nav-browse');
    if (e.code === 'Digit4') handleNavigation('nav-artists');
});

// ============================
// Initialize
// ============================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial time displays
    totalTimeDisplay.textContent = formatTime(playerState.duration);
    currentTimeDisplay.textContent = formatTime(0);
    progressBar.value = 0;
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('🎵 Spotify Clone Initialized v2.0');
    console.log('Features: Player Controls, Search, Genre Filtering, Sidebar, User Menu');
    console.log('Keyboard Shortcuts: Space (Play/Pause), Arrows (Seek), Numbers (Navigate)');
    
    showToast('Welcome to Spotify Clone! 🎉');
});

// ============================
// Performance Optimization - Event Delegation
// ============================
document.addEventListener('click', (e) => {
    if (e.target.closest('.card-play-overlay')) {
        const card = e.target.closest('.card');
        handleCardClick({ currentTarget: card });
    }
});

// ============================
// Mobile Optimization - Touch Enhancements
// ============================
const isMobile = window.innerWidth <= 600;

// Prevent double-tap zoom on buttons
const touchButtons = document.querySelectorAll('button, .badge, .card, .genre-tag');
touchButtons.forEach(btn => {
    btn.addEventListener('touchstart', function(e) {
        this.style.opacity = '0.7';
    }, { passive: true });
    
    btn.addEventListener('touchend', function(e) {
        this.style.opacity = '1';
    }, { passive: true });
});

// Improve scroll performance on mobile
if (isMobile) {
    document.documentElement.style.scrollBehavior = 'auto';
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('touchmove', function() {
            // Allow native scrolling
        }, { passive: true });
    }
}

// Handle orientation change
window.addEventListener('orientationchange', () => {
    // Reset sidebar on orientation change
    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        sidebarToggle.style.color = 'white';
    }
});

// Improve touch target size for mobile
const touchTargets = document.querySelectorAll('.player-control-icon, .nav-option, .genre-tag, .badge');
if (isMobile) {
    touchTargets.forEach(target => {
        target.style.minHeight = '44px';
        target.style.minWidth = '44px';
        target.style.display = 'flex';
        target.style.alignItems = 'center';
        target.style.justifyContent = 'center';
    });
}
