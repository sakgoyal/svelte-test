<script>
	import SvelteMarkdown from 'svelte-markdown';
  import Repos from "$lib/repos.yaml";
  import Test from "$lib/test.md";

	const ymlText = atob(Repos.split("base64,")[1]);
	const markdown = atob(Test.split("base64,")[1]);
</script>

<p style="white-space: pre-wrap;">Text: {ymlText}</p>
<SvelteMarkdown source={markdown} />
