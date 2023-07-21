<script>
	import SvelteMarkdown from "svelte-markdown";
	import TutorialText from "$lib/markdowns/tutorial.md?raw";
</script>

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper tutorialText">
			<SvelteMarkdown source={TutorialText} />
		</div>
	</header>
</div>
