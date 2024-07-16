<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
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
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

	<header>
		<h1>{title}</h1>
		<span />
		<div class="meta">
			{Intl.DateTimeFormat('en-IN', { month: 'long', day: 'numeric', year: '2-digit' }).format(
				new Date(date)
			)}
		</div>
	</header>

	<svelte:component this={PostContent} />
</article>

<style>
	header {
		display: flex;
		align-items: center;
		margin: 2rem 0;
	}
	header h1 {
		margin: 0;
	}
	header > span {
		flex-grow: 1;
		border-bottom: 1px dotted #333;
		margin: 0 1rem;
		align-self: flex-end;
	}
	header .meta {
		font-size: 0.8rem;
	}
	article {
		text-align: left;
	}
</style>
