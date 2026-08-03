const mockData = {
  songs: [
    {
      id: "1",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      coverUrl: "https://picsum.photos/seed/afterhours/300/300",
      lyrics: "[00:00] I've been on my own for long enough...\n[00:15] Maybe you can show me how to love, maybe...\n[00:30] I'm going through withdrawals...\n[00:45] You don't even have to do too much..."
    },
    {
      id: "2",
      title: "Starboy",
      artist: "The Weeknd",
      album: "Starboy",
      duration: "3:50",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      coverUrl: "https://picsum.photos/seed/starboy/300/300",
      lyrics: "[00:00] I'm tryna put you in the worst mood, ah...\n[00:20] P1 cleaner than your church shoes, ah...\n[00:40] Look what you've done! I'm a motherf***ing starboy!"
    },
    {
      id: "3",
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      duration: "3:53",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      coverUrl: "https://picsum.photos/seed/divide/300/300",
      lyrics: "[00:00] The club isn't the best place to find a lover...\n[00:18] Me and my friends at the table doing shots...\n[00:35] Boy, let's not talk too much..."
    },
    {
      id: "4",
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      coverUrl: "https://picsum.photos/seed/dua/300/300",
      lyrics: "[00:00] If you wanna run away with me, I know a galaxy...\n[00:16] I got you, moonlight, you're my starlight..."
    },

    {
      id: "5",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      coverUrl: "https://picsum.photos/seed/afterhours/300/300",
      lyrics: "[00:00] I've been on my own for long enough...\n[00:15] Maybe you can show me how to love, maybe...\n[00:30] I'm going through withdrawals...\n[00:45] You don't even have to do too much..."
    },
    {
      id: "6",
      title: "Starboy",
      artist: "The Weeknd",
      album: "Starboy",
      duration: "3:50",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      coverUrl: "https://picsum.photos/seed/starboy/300/300",
      lyrics: "[00:00] I'm tryna put you in the worst mood, ah...\n[00:20] P1 cleaner than your church shoes, ah...\n[00:40] Look what you've done! I'm a motherf***ing starboy!"
    },
    {
      id: "7",
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      duration: "3:53",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      coverUrl: "https://picsum.photos/seed/divide/300/300",
      lyrics: "[00:00] The club isn't the best place to find a lover...\n[00:18] Me and my friends at the table doing shots...\n[00:35] Boy, let's not talk too much..."
    },
    {
      id: "8",
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      coverUrl: "https://picsum.photos/seed/dua/300/300",
      lyrics: "[00:00] If you wanna run away with me, I know a galaxy...\n[00:16] I got you, moonlight, you're my starlight..."
    },

     {
      id: "9",
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      coverUrl: "https://picsum.photos/seed/afterhours/300/300",
      lyrics: "[00:00] I've been on my own for long enough...\n[00:15] Maybe you can show me how to love, maybe...\n[00:30] I'm going through withdrawals...\n[00:45] You don't even have to do too much..."
    },
    {
      id: "10",
      title: "Starboy",
      artist: "The Weeknd",
      album: "Starboy",
      duration: "3:50",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      coverUrl: "https://picsum.photos/seed/starboy/300/300",
      lyrics: "[00:00] I'm tryna put you in the worst mood, ah...\n[00:20] P1 cleaner than your church shoes, ah...\n[00:40] Look what you've done! I'm a motherf***ing starboy!"
    },
    {
      id: "11",
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      duration: "3:53",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      coverUrl: "https://picsum.photos/seed/divide/300/300",
      lyrics: "[00:00] The club isn't the best place to find a lover...\n[00:18] Me and my friends at the table doing shots...\n[00:35] Boy, let's not talk too much..."
    },
    {
      id: "12",
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      coverUrl: "https://picsum.photos/seed/dua/300/300",
      lyrics: "[00:00] If you wanna run away with me, I know a galaxy...\n[00:16] I got you, moonlight, you're my starlight..."
    }


  ],
  albums: [
    { id: "alb1", title: "After Hours", artist: "The Weeknd", coverUrl: "https://picsum.photos/seed/afterhours/300/300" },
    { id: "alb2", title: "Divide", artist: "Ed Sheeran", coverUrl: "https://picsum.photos/seed/divide/300/300" },
    { id: "alb3", title: "Future Nostalgia", artist: "Dua Lipa", coverUrl: "https://picsum.photos/seed/dua/300/300" }
  ],
  artists: [
    { id: "art1", name: "The Weeknd", coverUrl: "https://picsum.photos/seed/weeknd/300/300" },
    { id: "art2", name: "Ed Sheeran", coverUrl: "https://picsum.photos/seed/edsheeran/300/300" },
    { id: "art3", name: "Dua Lipa", coverUrl: "https://picsum.photos/seed/dualipa/300/300" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentSongIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let playlist = [...mockData.songs];
  let likedSongIds = JSON.parse(localStorage.getItem("spotify_liked")) || [];
  let recentSongIds = JSON.parse(localStorage.getItem("spotify_recent")) || [];

  // DOM Elements
  const audio = document.getElementById("audioEngine");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const progressBar = document.getElementById("progressBar");
  const volumeSlider = document.getElementById("volumeSlider");
  const currentTimeEl = document.getElementById("currentTime");
  const durationTimeEl = document.getElementById("durationTime");
  
  const playerCover = document.getElementById("playerCover");
  const playerTitle = document.getElementById("playerTitle");
  const playerArtist = document.getElementById("playerArtist");
  const likeBtn = document.getElementById("likeBtn");

  const searchContainer = document.getElementById("searchContainer");
  const searchInput = document.getElementById("searchInput");
  const mobileToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  // Initialize
  initUI();
  setupEventListeners();

  function initUI() {
    renderFeatured();
    renderArtists();
    renderAlbums();
    renderLikedSongs();
    renderRecentSongs();
  }

  function setupEventListeners() {
    // Navigation
    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetView = item.getAttribute("data-target");
        switchView(targetView);
      });
    });

    // Mobile Menu
    mobileToggle?.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // Audio Controls
    playBtn.addEventListener("click", togglePlay);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrev);

    audio.addEventListener("timeupdate", updateProgress);
    progressBar.addEventListener("input", seekAudio);
    volumeSlider.addEventListener("input", adjustVolume);

    shuffleBtn.addEventListener("click", () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle("active", isShuffle);
    });

    repeatBtn.addEventListener("click", () => {
      isRepeat = !isRepeat;
      repeatBtn.classList.toggle("active", isRepeat);
    });

    audio.addEventListener("ended", () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNext();
      }
    });

    likeBtn.addEventListener("click", toggleLikeCurrentSong);

    // Search Input Event
    searchInput?.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = mockData.songs.filter(s => 
        s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query)
      );
      renderSongList(document.getElementById("searchResults"), filtered);
    });
  }

  // View Switcher
  function switchView(viewName) {
    document.querySelectorAll(".view-section").forEach(el => el.classList.add("hidden"));
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
    
    searchContainer.classList.add("hidden");

    const activeNav = document.querySelector(`.nav-item[data-target="${viewName}"]`);
    if (activeNav) activeNav.classList.add("active");

    if (viewName === "search") {
      searchContainer.classList.remove("hidden");
      renderSongList(document.getElementById("searchResults"), mockData.songs);
    }

    const viewTarget = document.getElementById(`view-${viewName}`);
    if (viewTarget) viewTarget.classList.remove("hidden");
    
    sidebar.classList.remove("open");
  }

  // Load and Play Audio
  function loadSong(song) {
    audio.src = song.audioUrl;
    playerCover.src = song.coverUrl;
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    updateLikeButton(song.id);

    // Save to Recently Played
    if (!recentSongIds.includes(song.id)) {
      recentSongIds.unshift(song.id);
      localStorage.setItem("spotify_recent", JSON.stringify(recentSongIds));
      renderRecentSongs();
    }
  }

  function playSong(songIndex) {
    currentSongIndex = songIndex;
    loadSong(playlist[currentSongIndex]);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }

  function togglePlay() {
    if (!audio.src) {
      playSong(0);
      return;
    }
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
    updatePlayPauseIcon();
  }

  function updatePlayPauseIcon() {
    playBtn.innerHTML = isPlaying 
      ? '<i class="fa-solid fa-pause"></i>' 
      : '<i class="fa-solid fa-play"></i>';
  }

  function playNext() {
    if (isShuffle) {
      currentSongIndex = Math.floor(Math.random() * playlist.length);
    } else {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
    }
    playSong(currentSongIndex);
  }

  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
  }

  function updateProgress() {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progressPercent;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationTimeEl.textContent = formatTime(audio.duration);
    }
  }

  function seekAudio() {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }

  function adjustVolume() {
    audio.volume = volumeSlider.value / 100;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Local Storage & Likes
  function toggleLikeCurrentSong() {
    const currentSong = playlist[currentSongIndex];
    if (!currentSong) return;

    if (likedSongIds.includes(currentSong.id)) {
      likedSongIds = likedSongIds.filter(id => id !== currentSong.id);
    } else {
      likedSongIds.push(currentSong.id);
    }
    localStorage.setItem("spotify_liked", JSON.stringify(likedSongIds));
    updateLikeButton(currentSong.id);
    renderLikedSongs();
  }

  function updateLikeButton(songId) {
    if (likedSongIds.includes(songId)) {
      likeBtn.innerHTML = '<i class="fa-solid fa-heart" style="color: #1db954;"></i>';
    } else {
      likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  }

  // Dynamic Renderers
  function renderFeatured() {
    const container = document.getElementById("featuredGrid");
    container.innerHTML = mockData.songs.map((song, idx) => `
      <div class="card" onclick="window.playSelectedSong(${idx})">
        <img src="${song.coverUrl}" alt="${song.title}">
        <h4>${song.title}</h4>
        <p style="color: #b3b3b3; font-size: 12px;">${song.artist}</p>
      </div>
    `).join("");
  }

  function renderArtists() {
    const container = document.getElementById("artistsGrid");
    container.innerHTML = mockData.artists.map(art => `
      <div class="card">
        <img src="${art.coverUrl}" style="border-radius: 50%;" alt="${art.name}">
        <h4>${art.name}</h4>
        <p style="color: #b3b3b3; font-size: 12px;">Artist</p>
      </div>
    `).join("");
  }

  function renderAlbums() {
    const container = document.getElementById("albumsGrid");
    container.innerHTML = mockData.albums.map(alb => `
      <div class="card">
        <img src="${alb.coverUrl}" alt="${alb.title}">
        <h4>${alb.title}</h4>
        <p style="color: #b3b3b3; font-size: 12px;">${alb.artist}</p>
      </div>
    `).join("");
  }

  function renderSongList(container, songs) {
    if (!container) return;
    container.innerHTML = songs.map((song, idx) => `
      <div class="song-row" onclick="window.playSelectedSong(${idx})">
        <span>${idx + 1}</span>
        <div>
          <div>${song.title}</div>
          <div style="font-size: 12px; color: #b3b3b3;">${song.artist}</div>
        </div>
        <span>${song.album}</span>
        <span>${song.duration}</span>
      </div>
    `).join("");
  }

  function renderLikedSongs() {
    const liked = mockData.songs.filter(s => likedSongIds.includes(s.id));
    renderSongList(document.getElementById("likedList"), liked);
  }

  function renderRecentSongs() {
    const recent = recentSongIds.map(id => mockData.songs.find(s => s.id === id)).filter(Boolean);
    renderSongList(document.getElementById("recentList"), recent);
  }

  // Global helper for playing from grid click
  window.playSelectedSong = function(index) {
    playSong(index);
  };
});


