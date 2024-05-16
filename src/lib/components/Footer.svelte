<script>
	import { siteAuthor } from '$lib/config';
	import NavItemsFooter from './NavItemsFooter.svelte';
</script>

<footer class="mr-12 ml-12">


	
	<nav>
		<NavItemsFooter />
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
	<a class="invisible" href="/api/rss.xml" data-sveltekit-reload>RSS</a>
</footer>
