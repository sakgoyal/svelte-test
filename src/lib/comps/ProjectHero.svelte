<script>
	import SvelteMarkdown from "svelte-markdown";
	export let studentName = "Student Name";
	export let title = "Sample Title";
	export let summary = "Project Summary";
	export let date_started = "Date Started";
	export let branch = "main";
	export let url = "https://github.com/Amp-Lab-at-VT/SampleProject";

	let coverOpacity = "0";
	/** @param {any} e */
	function handleMouseOver(e) {
		coverOpacity = "min-h-max";
	}
	/** @param {any} e */
	function handleMouseOut(e) {
		coverOpacity = "0vw";
	}
</script>


<div>
	<div class="flex-none">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- <div class="{coverOpacity}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} > -->
		<img src="https://via.placeholder.com/200" alt="" />
	</div>
	<div class="flex-none">
		<h1>{studentName}</h1>
		<h2>{title}</h2>
		<p>{summary}</p>
		<p>{date_started}</p>
		<p>{branch}</p>
		<p>{url}</p>
	</div>
</div>
<a class="flex-none" href={url} >

</a>

<style>

</style>
