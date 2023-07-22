<script>
	import Hamburger from "$lib/comps/Hamburger.svelte";
</script>

<div class="navbar">
	<div class="parentNav">
		<div style="display: flex; align-items: center">
			<Hamburger />
		</div>
	</div>
</div>

<style>
	.navbar {
		width: 100%;
		height: 50px;
		background-color: rgb(49, 36, 37);
		display: flex;
		justify-content: space-between;
		color: rgb(255, 255, 255);
		align-items: center;
		top: 0px;
	}

	.navbar .parentNav {
		width: 100%;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.navText {
		font: 10px;
		padding: 5px;
	}
</style>
