<script>
	import SvelteMarkdown from "svelte-markdown";
	import SolderingText from "$lib/soldering.md?raw";
</script>

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={SolderingText} />
		</div>
	</header>
</div>
