<script>
	export let handleTimelineUpdate;
	export let toggleScrubbing;
	export let timeline;
	export let previewImg;
	export let currentTimeElem;
	export let totalTimeElem;
</script>

<div class="timeline-container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="timeline"
		on:mousemove={handleTimelineUpdate}
		on:click={toggleScrubbing}
		bind:this={timeline}
	>
		<img class="preview-img" alt="preview img" bind:this={previewImg} />
		<div class="thumb-indicator" />
	</div>
	<div class="duration-container">
		<div class="current-time" bind:this={currentTimeElem}>00:00:00</div>
		/
		<div class="total-time" bind:this={totalTimeElem} />
	</div>
</div>

<style>
	.timeline-container {
		height: 7px;
		margin-inline: 0.5rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5px;
	}

	.timeline-container .timeline {
		background-color: rgba(100, 100, 100, 0.5);
		height: 4px;
		width: 100%;
		position: relative;
	}

	.timeline-container .timeline::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: calc(100% - var(--preview-position) * 100%);
		background-color: rgb(150, 150, 150);
		display: none;
	}
	.timeline-container .timeline:hover::before {
		display: block;
	}

	.timeline-container .timeline::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: calc(100% - var(--progress-position) * 100%);
		background-color: #fff;
	}

	.timeline-container .timeline .thumb-indicator {
		position: absolute;
		transform: translateX(-50%) scale(var(--scale));
		height: 200%;
		top: -50%;
		left: calc(var(--progress-position) * 100%);
		background-color: #fff;
		border-radius: 50%;
		transition: transform 150ms ease-in-out;
		aspect-ratio: 1/1;
	}

	.timeline-container .timeline .preview-img {
		position: absolute;
		height: 80px;
		aspect-ratio: 16/9;
		top: -1rem;
		transform: translate(-50%, -100%);
		left: calc(var(--preview-position) * 100%);
		border-radius: 0.25rem;
		border: 2px solid white;
		display: none;
	}
	.timeline-container .timeline:hover .preview-img {
		display: block;
	}
	.duration-container {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex-grow: 1;
	}
</style>
