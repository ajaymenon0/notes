<script>
	export let data;
</script>

<svelte:head>
	<title>ajm0 | notes</title>
</svelte:head>
<ul>
	{#each data.posts as post}
		<li>
			<a href="/{post.slug}">
				{post.title}
			</a>
			<span>{post.date}</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		padding: 0 0 1rem 0;
		margin-bottom: 1rem;
		width: 100%;
		border-bottom: 1px dotted #aaa;
		text-align: left;
	}

	@media (min-width: 768px) {
		li {
			flex-direction: row;
			align-items: center;
		}
	}

	li a {
		display: flex;
		flex-grow: 1;
		text-decoration: none;
		color: var(--textColor);
		font-weight: 500;
		text-align: left;
	}

	li a:after {
		content: ' ';
		display: flex;
		flex-grow: 1;
		margin: 2px 4px;
	}

	li span {
		font-size: 0.8rem;
		color: var(--textColor);
	}
</style>
