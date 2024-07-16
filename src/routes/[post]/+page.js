import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../lib/posts/${params.post}.md`);

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (e) {
		console.error(e);
		error(404, `Page not found`);
	}
};
