<script>
	import Title from './Title.svelte';
	import Description from './Description.svelte';
	import Button from './Button.svelte';
	// import Image from './Image.svelte';
	
</script>

<div class="card">
	<slot {Title} {Description} {Button} />
</div>

<style>
	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 300px;
		background-color: #f1f1f1; /* change this. use tailwind app colors */
		color: #ff6d6d;            /* change this */
		margin: 2rem auto;
		border-radius: 8px;
		padding: 2rem;
	}
</style>