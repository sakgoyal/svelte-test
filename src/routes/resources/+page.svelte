<script>
	import SvelteMarkdown from "svelte-markdown";
	import ResourcesText from "$lib/markdowns/resources.md?raw";
</script>

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={ResourcesText} />
		</div>
	</header>
</div>
