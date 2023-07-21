<script>
	import SvelteMarkdown from "svelte-markdown";
	import SolderingText from "$lib/markdowns/adv_soldering.md?raw";
</script>

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<SvelteMarkdown source={SolderingText} />
		</div>
	</header>
</div>
