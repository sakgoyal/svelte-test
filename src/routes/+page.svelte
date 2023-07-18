<script>
	import SvelteMarkdown from 'svelte-markdown';
  import YAML from 'yaml';
  import Repos from "$lib/repos.yaml";
  import Test from "$lib/markdowns/about.md";

	const ymlText = YAML.parse(atob(Repos.split("base64,")[1]));
	const markdown = atob(Test.split("base64,")[1]);

</script>

<!-- <p style="white-space: pre-wrap;">Text: {ymlText}</p> -->
<SvelteMarkdown source={markdown} />
