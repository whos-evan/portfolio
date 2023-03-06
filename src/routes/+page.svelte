<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { writable } from 'svelte/store';
	import type { DragOptions } from '@neodrag/svelte';

	import Window from '../lib/components/Window.svelte';

	const dropdownAboutVisible = writable(false);

	function toggleAboutDropdown() {
		dropdownAboutVisible.update((value) => !value);
	}

	const dropdownProjectsVisible = writable(false);

	function toggleProjectsDropdown() {
		dropdownProjectsVisible.update((value) => !value);
	}

	const dropdownContactVisible = writable(false);

	function toggleContactDropdown() {
		dropdownContactVisible.update((value) => !value);
	}

	function spawnWindow(url: string, title: string) {
		// create new draggable window
		const window = new Window({
			target: document.getElementById('content'),
			props: {
				url,
				title
			}
		});
	}

	function copyAboutMe() {
		// copy the about me text to the clipboard
		navigator.clipboard.writeText(
			'I am a software developer from the United States. I am currently a student.'
		);
	}

	function copyDiscord() {
		// copy the discord tag to the clipboard
		navigator.clipboard.writeText('evan#9000');
	}

	let options: DragOptions = {
		axis: 'y',
		bounds: 'parent'
	};

	// get the current time in cst
	let time = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
	// remove the date from the time
	time = time.split(',')[1];
	// update the time every second
	setInterval(() => {
		time = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
		time = time.split(',')[1];
	}, 1000);
</script>

<div
	id="navBar"
	class="font-pixeloid w-full h-10 border-solid border-2 border-black bg-white rounded-t-lg"
>
	<div class="flex justify-center items-center h-full">
		<a href="/" class="pl-5">Evan</a>
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
					class:invisible={!$dropdownAboutVisible}
				>
					<!-- create a window on click -->
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => spawnWindow('about', 'About Me')}>open</button
					>
					<button class="block w-full px-4 py-2 hover:bg-gray-100" on:click={() => copyAboutMe()}
						>copy to clipboard</button
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
					class:invisible={!$dropdownProjectsVisible}
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
						class="block px-4 py-2 hover:bg-gray-100">twitch-spotify</a
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
					class:invisible={!$dropdownContactVisible}
				>
					<button
						class="block w-full px-4 py-2 hover:bg-gray-100"
						on:click={() => spawnWindow('contact', 'contact me')}>open</button
					>
					<a class="block w-full px-4 py-2 hover:bg-gray-100" href="mailto:coming@soon.com"
						>email me</a
					>
					<button class="block w-full px-4 py-2 hover:bg-gray-100" on:click={() => copyDiscord()}
						>copy discord</button
					>
				</div>
			</button>
		</div>

		<div class="flex float-right min-w-fit mr-5 justify-evenly text-sm">
			<p>my time: {time}</p>
		</div>
	</div>
</div>

<div
	id="content"
	class="font-pixeloid w-full h-screen flex flex-wrap items-start justify-start"
	style="background-color: #ffffff;
opacity: 0.8;
background-image:  repeating-linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), repeating-linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 75%, #000000 75%, #000000);
background-position: 0 0, 3px 3px;
background-size: 6px 6px;"
>
	<!-- position it at the top left -->
	<button
		class="m-5"
		use:draggable={{ axis: 'both', bounds: 'parent' }}
		on:dblclick={() => spawnWindow('drawing', 'drawing')}
	>
		<img src="images/drawing.png" alt="drawing" class="w-16 h-16 m-auto" />
		<p class="bg-white text-center text-sm mt-2">drawing</p>
	</button>
	<button
		class="m-5"
		use:draggable={{ axis: 'both', bounds: 'parent' }}
		on:dblclick={() => spawnWindow('about', 'about me')}
	>
		<img src="images/mountain.png" alt="about me" class="w-16 h-16 m-auto" />
		<p class="bg-white text-center text-sm mt-2">about me</p>
	</button>
	<button
		class="m-5"
		use:draggable={{ axis: 'both', bounds: 'parent' }}
		on:dblclick={() => spawnWindow('contact', 'contact me')}
	>
		<img src="images/contact.png" alt="contact me" class="w-16 h-16 m-auto" />
		<p class="bg-white text-center text-sm mt-2">contact me</p>
	</button>
</div>
