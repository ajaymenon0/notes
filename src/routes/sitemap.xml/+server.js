import fetchPosts from '$lib/assets/fetchPosts';
export async function GET({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});

	const site = 'https://notes.ajm0.dev';
	const { posts } = await fetchPosts();
	if (!posts) {
		throw new Error('Failed to fetch posts.');
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${site}</loc>
    </url>
    ${posts.map((post) => `<url><loc>${site}/${post.slug}</loc></url>`).join('')}
    </urlset>`;
	return new Response(sitemap);
}
