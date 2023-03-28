<script>
	import FullScreen from "./Controls/FullScreen.svelte";
	import MiniPlayer from "./Controls/MiniPlayer.svelte";
	import Skip from "./Controls/Skip.svelte";
	import Speed from "./Controls/Speed.svelte";
	import Timeline from "./Controls/Timeline.svelte";
	import Volume from "./Controls/Volume.svelte";
	import Settings from "./Controls/Settings.svelte";

	export let timeline;
	export let previewImg;
	export let currentTimeElem;
	export let totalTimeElem;
	export let speedBtn;
	export let volumeSlider;
	export let volumeContainer;
	export let togglePlay;
	export let videoContainer;
	export let isSettingsActive;
	export let toggleSettings;

	export let toggleScrubbing;
	export let handleTimelineUpdate;
	export let changePlaybackSpeed;
	export let volumeSliderHandler;
	export let toggleMute;
	export let toggleFullScreenMode;
	export let toggleMiniPlayerMode;
	export let rewind;
	export let forward;

	document.addEventListener("keydown", (e) => {
		const tagName = document.activeElement.tagName.toLowerCase();

		if (tagName === "input") return;

		switch (e.key.toLowerCase()) {
			case " ":
				if (tagName === "button") return;
			case "k":
				togglePlay();
				break;
			case "f":
				toggleFullScreenMode();
				break;
			case "t":
				toggleTheaterMode();
				break;
			case "i":
				toggleMiniPlayerMode();
				break;
			case "m":
				toggleMute();
				break;
			case "arrowleft":
			case "a":
				rewind();
				break;
			case "arrowright":
			case "d":
				forward();
				break;
		}
	});
	document.addEventListener("fullscreenchange", () => {
		videoContainer.classList.toggle(
			"full-screen",
			document.fullscreenElement
		);
	});
</script>

<div class="controls-wrapper">
	<Timeline
		bind:timeline
		bind:previewImg
		bind:currentTimeElem
		bind:totalTimeElem
		{handleTimelineUpdate}
		{toggleScrubbing}
	/>
	<div class="controls">
		<div class="first">
			<Skip {rewind} {forward} />
			<Volume
				bind:volumeSlider
				bind:volumeContainer
				{volumeSliderHandler}
				{toggleMute}
			/>
		</div>
		<div class="second">
			<Speed bind:speedBtn {changePlaybackSpeed} />
			<Settings bind:isSettingsActive {toggleSettings} />
			<MiniPlayer {toggleMiniPlayerMode} />
			<FullScreen {toggleFullScreenMode} />
		</div>
	</div>
</div>

<style>
	.controls-wrapper {
		width: 90%;
	}

	.controls-wrapper .controls {
		display: flex;
		gap: 0.5rem;
		padding: 0.25rem;
		align-items: center;
		justify-content: space-between;
	}

	.controls-wrapper .controls .first,
	.controls-wrapper .controls .second {
		display: flex;
		gap: 0.5rem;
		padding: 0.25rem;
		align-items: center;
	}
</style>
