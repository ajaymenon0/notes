<script>
	import '@fontsource-variable/jost';
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
	section {
		font-family: 'Jost Variable', sans-serif;
		/* font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif; */
		font-weight: normal;
		font-optical-sizing: auto;
		color: #333;
		width: clamp(300px, 90vw, 800px);
		margin: 0 auto;
		text-align: center;
	}
</style>
