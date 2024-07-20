<div class="logo">
	<svg id="a" width="20" height="20" viewBox="0 0 3 3" fill="none">
		<path d="M0,3 L1.5,0 L3,3 Z" />
	</svg>
	<svg id="m" width="20" height="20" viewBox="0 0 15 15" fill="none">
		<path id="left-tri" d="M0,15 L5,0 L15,15 Z" />
		<path id="right-tri" d="M0,15 L10,0 L15,15 Z" />
	</svg>
</div>

<style>
	.logo {
		display: flex;
		width: 40px;
	}
	.logo #m {
		transition: transform 200ms;
		transform: translate(-50%);
	}
	.logo:hover #m {
		transform: translate(0);
	}
	.logo:hover #a path {
		fill: tomato;
	}
	.logo:hover #m path:first-child {
		fill: SteelBlue;
	}
	.logo:hover #m path:last-child {
		fill: Indigo;
	}
	.logo svg {
		fill: var(--textColor);
		fill-opacity: 70%;
	}
</style>