// Global Queue State & Panel References
const queueToggleBtn = document.getElementById("queueToggle");
const rightPanel = document.getElementById("rightPanel");
const panelTitle = document.getElementById("panelTitle");
const panelContent = document.getElementById("panelContent");
const closePanelBtn = document.getElementById("closePanel");

// Queue Toggle Toggle Open/Close
queueToggleBtn?.addEventListener("click", () => {
  if (rightPanel.classList.contains("hidden")) {
    panelTitle.textContent = "Queue";
    renderQueueList();
    rightPanel.classList.remove("hidden");
  } else {
    rightPanel.classList.add("hidden");
  }
});

closePanelBtn?.addEventListener("click", () => {
  rightPanel.classList.add("hidden");
});

// Render Queue Function
function renderQueueList() {
  if (!panelContent) return;
  panelContent.innerHTML = "";

  if (!playlist || playlist.length === 0) {
    panelContent.innerHTML = "<p style='color:#b3b3b3; padding:16px;'>Queue is empty</p>";
    return;
  }

  playlist.forEach((song, index) => {
    const isCurrent = index === currentSongIndex;
    const queueCard = document.createElement("div");

    queueCard.className = "queue-item";
    queueCard.setAttribute("draggable", "true");
    queueCard.dataset.index = index;

    queueCard.innerHTML = `
      <div class="drag-handle"><i class="fa-solid fa-grip-lines"></i></div>
      <div class="queue-item-info">
        <img src="${song.coverUrl}" alt="${song.title}">
        <div>
          <div style="font-weight: 600; font-size: 14px; color: ${isCurrent ? '#1db954' : '#fff'}">
            ${song.title} ${isCurrent ? '▶' : ''}
          </div>
          <div style="font-size: 12px; color: #b3b3b3;">${song.artist}</div>
        </div>
      </div>
      <span style="font-size: 12px; color: #b3b3b3;">${song.duration}</span>
    `;

    // Click to play directly from queue
    queueCard.addEventListener("click", (e) => {
      // Don't trigger play if dragging
      if (e.target.closest('.drag-handle')) return;
      playSong(index);
      renderQueueList();
    });

    panelContent.appendChild(queueCard);
  });

  setupDragAndDrop();
}

