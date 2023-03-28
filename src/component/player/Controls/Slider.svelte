<script>
	export let min;
	export let max;
	export let value;
	export let sliderElement;
	export let callback = () => {};
</script>

<input
	type="range"
	{min}
	{max}
	step="any"
	on:input={() => callback(value)}
	bind:value
	bind:this={sliderElement}
/>

<style>
</style>
