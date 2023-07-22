<script>
</script>

<div class="dropdown">
	<button class="dropbtn">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dropdownIcon">
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14" />
		</svg>
	</button>
	<div class="dropdownContent">
		<a href="/">Home</a>
		<a href="/getting_started">Getting Started</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/resources">Resources</a>
	</div>
</div>

<style>
	.dropbtn {
		border: 0px solid rgb(49, 36, 37);
		background-color: transparent;
		margin: 5px;
	}

	.dropdownContent {
		display: none;
		position: absolute;
		background-color: rgb(49, 36, 37);
		min-width: 160px;
		z-index: 200;
	}

	.dropdownIcon {
		color: rgb(255, 255, 255);
		font-size: 20px;
	}

	.dropdownContent a {
		color: rgb(255, 255, 255);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
		right: 0;
		font-size: 14px;
	}

	.dropdownContent a:hover {
		background-color: #f1f1f1;
		color: black;
	}

	.dropdown:hover .dropdownContent {
		display: block;
	}
</style>