// Simple Drag and Drop Event Listeners
let draggedItemIndex = null;

function setupDragAndDrop() {
  const items = panelContent.querySelectorAll(".queue-item");

  items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
      draggedItemIndex = parseInt(item.dataset.index);
      item.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });

    item.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    item.addEventListener("drop", (e) => {
      e.preventDefault();
      const targetIndex = parseInt(item.dataset.index);

      if (draggedItemIndex !== null && draggedItemIndex !== targetIndex) {
        // Re-order Array
        const movedSong = playlist.splice(draggedItemIndex, 1)[0];
        playlist.splice(targetIndex, 0, movedSong);

        // Adjust Current Song Track Index
        if (currentSongIndex === draggedItemIndex) {
          currentSongIndex = targetIndex;
        } else if (draggedItemIndex < currentSongIndex && targetIndex >= currentSongIndex) {
          currentSongIndex--;
        } else if (draggedItemIndex > currentSongIndex && targetIndex <= currentSongIndex) {
          currentSongIndex++;
        }

        renderQueueList();
      }
    });
  });
}

function loadSong(song) {
  audio.src = song.audioUrl;
  playerCover.src = song.coverUrl;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  updateLikeButton(song.id);

  // 🔴 यह वाली लाइन जोड़ें:
  if (!rightPanel.classList.contains("hidden")) {
    renderQueueList();
  }
}