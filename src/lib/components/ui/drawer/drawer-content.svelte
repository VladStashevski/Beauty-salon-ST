<script>
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
	import DrawerOverlay from "./drawer-overlay.svelte";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Portal>
	<DrawerOverlay />
	<DrawerPrimitive.Content
		class={cn(
			"fixed inset-x-0 z-50 flex flex-col h-auto border bg-greenMain bottom-0 left-0 top-0 w-[100%] md:w-[70%]",
			className
		)}
		{...$$restProps}
	>
		<slot />
	</DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
