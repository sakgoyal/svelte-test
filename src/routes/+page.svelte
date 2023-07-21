<script>
	import Typewriter from "svelte-typewriter";
	let showButton = false;
	let buttonDelay = () => {
		setTimeout(() => {
			showButton = true;
		}, 500);
	};

	// !!!! TODO !!!!
	// configure tailwind template paths // https://tailwindcss.com/docs/guides/sveltekit
	// configure tailwind purge // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
	// configure tailwind +layout.svelte file // https://tailwindcss.com/docs/guides/sveltekit
</script>

<!-- <ProjectCard /> -->

<div class="App max-h-screen">
	<header class="App-header">
		<div class="App">
			<div class="homeText text-primary-50">
				<Typewriter interval={50} cursor on:done={buttonDelay} delay={250}>The AMP Lab at Virginia Tech</Typewriter>
				<!-- <h1 class="text-6xl font-bold">Welcome to the Advanced Manufacturing and Prototyping Lab!</h1>			 -->
			</div>
			<div style="padding: 50px">
				{#if showButton}
					<a href="/getting_started" class="btn">Getting Started</a>
				{/if}
			</div>
		</div>
	</header>
</div>

<style>

	.App {
		text-align: center;
	}


	.App-header {
		background-color: #ccc;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: rgb(0, 0, 0);
	}
	.btn {
		background-color: rgb(196, 178, 178);
		padding: 10px;
		border-radius: 0.5rem;
		text-decoration: none;
		color: black;
		pointer-events: all;
		display: block;
		margin: 2px;
	}
	.btn:hover {
		background-color: rgba(244, 118, 118, 0.802);
	}
	.homeText {
		font-size: 3em;
		font-weight: 300;
		color: rgb(185, 18, 18);
		text-align: center;
		margin: 0 auto;
		max-width: 40vw;
		padding: 0 20px;
		font-family: "Georgia";
	}
	a {
		color: rgb(185, 18, 18);
		text-decoration: none;
		font-weight: 600;
	}
	a:hover {
		color: rgb(185, 18, 18);
		text-decoration: underline;
	}
</style>
