<script>
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<div
	bind:this={el}
	class={cn("flex md:flex-row flex-row-reverse justify-between pl-12 text-center pt-12 md:pb-12 pb-2 sm:text-left", className)}
	{...$$restProps}
>
	<slot />
</div>