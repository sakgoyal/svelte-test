<script>
	import ProjectHero from "$lib/comps/ProjectHero.svelte";
	import YAML from "yaml";

	let repos = {};
	const promise = fetch("https://raw.githubusercontent.com/Amp-Lab-at-VT/website/master/repos.yaml")
		.then((res) => res.text())
		.then((res) => YAML.parse(res))
		.then((res) => {
			repos = res;
			console.log(repos);
		});
</script>

<div class="min-h-screen test">
	{#await promise then}
		{#each Object.entries(repos) as [title, item]}
			<ProjectHero href={Object.values(item)[0]} branch={Object.values(item)[1]} mentor={Object.values(item)[2]} {title}/>
		{/each}
	{/await}
</div>

<style>
	/** make the ProjectHero attribuate into a grid that has a maximum of 2 colums that are centered and take the whole width of the screen */
	/* @media screen and (min-width: 940px) {
		.test {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(50%, 2fr));
			justify-items: center;
		}
	} */
</style>
