<script>
	import '@fontsource-variable/jost';
	import { dev } from '$app/environment';

	import { onNavigate } from '$app/navigation';
	import Logo from '$lib/components/logo.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<svelte:head>
	{#if !dev}
		<script
			defer
			src="https://cloud.umami.is/script.js"
			data-website-id="3af066e1-9915-404a-b2eb-319f232aac28"
		></script>
	{/if}
</svelte:head>

<section>
	<nav>
		<a aria-label="Home" href="https://ajm0.dev"><Logo /></a>
		<h1><a href="/">notes</a></h1>
		<button id="mode" aria-label="Toggle dark or light mode" on:click={toggle}></button>
	</nav>
	<slot />
</section>

<style>
	:global(body) {
		--textColor: #333333;
		--bgColor: #ffffff;
		background-color: var(--bgColor);
		color: var(--textColor);
		transition: background-color 0.3s;
		margin: 0;
		overflow-y: scroll;
	}
	:global(body.dark-mode) {
		--textColor: #ffffff;
		--bgColor: #333333;
		background-color: var(--bgColor);
		color: var(--textColor);
	}
	:global(body.dark-mode article a) {
		--textColor: #ffffff;
		color: var(--textColor);
	}
	/* :global(article ul) {
		padding-left: ;
	} */
	#mode {
		background-color: var(--textColor);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		cursor: pointer;
		border: none;
		margin: 0 0 0 40px;
	}
	h1 a {
		color: var(--textColor);
		text-decoration: none;
		border-bottom: 1px dotted var(--textColor);
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@font-face {
		font-family: 'Jost-fallback';
		size-adjust: 95.32000000000005%;
		ascent-override: 130%;
		src: local('Arial');
		font-display: optional;
	}
	section {
		font-family: 'Jost Variable', 'Jost-fallback';
		font-weight: normal;
		font-optical-sizing: auto;
		color: #333;
		width: clamp(300px, 90vw, 800px);
		margin: 0 auto;
		text-align: center;
	}

	:global(blockquote) {
		font-style: italic;
		border-left: 4px solid var(--textColor);
		padding-left: 1rem;
		margin-left: 0;
	}
</style>
