window.addEventListener('DOMContentLoaded', () => {
    const playPause = document.getElementById('playPause');
    const playBtn = document.getElementById('playBtn');
    const videoProgress = document.getElementById('progress');
    const time = document.getElementById('time');
    const muteUnmute = document.getElementById('muteUnmute');
    const volume = document.getElementById('volume');
    const fullSCreen = document.getElementById('fullscreen');
    const video = document.getElementById('video');
    const forwardRight = document.getElementById('forwardRight');
    const rewindLeft = document.getElementById('rewindLeft');
    const loader = document.getElementById('loader');
    const bannerOverlay = document.getElementById('overLayBanner');

    // This for speed //

    const speedBtn = document.getElementById('speedBtn');
    const speedMenu = document.getElementById('speedMenu');

    speedBtn.addEventListener('click', () => {
        if (speedMenu.style.display === 'flex') {
            speedMenu.style.display = 'none';
        } else {
            speedMenu.style.display = 'flex';
        }
    })

    speedMenu.querySelectorAll('div').forEach(item => {
        item.addEventListener('click', () => {
            const speed = item.dataset.speed;
            video.playbackRate = speed;
            speedBtn.textContent = speed + 'x';
            speedMenu.style.display = 'none';
        })
    })


    const overLaySrc = bannerOverlay.dataset.src;
    bannerOverlay.style.backgroundImage = `url('${overLaySrc}')`;
    bannerOverlay.style.backgroundSize = "cover";
    bannerOverlay.style.backgroundPosition = "center";
    bannerOverlay.style.backgroundRepeat = "no-repeat";

    function hideOverPlayFn() {
        bannerOverlay.style.display = 'none';
    }

    function videoFullScreenFn() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        } else {
            alert('Your browser does not support fullscreen mode.');
        }
    }

    function videoMutedFn() {
        if (video.muted) {
            video.muted = false;
            muteUnmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            video.muted = true;
            muteUnmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
    }

    function videoPauseFn() {
            video.pause();
            playPause.innerHTML = '<i class="fa-solid fa-play"></i>'
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    function showLoaderFn() {
        loader.style.display = 'flex';
    }
     function hideLoaderFn() {
        loader.style.display = 'none';
    }

    function playPauseFn() {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            playPause.innerHTML = '<i class="fa-solid fa-pause"></i>'
        } else if (!video.paused) {
            video.pause();
            playPause.innerHTML = '<i class="fa-solid fa-play"></i>'
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    }
    video.addEventListener('waiting', () => {
        showLoaderFn();
    })
    video.addEventListener('playing', () => {
        hideLoaderFn();
    })
    video.addEventListener('loadstart', () => {
        showLoaderFn();
    })
    video.addEventListener('canplay', () => {
        hideLoaderFn();
    })

    forwardRight.addEventListener('click', () => {
        video.currentTime = video.currentTime + 10;
    })
    rewindLeft.addEventListener('click', () => {
        video.currentTime = video.currentTime - 10;
    })
    playPause.addEventListener('click', () => {
        playPauseFn();
    })
    playBtn.addEventListener('click', () => {
        playPauseFn();
    })
    video.addEventListener('timeupdate', () => {
        const currentTime = video.currentTime;
        const duration = video.duration;
        videoProgress.value = (currentTime / duration * 100)
        time.innerText = `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)}:${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
    })
    video.addEventListener('ended', () => {
        if (video.paused) {
            videoPauseFn();
        }
    })
    video.addEventListener('play', () => {
        hideOverPlayFn();
    })
    videoProgress.addEventListener('input', () => {
        const duration = video.duration;
        video.currentTime = (videoProgress.value / 100) * duration;
    })
    muteUnmute.addEventListener('click', () => {
        videoMutedFn();
    })
    fullSCreen.addEventListener('click', () => {
        videoFullScreenFn();
    })
    volume.addEventListener('input', () => {
        video.volume = volume.value / 100;
        if (video.volume == 0) {
            video.muted = true;
            muteUnmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            video.muted = false;
            muteUnmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    })
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === "KeyK") {
            event.preventDefault();
            playPauseFn(); 
        } else if (event.code === 'KeyM') {
            videoMutedFn();
        } else if (event.code === 'KeyF') {
            videoFullScreenFn();
        } else if (event.code === 'KeyL') {
            video.currentTime = video.duration + 10;
        } else if (event.code === "KeyJ") {
            video.currentTime = video.duration - 10;
        }
    })

})