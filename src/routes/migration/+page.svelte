<script>
	import SvelteMarkdown from "svelte-markdown";
	import MigrationText from "$lib/markdowns/migration.md?raw";
</script>

<!-- <sveltemarkdown class="App-standardPage" > -->

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={MigrationText} />
		</div>
	</header>
</div>