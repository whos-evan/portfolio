<script lang="ts">
	import { draggable } from "@neodrag/svelte";
	import type { DragOptions } from "@neodrag/svelte";
	import { tap } from "svelte-gestures";

	import { totalWindowsOpen } from "$lib/stores";

	import Window from "$lib/components/Window.svelte";
	import DialogBox from "$lib/components/DialogBox.svelte";

	let dropdownAboutVisible = false;

	function toggleAboutDropdown() {
		// if the dropdown is being opened, close the other dropdowns
		if (!dropdownAboutVisible) {
			dropdownProjectsVisible = false;
			dropdownContactVisible = false;
		}

		dropdownAboutVisible = !dropdownAboutVisible;
	}

	let dropdownProjectsVisible = false;

	function toggleProjectsDropdown() {
		// if the dropdown is being opened, close the other dropdowns
		if (!dropdownProjectsVisible) {
			dropdownAboutVisible = false;
			dropdownContactVisible = false;
		}

		dropdownProjectsVisible = !dropdownProjectsVisible;
	}

	let dropdownContactVisible = false;

	function toggleContactDropdown() {
		// if the dropdown is being opened, close the other dropdowns
		if (!dropdownContactVisible) {
			dropdownAboutVisible = false;
			dropdownProjectsVisible = false;
		}
		dropdownContactVisible = !dropdownContactVisible;
	}

	function spawnWindow(url: string, title: string) {
		// create new draggable window
		const window = new Window({
			target: document.getElementById("content"),
			props: {
				url,
				title,
			},
		});

		// +1 to the total number of windows open
		totalWindowsOpen.update((n) => n + 1);
	}

	function spawnDialogBox(content: string, title: string) {
		// create new draggable window
		const window = new DialogBox({
			target: document.getElementById("content"),
			props: {
				content,
				title,
			},
		});

		// +1 to the total number of windows open
		totalWindowsOpen.update((n) => n + 1);
	}

	function copyAboutMe() {
		// copy the about me text to the clipboard
		navigator.clipboard.writeText(
			"I am a software developer from the United States. I am currently a student."
		);
		spawnDialogBox("Copied to clipboard!", "about me");
	}

	function copyDiscord() {
		// copy the discord tag to the clipboard
		navigator.clipboard.writeText("evan#9000");
		spawnDialogBox("Copied to clipboard!", "discord");
	}

	function poweroff() {
		// turn off the computer
		// remove all windows from the screen
		document.querySelectorAll(".userWindow").forEach((window) => {
			window.remove();
		});
		// reset the total number of windows open
		totalWindowsOpen.set(0);

		spawnDialogBox("Shutting down...", "Shutting down");

		// reset the dropdowns
		dropdownAboutVisible = false;
		dropdownProjectsVisible = false;
		dropdownContactVisible = false;

		// create a black div to cover the screen
		const blackScreen = document.createElement("div");
		// add the styles
		blackScreen.classList.add(
			"absolute",
			"top-0",
			"left-0",
			"w-full",
			"h-full",
			"bg-black",
			"z-50"
		);

		// wait 5 seconds to show the black screen
		setTimeout(() => {
			document.body.appendChild(blackScreen);
		}, 5000);
		// add the div to the screen
	}

	let options: DragOptions = {
		axis: "y",
		bounds: "parent",
	};

	// get the current time in cst
	let time = new Date().toLocaleString("en-US", {
		timeZone: "America/Chicago",
	});
	// remove the date from the time
	time = time.split(",")[1];
	// update the time every second
	setInterval(() => {
		time = new Date().toLocaleString("en-US", {
			timeZone: "America/Chicago",
		});
		time = time.split(",")[1];
	}, 1000);

	let windowHeight = 0;
	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div
	id="navBar"
	class="font-pixeloid w-full h-10 border-solid border-2 border-black bg-white rounded-t-lg"
