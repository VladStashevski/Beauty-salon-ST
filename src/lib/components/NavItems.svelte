<script lang="ts">
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<ul class="items-start gap-4 flex flex-col">
	{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
	{/each}
</ul>