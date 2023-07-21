<script>
	import SvelteMarkdown from "svelte-markdown";
	import ChecksheetText from "$lib/markdowns/mentor_checksheet.md?raw";
</script>

<div class="App">
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={ChecksheetText} />
		</div>
	</header>
</div>
