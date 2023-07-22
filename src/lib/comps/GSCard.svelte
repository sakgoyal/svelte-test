<script>
	import SvelteMarkdown from "svelte-markdown";
	import Modal from "$lib/comps/Modal.svelte";
	// import Image from './Image.svelte';
	export let titleText = "";
	export let descText = "";
	export let label = "";
	export let modalMarkdown = "";
	let showModal = false;
</script>

<div class="card shadow-lg transform transition duration-150 hover:scale-105 hover:shadow-2xl flex justify-center h-48 items-center flex-col bg-gray-1 text-white m-2 rounded-lg p-8 border-solid border pop_in border-grey-400">
	{#if titleText !== ""}
		<h2 class="gs-card-title text-2xl font-semibold m-0">
			{titleText}
		</h2>
	{/if}
	<!-- 
	{#if imgSrc !== ""}
		<a href={imgSrc} alt={imgAlt} />
	{/if} 
	-->
	{#if descText !== ""}
		<p class="description font-normal text-center text-base">
			{descText}
		</p>
	{/if}
	{#if modalMarkdown === ""}
		<button class="text-white w-full bg-red-500 rounded-lg hover:bg-blue-700"> {label} </button>
	{:else}
		<button class="text-white w-full bg-red-500 rounded-lg hover:bg-blue-700" on:click={() => (showModal = true)} > {label} </button>
		<Modal bind:showModal>
			<SvelteMarkdown source={modalMarkdown} />
		</Modal>
	{/if}
</div>

<style>
	.card {
		width: 15vw;
	}
	.gs-card-title {
		color: #ff6d6d; /* change this */
	}
	.description {
		color: black;
	}
	button {
		padding: 10px 20px;
		transition: all 0.2s ease-in-out;
		border: none;
	}
	.btn {
    /* background-color: #61dafb; */
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
  }


  .pop_in {
	opacity: 0;
    animation: pop_in 0.5s ease-out forwards;
  }

  
  @keyframes pop_in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    80% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
