// Skip
function skipFunction(video, duration) {
    video.currentTime += duration;
}

//Volume
function volumeChangeFunction(video, volumeSlider, volumeContainer, videoContainer) {
    volumeSlider.value = video.volume;
    let volumeLevel;
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0;
        volumeLevel = "muted";
    } else if (video.volume >= 0.5) {
        volumeLevel = "high";
    } else {
        volumeLevel = "low";
    }
    volumeContainer.id = volumeLevel;
    videoContainer.classList.toggle("theater");
}
function volumeSliderFunction(video, e) {
    video.volume = e.target.value;
    video.muted = e.target.value === 0;
}
function toggleMuteFunction(video) {
    video.muted = !video.muted;
}

//Speed
function changePlaybackSpeedFunction(video, speedBtn) {
    let newPlaybackRate = video.playbackRate + 0.25;
    if (newPlaybackRate > 2) newPlaybackRate = 0.25;
    video.playbackRate = newPlaybackRate;
    speedBtn.textContent = `${newPlaybackRate}x`;
}

//Screen size
function toggleMiniPlayerModeFunction(videoContainer, video) {
    if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture();
    }
}
function toggleFullScreenModeFunction(videoContainer) {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

//Timeline
function handleTimelineUpdateFunction(timeline, isScrubbing, videoCopy, video, previewImg, e) {
    const rect = timeline.getBoundingClientRect();
    const percent =
        Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    if (isNaN(Math.floor(video.duration * percent))) { return }
    else {
        videoCopy.currentTime = Math.floor(video.duration * percent);
    }
    function capture(videoElement) {
        let canvas = document.createElement("canvas");
        canvas.width = 320;
        canvas.height = 180;
        canvas
            .getContext("2d")
            .drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL();
    }

    const previewImgSrc = capture(videoCopy);
    previewImg.src = previewImgSrc;
    timeline.style.setProperty("--preview-position", percent);
    if (isScrubbing) {
        e.preventDefault();
        timeline.style.setProperty("--progress-position", percent);
    }
    videoCopy.pause()
}

function toggleScrubbingFunction(timeline, videoCopy, previewImg, isScrubbing, videoContainer, wasPaused, video, e) {
    const rect = timeline.getBoundingClientRect();
    const percent =
        Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    isScrubbing = (e.buttons & 1) === 1;
    videoContainer.classList.toggle("scrubbing", isScrubbing);
    if (isScrubbing) {
        wasPaused = video.paused;
        video.pause();
    } else {
        video.currentTime = percent * video.duration;
        if (!wasPaused) video.play();
    }

    handleTimelineUpdateFunction(timeline, isScrubbing, videoCopy, video, previewImg, videoCopy, e);
}

//Animation

export {
    skipFunction,
    volumeChangeFunction,
    volumeSliderFunction,
    toggleMuteFunction,
    changePlaybackSpeedFunction,
    toggleMiniPlayerModeFunction,
    toggleFullScreenModeFunction,
    toggleScrubbingFunction,
    handleTimelineUpdateFunction,
};