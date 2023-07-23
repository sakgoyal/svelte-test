<script>
	import ProjectHero from '$lib/comps/ProjectHero.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	// https://www.reddit.com/r/sveltejs/comments/rwxmqb/sveltekit_can_you_import_images_from_external/
	// See if this question is answered. 
</script>
<div class="min-h-screen">
	<ProjectHero />
</div>

<!-- <div>
	<header class="App-standardPage">
		<div class="App-pageHelper">
			<div>
				{#each Object.entries(data.ymlText) as [itemNum, item]}
					<pre class="boxed inline-block">
						<div><img src="{Object.values(item)[4]}" alt="" width="200px" /></div>
						{Object.keys(item)[0]} :
						{Object.keys(item)[1]} : {Object.values(item)[1]}
						{Object.keys(item)[2]} : {Object.values(item)[2]}
						{Object.keys(item)[3]} : {Object.values(item)[3]}
					</pre>
				{/each}
			</div>
		</div>
	</header>
</div> -->
