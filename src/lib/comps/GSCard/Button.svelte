<script>
	import SvelteMarkdown from "svelte-markdown";
	import Modal from "$lib/comps/Modal.svelte";
	export let disabled = false;
	export let label = "";
	export let modalMarkdown = "";
	let showModal = false;
</script>

{#if modalMarkdown === ""}
	<button class="text-white"> {label} </button>
{:else}
	<button class="text-white" on:click={() => (showModal = true)} {disabled}> {label} </button>
	<Modal bind:showModal>
		<SvelteMarkdown source={modalMarkdown} />
	</Modal>
{/if}

<style>
	button {
		width: 100%;
		background-color: #ff6d6d; /* change this. use tailwind app colors */
		padding: 12px;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		background-color: #ff4d4d; /* change this. use tailwind app colors */
	}
</style>
