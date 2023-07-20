<script>
	import SvelteMarkdown from "svelte-markdown";
	import AboutText from "$lib/markdowns/about.md?raw";
</script>

<!-- <sveltemarkdown class="App-standardPage" > -->

<div class="App">
	<header class="App-standardPage">
	 <div class="App-pageHelper">
		<SvelteMarkdown  source={AboutText} />
	  <a class= "btn" href="/Leadership">Leadership Team</a>
	  </div>
	</header>
  </div>