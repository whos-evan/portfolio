<!-- Credit: https://svelte.dev/repl/434e0b14546747688401e8808c060a23?version=3.47.0 -->
<script>
	import Canvas from '$lib/components/Canvas.svelte';
	import Palette from '$lib/components/Palette.svelte';

	const colors = ['#b2b2b2', '#656565', '#181818', '#000000'];
	const background = '#fff';

	let color = colors[0];
	const paletteColor = color;
</script>

<main>
	<Canvas {color} {background} />
	<Palette
		{paletteColor}
		{colors}
		{background}
		on:color={({ detail }) => {
			color = detail.color;
		}}
	/>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e5e5e5;
	}

	:global(.visually-hidden:not(:focus):not(:active)) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}

	main {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem 0;
	}

	main :global(canvas) {
		align-self: center;
	}
</style>
