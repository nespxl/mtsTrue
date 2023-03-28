<script>
	import Controls from "./Controls.svelte";
	import Info from "./Info.svelte";
	import Middle from "./Middle.svelte";
	import SettingsPopUp from "./Settings/SettingsPopUp.svelte";

	import {
		volumeChangeFunction,
		skipFunction,
		volumeSliderFunction,
		toggleMuteFunction,
		changePlaybackSpeedFunction,
		toggleMiniPlayerModeFunction,
		toggleFullScreenModeFunction,
		toggleScrubbingFunction,
		handleTimelineUpdateFunction,
	} from "./utils";

	import { sharpen } from "./video";

	let speedBtn;
	let currentTimeElem;
	let totalTimeElem;
	let previewImg;
	let volumeSlider;
	let volumeContainer;
	let videoContainer;
	let timeline;
	let video;
	let videoCopy;

	let canvas, ctx, canvas_temp, ctx_temp;

	let brightnessParams = [
		{ name: "brightness", value: "100" },
		{ name: "contrast", value: "100" },
		{ name: "saturation", value: "100" },
		{ name: "sharpness", value: "0" },
	];

	let srcVideo = "assets/Video.mp4";
	const hideTime = 2000;
	let isSettingsActive = true;

	document.addEventListener("fullscreenchange", () => {
		videoContainer.classList.toggle(
			"full-screen",
			document.fullscreenElement
		);
	});
	function onVideoLoaded() {
		videoCopy = video.cloneNode();
		videoCopy.muted = true;
		canvas.width = video.offsetWidth;
		canvas.height = video.offsetHeight;
		ctx = canvas.getContext("2d");

		canvas_temp = document.createElement("canvas");
		canvas_temp.setAttribute("width", canvas.width);
		canvas_temp.setAttribute("height", canvas.height);
		ctx_temp = canvas_temp.getContext("2d");
		video.addEventListener("play", () => {
			computeFrame(video, ctx, ctx_temp);
			videoContainer.classList.remove("paused");
		});
	}

	function computeFrame(video, ctx, ctx_temp) {
		if (video.paused) return;
		ctx.canvas.width = video.offsetWidth;
		ctx.canvas.height = video.offsetHeight;
		ctx_temp.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
		console.log(brightnessParams[2].value);
		if (
			brightnessParams[3].value != 0 //Sharpness
		) {
			sharpen(ctx_temp, brightnessParams[3].value);
		}
		let frame = ctx_temp.getImageData(
			0,
			0,
			video.offsetWidth,
			video.offsetHeight
		);
		ctx.putImageData(frame, 0, 0);

		setTimeout(() => computeFrame(video, ctx, ctx_temp), 0);
	}

	let hideTimer;
	function handleHideControls(e) {
		videoContainer.dataset.hide = "show";
		clearTimeout(hideTimer);
		hideTimer = setTimeout(() => {
			videoContainer.dataset.hide = "hide";
		}, hideTime);
	}
	// Timeline
	document.addEventListener("mouseup", (e) => {
		if (isScrubbing) toggleScrubbing(e);
	});
	document.addEventListener("mousemove", (e) => {
		if (isScrubbing) handleTimelineUpdate(e);
	});

	function toggleScrubbing(e) {
		toggleScrubbingFunction(
			timeline,
			videoCopy,
			previewImg,
			isScrubbing,
			videoContainer,
			wasPaused,
			video,
			e
		);
	}

	function handleTimelineUpdate(e) {
		handleTimelineUpdateFunction(
			timeline,
			isScrubbing,
			videoCopy,
			video,
			previewImg,
			e
		);
	}

	//Speed
	function changePlaybackSpeed() {
		changePlaybackSpeedFunction(video, speedBtn);
	}

	//Volume
	function volumeSliderHandler(e) {
		volumeSliderFunction(video, e);
	}
	function toggleMute() {
		toggleMuteFunction(video);
	}
	function volumeChangeHandler() {
		volumeChangeFunction(
			video,
			volumeSlider,
			volumeContainer,
			videoContainer
		);
	}
	//Screen
	function toggleFullScreenMode() {
		toggleFullScreenModeFunction(videoContainer);
	}
	function toggleMiniPlayerMode() {
		toggleMiniPlayerModeFunction(videoContainer, video);
	}

	//Skip
	function rewind() {
		skipFunction(video, -10);
	}
	function forward() {
		skipFunction(video, 10);
	}

	// Time
	let isScrubbing = false;
	let wasPaused;

	function loadedDataHandler() {
		totalTimeElem.textContent = formatDuration(video.duration);
	}
	function videoTimeUpdateHandler() {
		currentTimeElem.textContent = formatDuration(video.currentTime);
		const percent = video.currentTime / video.duration;
		timeline.style.setProperty("--progress-position", percent);
	}
	const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
		minimumIntegerDigits: 2,
	});
	function formatDuration(time) {
		const seconds = Math.floor(time % 60);
		const minutes = Math.floor(time / 60) % 60;
		const hours = Math.floor(time / 3600);
		return `${hours}:${leadingZeroFormatter.format(
			minutes
		)}:${leadingZeroFormatter.format(seconds)}`;
	}

	function toggleSettings() {
		isSettingsActive = !isSettingsActive;
	}

	function togglePlay() {
		video.paused ? video.play() : video.pause();
	}
