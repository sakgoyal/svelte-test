<script>
	import SvelteMarkdown from "svelte-markdown";
	export let studentName = "Student Name";
	export let title = "Sample Title";
	export let summary = "Project Summary";
	export let date_started = "Date Started";
	export let branch = "main";
	export let href = "https://github.com/Amp-Lab-at-VT/SampleProject";
	export let mentor = "Mentor Name";

	let src = `https://raw.githubusercontent.com/${href.split("github.com/")[1]}/${branch}/hero.png`;

	//get student name and summary from the repo url

	let coverText = `# ${title} \n\n ### ${studentName} \n\n\n ${summary} \n\n\n ${date_started} \n\n\n Mentor: ${mentor}`;
</script>

<a {href}>
	<div class="titleWrapper">{title}</div>
	<img {src} alt="" />
	<cover><SvelteMarkdown source={coverText} /></cover>
</a>

<style>
	a {
		display: block;
		position: relative;
		border-radius: 2px;
		overflow: hidden;
		margin: 0.5rem;
		border-radius: 0.375rem;
		border-width: 2px;
		height: 20rem;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		color: #333;
	}
	cover {
		display: none;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 0.5rem;
		justify-content: center;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 700;
		color: #ffffff;
		background-color: #000000;
		--bg-opacity: 0.75;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		transition-duration: 500ms;

		@media (min-width: 640px) {
			display: block;
		}
	}
	a:hover cover {
		-webkit-filter: brightness(70%);
		opacity: 0.7;
	}
	
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.titleWrapper {
		display: none;
		position: absolute;
		top: 1.25rem;
		left: 1.25rem;
		z-index: 10;
		padding: 0.5rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: #ffffff;
		background-color: #000000;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		opacity: 1;

		@media (min-width: 640px) {
			display: block;
		}
	}
</style>
