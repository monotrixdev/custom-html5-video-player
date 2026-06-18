# 🎬 Custom Video Player

A modern, lightweight, fully customizable HTML5 video player built with pure JavaScript. Includes playback controls, speed selection, fullscreen support, volume management, loading indicators, overlay banners, keyboard shortcuts, and a clean user experience.

Perfect for streaming websites, educational platforms, movie sites, media projects, and personal web applications.

---

## ✨ Features

- ▶️ Play / Pause Controls
- ⏩ Forward 10 Seconds
- ⏪ Rewind 10 Seconds
- 🔊 Volume Control
- 🔇 Mute / Unmute
- ⚡ Playback Speed Selector
- 📺 Fullscreen Support
- 📊 Video Progress Bar
- ⌛ Loading Spinner
- 🖼️ Custom Overlay Banner
- ⌨️ Keyboard Shortcuts
- 📱 Responsive Design
- 🚀 Pure JavaScript (No Framework Required)

---

## 📸 Preview

<img src="https://via.placeholder.com/1200x650?text=Custom+Video+Player" alt="Custom Video Player Preview">

---

# 📂 Project Structure

```bash
project/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

---

# 🚀 Getting Started

Simply include the required files in your project.

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

---

# 🎥 Setting Video Source

Replace the `src` attribute inside the video tag.

```html
<video
    id="video"
    src="YOUR_VIDEO_URL_HERE">
</video>
```

### Example

```html
<video
    id="video"
    src="https://example.com/video.mp4">
</video>
```

You can use:

- MP4 Files
- HLS Streams
- CDN Video URLs
- Direct Video Links

---

# 🖼️ Setting Overlay Banner

The player supports a custom banner image before video playback.

Update the `data-src` attribute:

```html
<div
    id="overLayBanner"
    data-src="https://your-image-url.com/banner.jpg"
    class="overLayBanner">
</div>
```

### Example

```html
<div
    id="overLayBanner"
    data-src="https://i.ytimg.com/vi/example/maxresdefault.jpg"
    class="overLayBanner">
</div>
```

The banner automatically disappears when playback starts.

---

# ⚡ Playback Speed Options

Available speed controls:

- 0.5x
- 1x
- 1.25x
- 1.5x
- 2x

The player automatically updates the selected speed.

---

# ⌨️ Keyboard Shortcuts

| Key | Action |
|------|---------|
| Space | Play / Pause |
| K | Play / Pause |
| M | Mute / Unmute |
| F | Fullscreen |
| J | Rewind |
| L | Forward |

---

# 🎮 Controls Included

### Playback

```js
video.play();
video.pause();
```

### Seek Forward

```js
video.currentTime += 10;
```

### Seek Backward

```js
video.currentTime -= 10;
```

### Change Speed

```js
video.playbackRate = 1.5;
```

### Fullscreen

```js
video.requestFullscreen();
```

### Mute

```js
video.muted = true;
```

---

# 📱 Browser Support

✔ Google Chrome

✔ Microsoft Edge

✔ Mozilla Firefox

✔ Safari

✔ Opera

✔ Android Browsers

✔ iOS Browsers

---

# 🛠 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts

---

# 🌟 Use Cases

- Movie Streaming Websites
- Online Courses
- Video Hosting Platforms
- Educational Projects
- Entertainment Websites
- Portfolio Projects
- Media Applications

---

# 🔒 Performance

- Lightweight
- No Dependencies
- Fast Loading
- Mobile Friendly
- SEO Friendly
- Easy Integration

---

# ❤️ Credits

### Developer

**Sabbir Ahmed**

GitHub: https://github.com/monotrixdev

---

### Resources Used

#### Font Awesome

https://fontawesome.com

#### Google Fonts

https://fonts.google.com

#### HTML5 Video API

https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the project and submit a pull request.

---

# ⭐ Support

If you like this project, please give it a star on GitHub.

It helps support future development and improvements.

---

# 📜 License

MIT License

Copyright (c) 2026 Sabbir Ahmed (MonotrixDev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.