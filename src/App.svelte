<script>
    import Router from 'svelte-spa-router'
    import routes from './services/routes.js'
	import Navigation from './component/Navigation.svelte';
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		background: #001424;
		min-height: 100vh;
		padding: 30px 50px;
	}
	.navigation {
		display: flex;
		justify-content: center;
		padding-bottom: 50px;
	}
	.section {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>

<div class="container">
	<div class="navigation">
		<Navigation />
	</div>
	<div class="section">
		<Router {routes} />
	</div>
</div>
