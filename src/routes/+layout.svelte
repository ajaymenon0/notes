<script>
	import '@fontsource-variable/jost';
</script>

<section>
	<h1><a href="/">notes</a></h1>
	<slot />
</section>

<style>
	h1 a {
		color: #333;
		text-decoration: none;
		border-bottom: 1px dotted #333;
	}
	section {
		font-family: 'Jost Variable', sans-serif;
		color: #333;
		width: clamp(300px, 90vw, 800px);
		margin: 0 auto;
		text-align: center;
	}
</style>
