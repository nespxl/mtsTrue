<script>
	import OutClick from "svelte-outclick";
	import Slider from "../Controls/Slider.svelte";
	import { changeBrigthnessParameters } from "./brightness";
	export let toggleSettings;
	// export let video;
	export let ctx;
	let iconSize = 36;
	const paramsNames = [
		{ name: "palette", title: "Настройка цветовой палитры" },
		{
			name: "brightness",
			title: "Настройка яркости и контрастности",
		},
		{ name: "epileptic", title: "Защита от эпилептического припадка" },
		{ name: "save", title: "Сохранение настроек" },
		{ name: "presets", title: "Предустановки" },
	];
	let activeParamIndex = 0;
	function setActiveParamIndex(n) {
		activeParamIndex = n;
	}

	export let brightnessParams;
</script>

<OutClick on:outclick={toggleSettings()}>
	<div
		class="settings-popup-wrapper"
		on:contextmenu={(e) => {
			// e.preventDefault();
			e.stopPropagation();
		}}
	>
		<div class="settings-header">
			<ul class="settings-list">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="setting_btn" on:click={() => setActiveParamIndex(0)}>
					<svg
						fill="#ffffff"
						height={`${iconSize}px`}
						width={`${iconSize}px`}
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 512 512"
						xml:space="preserve"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier">
							<g>
								<g>
									<path
										d="M256,0C114.842,0,0,114.84,0,256s114.842,256,256,256s256-114.84,256-256S397.158,0,256,0z M458.897,174.829h-182.65 L376.978,74.098C413.516,98.478,442.326,133.558,458.897,174.829z M212.293,41.858c14.128-2.88,28.744-4.394,43.707-4.394 c30.782,0,60.094,6.411,86.685,17.947L212.293,185.802V41.858z M174.829,53.103v182.65L74.098,135.022 C98.478,98.484,133.558,69.674,174.829,53.103z M43.707,307.901c-4.07-16.644-6.244-34.022-6.244-51.901 c0-30.784,6.411-60.094,17.946-86.684l130.393,130.391H43.707V307.901z M53.103,337.171h182.65L135.022,437.902 C98.484,413.522,69.674,378.442,53.103,337.171z M299.707,470.143c-14.128,2.878-28.744,4.394-43.707,4.394 c-30.782-0.001-60.094-6.412-86.685-17.949l130.393-130.391V470.143z M299.707,273.217l-26.49,26.49h-34.434l-26.49-26.49v-34.433 l26.49-26.49h34.434l26.49,26.489V273.217z M337.171,458.897v-182.65l100.732,100.732 C413.522,413.516,378.442,442.326,337.171,458.897z M326.329,212.293h143.813c2.88,14.128,4.394,28.743,4.394,43.707 c0,30.784-6.411,60.094-17.946,86.684L326.329,212.293z"
									/>
								</g>
							</g>
						</g></svg
					>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="setting_btn" on:click={() => setActiveParamIndex(1)}>
					<svg
						width={`${iconSize}px`}
						height={`${iconSize}px`}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier">
							<path
								d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
								stroke="#ffffff"
								stroke-width="2"
							/>
							<path
								d="M12 3V21"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 8.00002L16.5 4.40002"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 13L19.5 7"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 18L20.75 11"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g></svg
					>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="setting_btn" on:click={() => setActiveParamIndex(2)}>
					<svg
						fill="#ffffff"
						width={`${iconSize}px`}
						height={`${iconSize}px`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier"
							><path
								d="M16.574 16.338c-.757-1.051-2.851-3.824-4.57-6.106.696-.999 1.251-1.815 1.505-2.242 1.545-2.594.874-4.26.022-5.67C12.677.909 12.542.094 10 .094c-2.543 0-2.678.815-3.531 2.227-.854 1.41-1.524 3.076.021 5.67.254.426.809 1.243 1.506 2.242-1.72 2.281-3.814 5.055-4.571 6.106-.176.244-.16.664.009 1.082.13.322.63 1.762.752 2.064.156.389.664.67 1.082.092.241-.334 2.582-3.525 4.732-6.522 2.149 2.996 4.491 6.188 4.732 6.522.417.578.926.297 1.082-.092.122-.303.622-1.742.752-2.064.167-.419.184-.839.008-1.083zm-6.94-9.275C8.566 5.579 7.802 3.852 7.802 3.852s.42-.758 2.198-.758 2.198.758 2.198.758-.766 1.727-1.833 3.211L10 7.56a40.64 40.64 0 0 1-.366-.497z"
							/></g
						></svg
					>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="setting_btn" on:click={() => setActiveParamIndex(3)}>
					<svg
						width={`${iconSize}px`}
						height={`${iconSize}px`}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier">
							<path
								d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z"
								fill="#ffffff"
							/>
							<path
								d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z"
								fill="#ffffff"
							/>
							<path
								d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z"
								fill="#ffffff"
							/>
						</g></svg
					>
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="setting_btn" on:click={() => setActiveParamIndex(4)}>
					<svg
						width={`${iconSize}px`}
						height={`${iconSize}px`}
						viewBox="0 0 22 22"
						xmlns:dc="http://purl.org/dc/elements/1.1/"
						xmlns:cc="http://creativecommons.org/ns#"
						xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
						xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
						id="svg2"
						version="1.1"
						inkscape:version="0.92.1 r15371"
						sodipodi:docname="dark_preset-switcher.svg"
						fill="#ffffff"
						><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><g id="SVGRepo_iconCarrier">
							<sodipodi:namedview
								id="base"
								pagecolor="#fffffff"
								bordercolor="#fffffff"
								borderopacity="1.0"
								inkscape:pageopacity="0.0"
								inkscape:pageshadow="2"
								inkscape:zoom="9.326725"
								inkscape:cx="-7.8576884"
								inkscape:cy="9.3026496"
								inkscape:document-units="px"
								inkscape:current-layer="layer1"
								showgrid="true"
								units="px"
								borderlayer="true"
								inkscape:showpageshadow="false"
								inkscape:window-width="1884"
								inkscape:window-height="1051"
								inkscape:window-x="0"
								inkscape:window-y="0"
								inkscape:window-maximized="1"
							>
								<sodipodi:guide
									position="2,20.000017"
									orientation="18,0"
									id="guide4066"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="2,2.0000174"
									orientation="0,18"
									id="guide4068"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="20,2.0000174"
									orientation="-18,0"
									id="guide4070"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="20,20.000017"
									orientation="0,-18"
									id="guide4072"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="3,19.000017"
									orientation="16,0"
									id="guide4074"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="3,3.0000174"
									orientation="0,16"
									id="guide4076"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="19,3.0000174"
									orientation="-16,0"
									id="guide4078"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="19,19.000017"
									orientation="0,-16"
									id="guide4080"
									inkscape:locked="false"
								/> <inkscape:grid type="xygrid" id="grid4101" />
								<sodipodi:guide
									position="8,19.000017"
									orientation="0,-5"
									id="guide4124"
									inkscape:locked="false"
								/>
								<sodipodi:guide
									position="11,3.0000174"
									orientation="0,4"
									id="guide4241"
									inkscape:locked="false"
								/>
							</sodipodi:namedview>
							<metadata id="metadata7">
								<rdf:rdf>
									<cc:work>
										<dc:format>image/svg+xml</dc:format>
										<dc:type
											rdf:resource="http://purl.org/dc/dcmitype/StillImage"
										/> <dc:title /> <dc:date>2017</dc:date>
										<dc:creator>
											<cc:agent>
												<dc:title
													>Timothée Giet and David
													Revoy</dc:title
												>
											</cc:agent>
										</dc:creator> <dc:description />
										<cc:license
											rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"
										/>
									</cc:work>
									<cc:license
										rdf:about="http://creativecommons.org/licenses/by-sa/4.0/"
									>
										<cc:permits
											rdf:resource="http://creativecommons.org/ns#Reproduction"
										/>
										<cc:permits
											rdf:resource="http://creativecommons.org/ns#Distribution"
										/>
										<cc:requires
											rdf:resource="http://creativecommons.org/ns#Notice"
										/>
										<cc:requires
											rdf:resource="http://creativecommons.org/ns#Attribution"
										/>
										<cc:permits
											rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
										/>
										<cc:requires
											rdf:resource="http://creativecommons.org/ns#ShareAlike"
										/>
									</cc:license>
								</rdf:rdf>
							</metadata>
							<g
								inkscape:label="Capa 1"
								inkscape:groupmode="layer"
								id="layer1"
								transform="translate(0 -1030.362)"
							>
								<path
									inkscape:connector-curvature="0"
									style="display:inline;opacity:.98999999;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:1;stroke-opacity:1"
									d="M12 1042.362v7h7v-7zm4 2h1v1h-1v2h-2v-2h2z"
									id="path4200-7"
									sodipodi:nodetypes="cccccccccccccc"
								/>
								<path
									style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
									d="m15 1033.362-3 2.5 3 2.5v-2h3v4h1v-5h-4z"
									id="path4523"
									inkscape:connector-curvature="0"
									sodipodi:nodetypes="cccccccccc"
								/>
								<path
									inkscape:connector-curvature="0"
									style="display:inline;opacity:.98999999;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:1;stroke-opacity:1"
									d="M3 1033.362v7h7v-7zm4 2h1v1H7v2H5v-2h2z"
									id="path4200-7-3"
									sodipodi:nodetypes="cccccccccccccc"
								/>
								<path
									style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
									d="m7 1049.362 3-2.5-3-2.5v2H4v-4H3v5h4z"
									id="path4523-6"
									inkscape:connector-curvature="0"
									sodipodi:nodetypes="cccccccccc"
								/>
							</g>
						</g></svg
					>
				</li>
			</ul>
		</div>
		<div class="settings-body">
			<span class="body-title">{paramsNames[activeParamIndex].title}</span
			>
			<div class="body-data">
				{#if activeParamIndex == 0}
					{paramsNames[0].name}
				{:else if activeParamIndex == 1}
					<div class="body-slider-item">
						Яркость:<Slider
							min={0}
							max={200}
							bind:value={brightnessParams[0].value}
							callback={(value) =>
								changeBrigthnessParameters(
									ctx,
									value,
									brightnessParams[1].value,
									brightnessParams[2].value
								)}
						/>
					</div>
					<div class="body-slider-item">
						Контрастность:<Slider
							min={0}
							max={360}
							bind:value={brightnessParams[1].value}
							callback={(value) =>
								changeBrigthnessParameters(
									ctx,
									brightnessParams[0].value,
									value,
									brightnessParams[2].value
								)}
						/>
					</div>
					<div class="body-slider-item">
						Насыщенность:<Slider
							min={0}
							max={200}
							bind:value={brightnessParams[2].value}
							callback={(value) =>
								changeBrigthnessParameters(
									ctx,
									brightnessParams[0].value,
									brightnessParams[1].value,
									value
								)}
						/>
					</div>
					<div class="body-slider-item">
						Резкость:<Slider
							min={0}
							max={1}
							bind:value={brightnessParams[3].value}
						/>
					</div>
				{:else if activeParamIndex == 2}
					{paramsNames[2].name}
				{:else if activeParamIndex == 3}
					{paramsNames[3].name}
				{:else if activeParamIndex == 4}
					{paramsNames[4].name}
				{/if}
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="settings-close setting_btn" on:click={toggleSettings}>
			<svg
				width="36px"
				height="36px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<g id="Menu / Close_SM">
						<path
							id="Vector"
							d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</g>
			</svg>
		</div>
	</div>
</OutClick>

<style>
	.setting_btn {
		opacity: 0.85;
		transition: opacity 150ms ease-in-out;
	}
	.setting_btn:hover {
		opacity: 1;
	}
	.settings-popup-wrapper {
		width: 30%;
		height: 45%;
		padding: 25px 20px;
		background: rgba(18, 18, 18, 0.75);
		color: #fff;
		position: absolute;
		z-index: 100000;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 5px;
	}
	.settings-close {
		cursor: pointer;
		position: absolute;
		top: 8px;
		right: 8px;
	}

	.settings-header {
		/* background: red; */
		padding: 15px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.9);
	}
	.settings-header ul {
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.settings-header ul li {
		cursor: pointer;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.settings-body {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.settings-body .body-data {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.settings-body .body-title {
		font-size: 18px;
	}
	.body-slider-item {
		display: flex;
		gap: 3px;
		align-items: center;
	}
</style>
