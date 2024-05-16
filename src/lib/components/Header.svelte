<script>
	import { siteTitle } from '$lib/config'
	import MainNav from './MainNav.svelte'
	import * as Drawer from "$lib/components/ui/drawer";
	import DrawerHeader from './ui/drawer/drawer-header.svelte';
	import DrawerDescription from './ui/drawer/drawer-description.svelte';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>

<header class="z-10 flex bg-green-900 mr-12 pt-12 ml-12 items-center justify-between sticky top-0">

<Drawer.Root direction="left">

  <Drawer.Trigger class="flex items-center">
		<img class="text-white h-11 xl:h-11 mr-6" src="/line.svg" alt="открыть меню навигации">
		<span>Меню</span>
	</Drawer.Trigger>

  <Drawer.Content>

		<DrawerHeader>
			<Drawer.Close class="flex items-center">
				<img class="h-11 xl:h-11 mr-6" src="/cross.svg" alt="открыть меню навигации">
				<span>Закрыть</span>
			</Drawer.Close>
			<Drawer.Close>
				<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
				</a>
				<a href="/" class="text-5xl pr-20">
					{siteTitle}
				</a>
			</Drawer.Close>
		</DrawerHeader>

		<DrawerDescription>
		<Drawer.Close>
			<MainNav />
		</Drawer.Close>
	</DrawerDescription>

	<Drawer.Footer>
		<a href="/" class="text-base">+7(952)721-25-94
		</a>
		<a href="/" class="text-base">AlenaStashevski@gmail.com
		</a>
		<a href="/" class="text-base">Югорский тракт, 4, Сургут
		</a>

		<div class="flex">
			<img class="h-20 xl:h-10"src="/instagram.svg" alt="instagram">
			<img class="h-20 xl:h-10" src="/telegram.svg" alt="telegram">
			<img class="h-20 xl:h-10" src="/whatsapp.svg" alt="whatsapp">
		</div>
	</Drawer.Footer>

  </Drawer.Content>

</Drawer.Root>

<a href="/" class="text-5xl text-white">
	{siteTitle}
</a>


<div class="flex">
	<img class="h-6 xl:h-6"src="/instagram.svg" alt="instagram">
	<img class="h-6 xl:h-6" src="/telegram.svg" alt="telegram">
	<img class="h-6 xl:h-6" src="/whatsapp.svg" alt="whatsapp">
</div>
</header>