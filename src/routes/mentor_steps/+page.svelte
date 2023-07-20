<script>
	import SvelteMarkdown from "svelte-markdown";
	import mentor_stepsText from "$lib/markdowns/mentor_steps.md?raw";
</script>

<!-- <sveltemarkdown class="App-standardPage" > -->

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={mentor_stepsText} />
		</div>
	</header>
</div>
