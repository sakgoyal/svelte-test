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
</script>

<!-- <ProjectCard /> -->
<div class="App max-h-screen">
	<header class="App-header">
		<div class="App">
			<div class="homeText text-primary-50">
				
				<!-- cursor color should be dynamic. not sure how to do that yet. -->
				<Typewriter interval={50} cursor on:done={buttonDelay} delay={250} keepCursorOnFinish={true} class="customCursor">
					The AMP Lab at Virginia Tech
				</Typewriter>
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
	.customCursor {
		--cursor-width: 0.12ch;
		--cursor-color: #AA3333;
	}
</style>