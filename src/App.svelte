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
        henterData = false;
        // console.log(data);
    });
</script>

<main>
	<h1>premier league tabell</h1>

    {#if henterData}
        <p>Henter data, vennligs vent</p>
    {:else}
        <table>
            <tr>
                <td>
                    Lag
                </td>
                <td>
                    kamper
                </td>
                <td>
                    poeng
                </td>
            </tr>
            {#each data as lag,i  }
                <tr>
                    <td>
                        {i+1}. {lag.teamName} 
                    </td>
                    <td>
                        {lag.all.matchsPlayed}
                    </td>
                    <td>
                        {lag.points}
                     </td>   
                </tr>
            {/each}
        </table>
    {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: blue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
    tr {
        line-height: 40px;
        text-align: left;
        white-space: nowrap;
    }
    tr:nth-child(even){
        color:blue;
    }
    tr:nth-child(odd){
        color:purple;
    }

    
</style>