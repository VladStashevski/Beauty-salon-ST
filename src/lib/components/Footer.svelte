<script>
	import { siteAuthor } from '$lib/config';
	import NavItemsFooter from './NavItemsFooter.svelte';
</script>

<footer class="bg-greenFooter text-white">
	<div class="h-[288px] border-8 border-greenPatern bg-center bg-repeat-space bg-greenPatern" style="background-image: url('/pattern.svg');"></div>

	<div class="grid gap-10 pb-28 pt-28">
		
		<div class="w-min-90-1100 mr-auto ml-auto">
			<img class="text-xl"src="/emblem-light.svg" alt="">
		</div>

	<div class="custom-grid-header w-min-90-1100 mr-auto ml-auto gap-20">
		<div class="contact flex flex-col">
			<h3 class="mb-5">Контакты</h3>
			<div>
				<p>
					<a href="tel:+79527212594">+7(952)721-25-94</a><br>
					<a href="mailto:AlenaStashevski@gmail.com">AlenaStashevski@gmail.com</a><br>
					<a href="https://maps.app.goo.gl/n9zSPXiQJ3pvFG8y8">Югорский тракт, 4, Сургут</a><br>
				</p>
			</div>
			<div class="flex mt-auto">
				<img class="fill-white h-20 xl:h-10" src="/instagram.svg" alt="instagram">
				<img class="fill-white h-20 xl:h-10" src="/telegram.svg" alt="telegram">
				<img class="fill-white text-blue-500 h-20 xl:h-10" src="/whatsapp.svg" alt="whatsapp">
			</div>
		</div>

		<div class="opening flex flex-col">
			<h3 class="mb-5">Часы открытия</h3>
			<div class="">
				<p class="mb-2">Monday to Thursday: 09:00 – 18:00</p>
				<p class="mb-2">Friday: 09:00 – 20:00</p>
				<p class="mb-2">Saturday: 09:00 – 16:00</p>
			<h3 class="mt-20">Newsletter</h3>
			<button  class="mt-2" data-once="subscribe">Subscribe to our newsletter</button>
			</div>
		</div>
		<div class="nav">


		<nav>
		<NavItemsFooter />
	</nav>
</div>

	</div>

	<div>
		<div class="flex flex-wrap justify-between w-min-90-1100 mr-auto ml-auto">
			<nav >
				<ul class="flex align-center">
					<li>
						<a href="/">Cooky Policy</a>
					</li>
					<li>
						<a href="/">Disclaimer</a>
					</li>
					<li>
						<a href="/">Privacy Policy</a>
					</li>
				</ul>
			</nav>
	
		<div class="text-right">
			<p>© All rights reserved</p>
			<p>
				design
				<a href="/" target="_blank">qwerty</a>
				- development
				<a href="/" target="_blank">{siteAuthor} {new Date().getFullYear()} </a>
			</p>
			<a class="invisible" href="/api/rss.xml" data-sveltekit-reload>RSS</a>
		</div>
	</div>
	</div>
	</div>
</footer>

<style>
	.custom-grid-header {
  display: grid;
  grid-template-columns: auto 1fr 140px;
  grid-template-areas: "contact opening nav";
}

.contact{
	grid-area: contact;
}

.opening{
	grid-area: opening;
}

.nav {
	grid-area: nav;
}
</style>