<script>
  import { siteTitle } from '$lib/config';
  import MainNav from './MainNav.svelte';
  import * as Drawer from "$lib/components/ui/drawer";
  import DrawerHeader from './ui/drawer/drawer-header.svelte';
  import DrawerDescription from './ui/drawer/drawer-description.svelte';

  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let scrollPercent = 0;

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = (scrollTop / docHeight) * 100;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const focusMain = () => {
    const main = document.querySelector('main');
    main.focus();
  };
</script>

<header class="{scrollPercent > 20 ? 'header-scroll-main' : ''} {$page.url.pathname === '/' ? 'header-main-page' : 'header-other-page'}">
  <Drawer.Root direction="left">
    <Drawer.Trigger class="flex items-center">
      <img class="text-white h-11 xl:h-11 mr-6" src="/line.svg" alt="открыть меню навигации">
      <span>Меню</span>
    </Drawer.Trigger>

    <Drawer.Content>
      <DrawerHeader>
        <Drawer.Close class="flex items-center">
          <img class="h-11 xl:h-11 mr-6" src="/cross.svg" alt="закрыть меню навигации">
          <span>Закрыть</span>
        </Drawer.Close>
        <Drawer.Close>
          <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">asdasd</a>
          <a href="/" class="text-5xl pr-20">{siteTitle}</a>
        </Drawer.Close>
      </DrawerHeader>

      <DrawerDescription>
        <Drawer.Close>
          <MainNav />
        </Drawer.Close>
      </DrawerDescription>

      <Drawer.Footer>
        <a href="tel:+79527212594" class="text-base">+7(952)721-25-94</a>
        <a href="mailto:AlenaStashevski@gmail.com" class="text-base">AlenaStashevski@gmail.com</a>
        <a href="/" class="text-base">Югорский тракт, 4, Сургут</a>

        <div class="flex">
          <img class="h-20 xl:h-10" src="/instagram.svg" alt="instagram">
          <img class="h-20 xl:h-10" src="/telegram.svg" alt="telegram">
          <img class="h-20 xl:h-10" src="/whatsapp.svg" alt="whatsapp">
        </div>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>

  <a href="/" class="text-5xl ml-auto mr-auto">{siteTitle}</a>

  <div class="flex">
    <img class="h-6 xl:h-6" src="/instagram.svg" alt="instagram">
    <img class="h-6 xl:h-6" src="/telegram.svg" alt="telegram">
    <img class="h-6 xl:h-6" src="/whatsapp.svg" alt="whatsapp">
  </div>
</header>

<style>
  :root {
    --scrollbar-width: 0px; /* Default value */
  }

  .header-main-page {
    display: flex;
    justify-content: space-between;
    width: calc(100% - var(--scrollbar-width));
    position: fixed;
    top: 0;
    z-index: 50;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 3rem;
    padding-left: 3rem;
    align-items: center;
  }

	.header-other-page {
		display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 3rem;
    padding-left: 3rem;
    align-items: center;
		background: white;
	}
</style>
