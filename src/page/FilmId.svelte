<script>
    import {onMount} from 'svelte'
    import Player from '../component/player/Player.svelte'
    import axios from "axios";

    let country = undefined
    let year = undefined
    let url = ''
    let data = []

    const id = JSON.parse(localStorage.getItem('idFilm'))

    onMount(async () => {
        try {
            const response = await axios.get(`https://api.kinopoisk.dev/v1/movie/${id}`, {
                headers: {
                    'X-API-KEY': '8ESCKBT-2FRMN8W-N899BMS-VNKP03S'
                }
            });
            data = response.data
            console.log(data)
            country = data.countries[0].name
            year = data.year
            console.log(data.logo.url)
            url = data.logo.url
            return data;
        } catch (e) {
            console.log(e)
        }
    });

</script>

<style>
    /* .container {
        width: 100%;
        display: flex;
    } */
    .blockContainer {
        width: 50%;
        background: #1D334A;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .blockContainer:not(:last-child) {
        margin-right: 50px;
    }
    .img {
        width: 80%;
    }
    .blockTitle {
        display: flex;
        margin-bottom: 100px;
    }
    .title {
        margin: 0;
        padding: 0;
        margin-bottom: 40px;
        color: #fff;
        font-size: 36px;
        font-weight: 700;
    }
    .country, .time {
        margin: 0;
        padding: 0;
        margin-bottom: 40px;
        color: #fff;
        font-size: 24px;
        font-weight: 700;
    }
</style>

<div class="container">
    <div class="blockTitle">
        <div class="blockContainer">
            <img class="img" src={url} alt="">
        </div>
        <div class="blockContainer">
            <p class="title">{data.name}</p>
            <p class="country">{country}</p>
            <p class="time">1 ч 30 мин</p>
            <p class="time">{year}</p>
        </div>
    </div>
    <div>
        <Player />
    </div>
</div>