>
	<div class="flex justify-center items-center h-full">
		<a href="/" class="ml-5">Evan</a>
		<div class="float-right w-full pl-5 gap-5 text-sm flex">
			<button class="relative" on:click={toggleAboutDropdown}>
				<span>about</span>
				<svg
					class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"
					/>
				</svg>
				<div
					class="absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"
					class:invisible={!dropdownAboutVisible}
				>
					<!-- create a window on click -->
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => spawnWindow("about", "about me")}
						>open</button
					>
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => copyAboutMe()}>copy to clipboard</button
					>
				</div>
			</button>

			<button class="relative" on:click={toggleProjectsDropdown}>
				<span>projects</span>
				<svg
					class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"
					/>
				</svg>
				<div
					class="absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"
					class:invisible={!dropdownProjectsVisible}
				>
					<a
						href="https://kazwire.com"
						target="_blank"
						rel="noreferrer"
						class="block px-4 py-2 hover:bg-gray-100">kazwire</a
					>
					<a
						href="https://elixirofficial.com"
						target="_blank"
						rel="noreferrer"
						class="block px-4 py-2 hover:bg-gray-100">elixir</a
					>
					<a
						href="https://github.com/whos-evan/twitch-spotify"
						target="_blank"
						rel="noreferrer"
						class="block px-4 py-2 hover:bg-gray-100"
						>twitch-spotify</a
					>
					<a
						href="https://github.com/whos-evan/evans_cogs"
						target="_blank"
						rel="noreferrer"
						class="block px-4 py-2 hover:bg-gray-100">evans_cogs</a
					>
				</div>
			</button>

			<button class="relative" on:click={toggleContactDropdown}>
				<span>contact</span>
				<svg
					class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"
					/>
				</svg>
				<div
					class="absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10"
					class:invisible={!dropdownContactVisible}
				>
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => spawnWindow("contact", "contact me")}
						>open</button
					>
					<a
						class="block w-full px-4 py-2 hover:bg-gray-100"
						href="mailto:coming@soon.com">email me</a
					>
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => copyDiscord()}>copy discord</button
					>
				</div>
			</button>
		</div>

		{#if windowWidth > 768}
			<div class="flex float-right min-w-fit mr-5 justify-evenly text-sm">
				<p>my time: {time}</p>
			</div>
			<div class="flex float-right mr-5 justify-evenly text-sm">
				<!-- poweroff -->
				<button
					class="w-5 h-5"
					on:click={() => {
						poweroff();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 354.965 354.965"
						style="enable-background:new 0 0 354.965 354.965;"
						xml:space="preserve"
					>
						<g>
							<g>
								<g>
									<path
										d="M177.483,176.365c-6.903,0-12.5-5.597-12.5-12.5V12.5c0-6.903,5.597-12.5,12.5-12.5c6.903,0,12.5,5.597,12.5,12.5     v151.365C189.983,170.768,184.387,176.365,177.483,176.365z"
									/>
								</g>
								<g>
									<path
										d="M177.483,354.965c-87.831,0-159.286-71.456-159.286-159.285c0-35.124,11.209-68.431,32.417-96.32     c20.515-26.979,49.637-47.061,82-56.545c6.625-1.949,13.569,1.855,15.511,8.479c1.941,6.625-1.855,13.569-8.48,15.511     C82.857,83.449,43.196,136.443,43.196,195.68c0,74.045,60.24,134.285,134.286,134.285c74.045,0,134.286-60.24,134.286-134.285     c0-59.237-39.661-112.231-96.449-128.875c-6.625-1.941-10.421-8.886-8.479-15.511c1.94-6.625,8.885-10.426,15.511-8.479     c32.364,9.484,61.484,29.566,82,56.545c21.208,27.89,32.417,61.196,32.417,96.32C336.77,283.509,265.314,354.965,177.483,354.965     z"
									/>
								</g>
							</g>
						</g>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>

<div
	id="content"
	class="font-pixeloid w-full flex flex-wrap items-start justify-start"
	style="background-color: #ffffff;
opacity: 0.8;
background-image:  repeating-linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), repeating-linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 75%, #000000 75%, #000000);
background-position: 0 0, 3px 3px;
background-size: 6px 6px;
height: calc(100vh - 40px);"
>
	<!-- position it at the top left -->
	<button
		class="m-5"
		use:draggable={{ axis: "both", bounds: "parent" }}
		on:dblclick={() => spawnWindow("drawing", "drawing")}
		use:tap={{ timeframe: 300 }}
		on:tap={() => spawnWindow("drawing", "drawing")}
	>
		<img
			src="images/drawing.png"
			alt="drawing"
			class="w-16 h-16 m-auto grayscale"
		/>
		<p class="bg-white text-center text-sm mt-2">drawing</p>
	</button>
	<button
		class="m-5"
		use:draggable={{ axis: "both", bounds: "parent" }}
		on:dblclick={() => spawnWindow("about", "about me")}
		use:tap={{ timeframe: 300 }}
		on:tap={() => spawnWindow("about", "about me")}
	>
		<img
			src="images/mountain.png"
			alt="about me"
			class="w-16 h-16 m-auto grayscale"
		/>
		<p class="bg-white text-center text-sm mt-2">about me</p>
	</button>
	<button
		class="m-5"
		use:draggable={{ axis: "both", bounds: "parent" }}
		on:dblclick={() => spawnWindow("contact", "contact me")}
		use:tap={{ timeframe: 300 }}
		on:tap={() => spawnWindow("contact", "contact me")}
	>
		<img
			src="images/contact.png"
			alt="contact me"
			class="w-16 h-16 m-auto grayscale"
		/>
		<p class="bg-white text-center text-sm mt-2">contact me</p>
	</button>
	<button
		class="m-5"
		use:draggable={{ axis: "both", bounds: "parent" }}
		on:dblclick={() => spawnWindow("https://kazwire.com/", "kazwire")}
		use:tap={{ timeframe: 300 }}
		on:tap={() => spawnWindow("https://kazwire.com/", "kazwire")}
	>
		<img
			src="images/kazwire.png"
			alt="kazwire"
			class="w-16 h-16 m-auto grayscale bg-white"
		/>
		<p class="bg-white text-center text-sm mt-2">kazwire (project)</p>
	</button>
</div>