</script>

<div
	class="video-container paused"
	data-hide="show"
	on:mousemove={handleHideControls}
	on:contextmenu={(e) => {
		e.preventDefault();
		toggleSettings();
	}}
	bind:this={videoContainer}
>
	<div class="video-controls-container">
		<Info />
		<Middle {togglePlay} />
		<Controls
			bind:timeline
			bind:previewImg
			bind:currentTimeElem
			bind:totalTimeElem
			bind:speedBtn
			bind:volumeSlider
			bind:volumeContainer
			bind:video
			bind:videoCopy
			bind:videoContainer
			bind:isSettingsActive
			{togglePlay}
			{toggleSettings}
			{toggleScrubbing}
			{handleTimelineUpdate}
			{changePlaybackSpeed}
			{volumeSliderHandler}
			{toggleMute}
			{toggleFullScreenMode}
			{toggleMiniPlayerMode}
			{rewind}
			{forward}
		/>
	</div>
	<figure>
		<video
			autoplay="true"
			class="video"
			src={srcVideo}
			bind:this={video}
			on:loadedmetadata={onVideoLoaded}
			on:pause={() => {
				videoContainer.classList.add("paused");
			}}
			on:click={togglePlay}
			on:enterpictureinpicture={() => {
				videoContainer.classList.add("mini-player");
			}}
			on:leavepictureinpicture={() => {
				videoContainer.classList.remove("mini-player");
			}}
			on:volumechange={volumeChangeHandler}
			on:timeupdate={videoTimeUpdateHandler}
			on:loadeddata={loadedDataHandler}
		>
			<track kind="captions" />
		</video>
		<canvas
			id="output-canvas"
			width={"200"}
			height={"300"}
			bind:this={canvas}
		/>
	</figure>
	{#if isSettingsActive}
		<SettingsPopUp {toggleSettings} {video} {ctx} bind:brightnessParams />
	{/if}
</div>

<style>
	.video-controls-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: white;
		z-index: 100;
		opacity: 1;
		background: rgba(0, 0, 0, 0.25);
		transition: opacity 0.2s ease-in-out;
	}

	:global(.video-container.paused .play) {
		display: block;
	}

	:global(.video-container.paused .pause) {
		display: none;
	}

	:global(.video-container:not(.paused) .play) {
		display: none;
	}

	:global(.video-container:not(.paused) .pause) {
		display: block;
	}

	:global(.video-container[data-hide="show"] .video-controls-container) {
		opacity: 1;
	}

	:global(.video-container[data-hide="hide"] .video-controls-container) {
		opacity: 0;
	}

	:global(.video-container:not(:hover) .video-controls-container) {
		opacity: 0;
	}

	/* :global(.video-container.scrubbing .preview-img,
	.timeline-container:hover .preview-img) {
		display: block;
	}

	:global(.video-container.scrubbing .timeline::before,
	.timeline-container:hover .timeline::before) {
		display: block;
	}

	:global(.video-container.scrubbing .thumb-indicator,
	.timeline-container:hover .thumb-indicator) {
		--scale: 1;
	}

	:global(.video-container.scrubbing .timeline,
	.timeline-container:hover .timeline) {
		height: 100%;
	}

	:global(.video-container.scrubbing .preview-img,
	.timeline-container:hover .preview-img) {
		display: block;
	}

	:global(.video-container.full-screen .open) {
		display: none;
	}
 
	:global(.video-container:not(.full-screen) .close) {
		display: none;
	} */

	.video-container {
		position: relative;
		width: 100%;
		padding: 80px 0;
		display: flex;
		justify-content: center;
		background-color: black;
	}
	figure {
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	.video-container .video {
		max-height: 100%;
		width: 100%;
		opacity: 0;
	}
	#output-canvas {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: fit-content;
		opacity: 1;
	}
	video {
		filter: brightness(var(--brightness)) contrast(var(--contrast));
	}
</style>
