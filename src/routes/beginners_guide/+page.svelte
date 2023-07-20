<script>
	import SvelteMarkdown from "svelte-markdown";
	import StartingText from "$lib/getting_started_simple.md?raw";
</script>

<div>
	<div class="h-screen">
		<h1 class="m-5">Beginners Guide</h1>
		<div class="m-5">
			<SvelteMarkdown source={StartingText} />
		</div>
	</div>
</div>
