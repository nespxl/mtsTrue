<script>
    import {onMount} from 'svelte'
    import { link } from 'svelte-spa-router'
    import axios from "axios";
    import ItemFilm from '../component/ItemFilm.svelte';
    let data = []
    onMount(async () => {
        try {
            const response = await axios.get("https://api.kinopoisk.dev/v1/movie", {
                params: {
                    _limit: 10
                },
                headers: {
                    'X-API-KEY': '8ESCKBT-2FRMN8W-N899BMS-VNKP03S'
                }
            });
            data = response.data.docs
            console.log(data)
            console.log(data[0].names[0].name)
            return response.data;
        } catch (e) {
            console.log(e)
        }
    });
    console.log(data)

    function handleClick(elem) {
        localStorage.setItem('idFilm', JSON.stringify(elem))
    }
</script>

<style>
    * {
		margin: 0;
		padding: 0;
	}
    .container {
        display: flex;
    }
</style>

{#each data as item}
    <a href='/films/{item.id}' on:click={handleClick(item.id)} use:link class="container">
        <ItemFilm name={item.name} logo={item.logo.url} />
    </a>
{/each}
