<!-- System1.svelte -->
<script>
	import { draggable } from '@neodrag/svelte';
	export let title = '';
	export let url = '';

	let iframe;
	let userWindow;

	const handleClose = () => {
		userWindow.remove();
	};

	const handleLoad = () => {
		iframe.contentWindow.document.body.style.backgroundColor = '#BFBFBF';
	};
</script>

<div
	class="userWindow relative inline-block w-[500px] h-[400px] m-5 p-2 rounded-lg bg-white shadow-lg shadow-black"
	bind:this={userWindow}
    use:draggable={{ axis: 'both', bounds: 'parent' }}
>
	<div
		class="titlebar absolute top-0 left-0 right-0 h-6 bg-[#5B5B5B] rounded-t-lg text-white text-center"
	>
		<div class="flex">
			<div class="title flex-grow overflow-hidden whitespace-nowrap text-ellipsis">{title}</div>
			<div class="controls bg-transparent border-none text-white font-bold mr-2">
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
