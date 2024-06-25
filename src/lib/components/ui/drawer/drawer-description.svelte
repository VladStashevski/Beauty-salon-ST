<script>
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Description
	bind:el
	class={cn("md:pl-20 pl-7 text-sm text-muted-foreground md:mb-16 mb-8", className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Description>
