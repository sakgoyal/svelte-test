<script>
	export const prerender = false;
	import SvelteMarkdown from "svelte-markdown";
	import ResourcesText from "$lib/markdowns/resources.md?raw";
	import Repos from "$lib/repos.yaml?raw";
	import YAML from "yaml";
	const ymlText = YAML.parse(Repos);
	const yamlJson = JSON.stringify(ymlText, null, 2);

	// https://www.reddit.com/r/sveltejs/comments/rwxmqb/sveltekit_can_you_import_images_from_external/
	// See if this question is answered. 
</script>

<div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<div>
				{#each Object.entries(ymlText) as [itemNum, item]}
				<!-- !!!!!!!!!!!!!dont use pre!!!!!!!!!!!!! -->
					<pre class="boxed inline-block">
						<div><img src="https://raw.githubusercontent.com/{Object.values(item)[1].split('github.com/')[1]}/main/hero.png" alt="" width="200px" /></div>
						{Object.keys(item)[0]} :
						{Object.keys(item)[1]} : {Object.values(item)[1]}
						{Object.keys(item)[2]} : {Object.values(item)[2]}
						{Object.keys(item)[3]} : {Object.values(item)[3]}
					</pre>
				{/each}
			</div>
		</div>
	</header>
</div>
