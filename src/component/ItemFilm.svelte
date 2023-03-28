<script>
    export let logo = undefined
    export let name = undefined
</script>

<style>
    .item {
        width: 100px;
        padding: 15px;
        margin: 15px;
        background-color: #1D334A;
        border-radius: 16px;
    }
    .img {
        width: 100px;
    }
    .title {
        color: #fff;
    }
</style>

<div class="item">
    <img src={logo} class="img" alt="gg">
    <p class="title">{name}</p>
</div>
