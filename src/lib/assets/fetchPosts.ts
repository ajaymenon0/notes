const fetchPosts = async () => {
	const posts = await Promise.all(
		Object.entries(
			import.meta.glob('/src/lib/posts/*.md') as Record<
				string,
				() => Promise<{
					metadata: {
						title: string;
						date: string;
						excerpt: string;
						categories: string[];
					};
				}>
			>
		).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop() as unknown as [string, string];
			console.log({ slug });
			return { ...metadata, slug: slug.slice(0, -3) };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		date: Intl.DateTimeFormat('en-IN', { month: 'long', day: 'numeric', year: '2-digit' }).format(
			new Date(post.date)
		),
		categories: post.categories
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
