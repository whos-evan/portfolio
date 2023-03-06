<script type="ts">
	import { draggable } from "@neodrag/svelte";
	import { totalWindowsOpen } from "$lib/stores";

	export let title = "";
	export let url = "";

	let iframe;
	let userWindow;

	const handleClose = () => {
		userWindow.remove();
		totalWindowsOpen.update((n) => n - 1);
	};

	const handleLoad = () => {
		iframe.contentWindow.document.body.style.backgroundColor = "#BFBFBF";
	};

	let zIndex = 0;

	function setWindowZIndex() {
		const allWindows = document.querySelectorAll(".userWindow");
		let highestZIndex = 0;
		for (let i = 0; i < allWindows.length; i++) {
			const zIndexStr = window.getComputedStyle(allWindows[i]).zIndex;
			const zIndex = parseInt(zIndexStr);
			if (!isNaN(zIndex) && zIndex > highestZIndex) {
				highestZIndex = zIndex;
			}
		}
		zIndex = highestZIndex + 1;
	}

	function handleMouseDown() {
		setWindowZIndex();
	}

	$: {
		setWindowZIndex();
	}

	let windowWidth = 0;
	let windowHeight = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:outerHeight={windowHeight} />

<div
	class="userWindow absolute inline-block w-[500px] h-[400px] m-5 p-2 rounded-lg bg-white shadow-lg shadow-black"
	bind:this={userWindow}
	use:draggable={{ axis: "both", bounds: "parent" }}
	on:mousedown={handleMouseDown}
	style="z-index: {zIndex}; max-width: {windowWidth - 50}px; max-height: {windowHeight - 10}px;"
>
	<div
		class="titlebar absolute top-0 left-0 right-0 h-6 bg-[#5B5B5B] rounded-t-lg text-white text-center"
	>
		<div class="flex">
			<div
				class="title flex-grow overflow-hidden whitespace-nowrap text-ellipsis"
			>
				{title}
			</div>
			<div
				class="controls bg-transparent border-none text-white font-bold mr-2"
			>
				<button class="close" on:click={handleClose}>✕</button>
			</div>
		</div>
	</div>
	<div class="content absolute top-6 left-0 right-0 bottom-0 overflow-hidden">
		<iframe
			class="w-full h-full border-none"
			src={url}
			frameborder="0"
			allowfullscreen
			onload={handleLoad}
			{title}
			bind:this={iframe}
		/>
	</div>
</div>
