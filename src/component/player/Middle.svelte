<script>
	export let togglePlay;
</script>

<div class="middle-wrapper">
	<div class="prev">
		<svg
			width="45px"
			height="45px"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			fill="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0" />
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				<path
					fill="#ffffff"
					d="M427.6 106c15.6.1 27.7 13.8 25.7 29.3-16 124-16 117.4 0 241.4 2.5 19.8-17.4 35-35.8 27.3l-267-111.1v98.8c0 7.9-8.9 14.2-20 14.3H78.49c-11.1-.1-20-6.4-20-14.3V120.2c.1-7.8 9-14.1 20-14.2h52.01c11 .1 19.9 6.4 20 14.2v98.9l267-111.1c3.2-1.3 6.6-2 10.1-2z"
				/>
			</g>
		</svg>
	</div>
	<div class="play-pause">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="play" on:click={togglePlay}>
			<svg
				fill="#ffffff"
				width="65px"
				height="65px"
				viewBox="0 0 36.00 36.00"
				version="1.1"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				stroke="#ffffff"
				stroke-width="0.00036"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<title>play-solid</title>
					<path
						class="clr-i-solid clr-i-solid-path-1"
						d="M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z"
					/>
					<rect x="0" y="0" width="36" height="36" fill-opacity="0" />
				</g>
			</svg>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="pause" on:click={togglePlay}>
			<svg
				fill="#ffffff"
				width="65px"
				height="65px"
				viewBox="0 0 36 36"
				version="1.1"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<title>pause-solid</title>
					<rect
						class="clr-i-solid clr-i-solid-path-1"
						x="3.95"
						y="4"
						width="11"
						height="28"
						rx="2.07"
						ry="2.07"
					/>
					<rect
						class="clr-i-solid clr-i-solid-path-2"
						x="20.95"
						y="4"
						width="11"
						height="28"
						rx="2.07"
						ry="2.07"
					/>
					<rect x="0" y="0" width="36" height="36" fill-opacity="0" />
				</g>
			</svg>
		</div>
	</div>
	<div class="next">
		<svg
			width="45px"
			height="45px"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			fill="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0" />
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				<path
					fill="#fff"
					d="M84.41 106c-15.63.1-27.67 13.8-25.69 29.3 16 124 16 117.4 0 241.4-2.54 19.8 17.33 35 35.79 27.3L361.5 292.9v98.8c0 7.9 8.9 14.2 20 14.3h52c11.1-.1 20-6.4 20-14.3V120.2c-.1-7.8-9-14.1-20-14.2h-52c-11 .1-19.9 6.4-20 14.2v98.9L94.51 108c-3.2-1.3-6.63-2-10.1-2z"
				/>
			</g>
		</svg>
	</div>
</div>

<style>
	.middle-wrapper {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.play,
	.pause,
	.prev,
	.next {
		cursor: pointer;
		opacity: 0.85;
		transition: opacity 150ms ease-in-out;
	}
	.play:hover,
	.pause:hover,
	.prev:hover,
	.next:hover {
		opacity: 1;
	}
</style>
