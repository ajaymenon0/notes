<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import { onMount } from 'svelte';
	export let data;

	const { title, excerpt, date, coverWidth, coverHeight, coverImage } = data.meta;
	const { PostContent } = data;
	/**
	 * @type {HTMLElement | null}
	 */
	let progressBar;
	onMount(() => {
		// DOM manipulation code here
		progressBar = document.getElementById('progress-bar');
		if (progressBar) {
			let processScroll = () => {
				const docElem = document.documentElement;
				const scrollTop = docElem['scrollTop'];
				const scrollBottom = document.body['scrollHeight'] - window.innerHeight;
				const scrollPercent = (scrollTop / scrollBottom) * 100 + '%';
				progressBar?.style.setProperty('--progress', scrollPercent);
			};
			document.addEventListener('scroll', processScroll);
		}
	});
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	{#if coverImage}
		<meta property="og:image" content={`https://notes.ajm0.dev/${coverImage}`} />
		{#if coverWidth > 1000}
			<meta name="twitter:card" content="summary_large_image" />
		{/if}
		<meta property="og:image:width" content={coverWidth} />
		<meta property="og:image:height" content={coverHeight} />
		<meta name="twitter:image" content={`https://notes.ajm0.dev/${coverImage}`} />
	{/if}
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

	<header>
		<h1>{title}</h1>
		<div class="meta">
			{Intl.DateTimeFormat('en-IN', { month: 'long', day: 'numeric', year: '2-digit' }).format(
				new Date(date)
			)}
		</div>
		<div id="progress-bar"></div>
		<div class="divider" />
	</header>

	<svelte:component this={PostContent} />
</article>

<style>
	article {
		text-align: left;
		color: var(--textColor);
		margin: 0.5rem 0 1rem;
		padding-bottom: 6rem;
		max-width: 100%;
	}

	h1 {
		margin: 0;
	}

	.meta {
		font-size: 0.8rem;
	}

	.divider {
		margin: 0.5rem 0 1rem;
		border-bottom: 1px dotted var(--textColor);
	}

	article header {
		position: sticky;
		top: 0;
		padding-top: 0.5rem;
		background-color: var(--bgColor);
		z-index: 1;
	}

	#progress-bar {
		--progress: 0%;
		height: 2px;
		margin: 0.5rem 0;
		width: var(--progress);
		background-color: gold;
		max-width: 100%;
		z-index: 2;
	}
</style>
