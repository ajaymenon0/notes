import fetchPosts from '$lib/assets/fetchPosts';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const { posts } = await fetchPosts();
	
	return json(posts);
};
