<script>
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<div bind:this={el} class={cn("flex flex-col gap-2 pl-28", className)} {...$$restProps}>
	<slot />
</div>
