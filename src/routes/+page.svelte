<script>
	import MainInfo from '$lib/components/MainInfo.svelte'
	import MainCarousel from '$lib/components/MainCarousel.svelte';
	import MainAspects from '$lib/components/MainAspects.svelte';
	import MainService from '$lib/components/MainService.svelte';
	import MainReviews from '$lib/components/MainReviews.svelte';
	import MainBlog from '$lib/components/MainBlog.svelte';
</script>

<section class="relative bg-cover bg-center h-screen flex flex-col justify-end items-center" style="background-image: url('/images/backgr.webp');">
	<h3 class="text-xl xl:text-xl text-center font-bold mb-6 text-white">DIVE INTO A <br/> SENSORIAL JOURNEY</h3>
	<div class="flex justify-center items-center mb-6">
		<img class="h-18 xl:h-18 animate-bounce" src="/arrow.svg" alt="открыть меню навигации">
	</div>
</section>
<MainInfo/>
<MainCarousel/>
<MainAspects/>
<MainService/>
<MainReviews/>
<MainBlog/>


<style>
	.animate-bounce {
 animation: scroll 1.5s ease-in-out infinite;
	}

	@keyframes scroll {
			0%, 100% {
					transform: translateY(0);
			}
			50% {
					transform: translateY(-20px);
			}
	}
</style>