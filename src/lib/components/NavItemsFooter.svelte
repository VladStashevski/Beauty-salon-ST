<script lang="ts">
	import { navItems } from '$lib/config';
	import NavItemFooter from './NavItemFooter.svelte';
</script>

<ul class="items-start gap-1 flex flex-col">
	{#each navItems as page}
		<NavItemFooter href={page.route}>
			{page.title}
		</NavItemFooter>
	{/each}
</ul>