<script>
	export let data;
</script>

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
		padding: 1rem 0;
		width: 100%;
	}

	li a {
		display: flex;
		flex-grow: 1;
		text-decoration: none;
		color: #333;
		border-bottom: 1px dotted #aaa;
	}

	li a:after {
		content: ' ';
		display: flex;
		flex-grow: 1;
		margin: 2px 4px;
	}

	li span {
		font-size: 0.8rem;
	}
</style>
