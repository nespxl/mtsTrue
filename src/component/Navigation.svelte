<script>
    import { link } from 'svelte-spa-router'
    const home = 'home'
    const registration = 'registration'
    const films = 'library films'
    const presets = 'presets'
</script>

<style>
    .list {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
    .elem:not(:last-child) {
        margin-right: 30px;
    }
    .elemLink {
        color: #fff;
        font-weight: 500;
    }
</style>

<nav class="navigation">
    <ul class="list">
        <li class="elem">
            <a href="/home" use:link class="elemLink">{home.toUpperCase()}</a>
        </li>
        <li class="elem">
            <a href="/registration" use:link class="elemLink">{registration.toUpperCase()}</a>
        </li>
        <li class="elem">
            <a href="/films" use:link class="elemLink">{films.toUpperCase()}</a>
        </li>
        <li class="elem">
            <a href="/presets" use:link class="elemLink">{presets.toUpperCase()}</a>
        </li>
    </ul>
</nav>
