<script>
	import SvelteMarkdown from "svelte-markdown";
	import YAML from "yaml";
	import Repos from "$lib/repos.yaml";
	import Test from "$lib/markdowns/about.md";
	import Modal from "$lib/comps/Modal_v2/Modal.svelte";

	let showModal = false;

	// console.log("Repos: ", Repos);
	console.log("Repos split: ", String(Repos.split("base64,")[1]));
	const ymlText = YAML.parse(atob(Repos.split("base64,")[1]));
	const yamlJson = JSON.stringify(ymlText, null, 2);
	const markdown = atob(Test.split("base64,")[1]);

	// !!!! TODO !!!!
	// configure tailwind template paths // https://tailwindcss.com/docs/guides/sveltekit
	// configure tailwind purge // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
	// configure tailwind +layout.svelte file // https://tailwindcss.com/docs/guides/sveltekit
</script>

<button on:click={() => (showModal = true)}> show modal </button>
<Modal bind:showModal>
	<SvelteMarkdown source={markdown} />
</Modal>

<!-- <p style="white-space: pre-wrap;">Text: {yamlJson}</p> -->
<div>
	{#each Object.entries(ymlText) as [itemNum, item]}
		<pre class="boxed"><img src="https://raw.githubusercontent.com/{Object.values(item)[1].split('github.com/')[1]}/main/hero.png" alt="" width="200px"/>
			{Object.keys(item)[0]} :
			{Object.keys(item)[1]} : {Object.values(item)[1]}
			{Object.keys(item)[2]} : {Object.values(item)[2]}
			{Object.keys(item)[3]} : {Object.values(item)[3]}
		</pre>
	{/each}
</div>



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
