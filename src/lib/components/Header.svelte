<script>
	import { siteTitle } from '$lib/config'
	import MainNav from './MainNav.svelte'
	import * as Drawer from "$lib/components/ui/drawer";

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>

<header class="flex items-center justify-between sticky top-0">

<Drawer.Root direction="left">
  <Drawer.Trigger>Меню</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
			<Drawer.Close>
			
				<Drawer.Title>
				<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
				</a>
				<a href="/" class="text-5xl">
					{siteTitle}
				</a>
				</Drawer.Title>
				<Drawer.Description>
					<MainNav />
				</Drawer.Description>
		</Drawer.Close>
    </Drawer.Header>
    <Drawer.Footer>
      <Drawer.Close>Закрыть</Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>

<a href="/" class="text-5xl">
	{siteTitle}
</a>


<div class="flex">
	<img class="h-6 xl:h-6"src="/instagram.svg" alt="instagram">
	<img class="h-6 xl:h-6" src="/telegram.svg" alt="telegram">
	<img class="h-6 xl:h-6" src="/whatsapp.svg" alt="whatsapp">
</div>
</header>