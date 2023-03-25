<script>
    import {onMount} from 'svelte'
    import { link } from 'svelte-spa-router'
    import axios from "axios";
    import ItemFilm from '../component/ItemFilm.svelte';
    let data = []
    onMount(async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos", {
                params: {
                    _limit: 10
                }
            });
            data = response.data
            return response.data;
        } catch (e) {
            console.log(e)
        }
    });
    console.log(data)
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
    <a href='/films/{item.id}' use:link class="container">
        <ItemFilm {...item} />
    </a>
{/each}
