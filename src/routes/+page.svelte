<script>
	import SvelteMarkdown from "svelte-markdown";
	import YAML from "yaml";
	import Repos from "$lib/repos.yaml";
	import Test from "$lib/markdowns/about.md";

	const ymlText = YAML.parse(atob(Repos.split("base64,")[1]));
	const yamlJson = JSON.stringify(ymlText, null, 2);
	const markdown = atob(Test.split("base64,")[1]);

	for (const [itemNum, item] of Object.entries(ymlText)) {
		// console.log(item);
	}

	// !!!! TODO !!!!
	// configure tailwind template paths // https://tailwindcss.com/docs/guides/sveltekit
	// configure tailwind purge // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
	// configure tailwind +layout.svelte file // https://tailwindcss.com/docs/guides/sveltekit
</script>

<!-- <p style="white-space: pre-wrap;">Text: {yamlJson}</p> -->
<div>
	{#each Object.entries(ymlText) as [itemNum, item]}
		<pre class="boxed"><img src="https://raw.githubusercontent.com/{Object.values(item)[1].split('github.com/')[1]}/main/hero.png" alt="" />
			{Object.keys(item)[0]} :
			{Object.keys(item)[1]} : {Object.values(item)[1]}
			{Object.keys(item)[2]} : {Object.values(item)[2]}
			{Object.keys(item)[3]} : {Object.values(item)[3]}
		</pre>
	{/each}
</div>

<SvelteMarkdown source={markdown} />

<style>
	.boxed {
		border: 1px solid blue;
		padding: 10px;
		margin: 10px;
		white-space: pre-line;
	}
	img {
		width: 100%;
		max-width: 500px;
	}
</style>
