<script>
	export let speedBtn;
	export let changePlaybackSpeed;
</script>

<button
	class="speed-btn wide-btn"
	bind:this={speedBtn}
	on:click={changePlaybackSpeed}
>
	1x
</button>

<style>
	.wide-btn {
		width: 40px;
	}
</style>
