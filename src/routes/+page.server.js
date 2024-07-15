export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`);
	const posts = await postRes.json();

	console.log({ posts });
	return { posts };
};
