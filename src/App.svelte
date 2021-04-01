<script>
    // import { counter } from "./stores/tabelldata.js";
    import { onMount } from "svelte";

    const apiURL = "https://daydream.blob.core.windows.net/data/standings.json";
    let data = [];
    let henterData = true;

    export let name;
    
    onMount(async function() {
        const response = await fetch(apiURL);
        data = (await response.json()).api.standings[0];
        // henterData = false;
        // console.log(data);
    });
</script>

<main>
	<h1>Hello {name}!</h1>
<!--
    {#if henterData}
        <p>Henter data, vennligs vent</p>
    {:else}
        {#each data as lag }
        {/each}
    {/if}
    -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>