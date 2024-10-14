<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, coverWidth, coverHeight, coverImage } = data.meta;
	const { PostContent } = data;
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
		<meta property="og:image:width" content={coverWidth} />
		<meta property="og:image:height" content={coverHeight} />
		<meta name="twitter:image" content={`https://notes.ajm0.dev/${coverImage}`} />
	{/if}
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

	<h1>{title}</h1>
	<div class="meta">
		{Intl.DateTimeFormat('en-IN', { month: 'long', day: 'numeric', year: '2-digit' }).format(
			new Date(date)
		)}
	</div>

	<div class="divider" />

	<svelte:component this={PostContent} />
</article>

<style>
	article {
		text-align: left;
		color: var(--textColor);
		margin: 1rem 0;
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
		margin: 1rem 0;
		border-bottom: 1px dotted var(--textColor);
	}

	article a {
		color: var(--textColor);
	}
</style>
