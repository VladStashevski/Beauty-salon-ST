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
    <Drawer.Trigger class="flex items-center actions">
      <img class="text-white h-11 xl:h-11 md:mr-6 mr-0 ml-0 md:ml-0" src="/line.svg" alt="открыть меню навигации">
      <span class="md:flex hidden" src="/line.svg" >Меню</span>
    </Drawer.Trigger>

    <Drawer.Content>
      <DrawerHeader>
        <Drawer.Close class="flex items-center">
          <img class="h-11 xl:h-11 mr-6" src="/cross.svg" alt="закрыть меню навигации">
          <span class="md:flex hidden">Закрыть</span>
        </Drawer.Close>
        <Drawer.Close>
          <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main"></a>
          <a href="/" class="md:text-5xl text-3xl pr-20">{siteTitle}</a>
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
          <img class="h-10 xl:h-6" src="/instagram.svg" alt="instagram">
          <img class="h-10 xl:h-6" src="/telegram.svg" alt="telegram">
          <img class="h-10 xl:h-6" src="/whatsapp.svg" alt="whatsapp">
        </div>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>

  <a href="/" class="logo md:text-5xl text-3xl ml-auto mr-auto ">{siteTitle}</a>

  <div class="flex social">
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
    display: grid;
    width: 100%;
    grid-template-areas: "actions logo social";
    grid-template-columns: 100px 1fr 100px;
    justify-content: space-between;
    /* width: calc(100% - var(--scrollbar-width)); */
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    top: 0;
    z-index: 50;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-right: 48px;
    padding-left: 48px;
    align-items: center;
    transition: 0.3s;
    color: white;
  }

	.header-other-page {
    display: grid;
    width: 100%;
    grid-template-areas: " logo social actions";
    grid-template-columns: 100px 1fr 100px;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-right: 48px;
    padding-left: 48px;
    align-items: center;
		background: white;
    transition: 0.3s;
	}

  .header-scroll-main {
    background: white;
    color: black;
    padding-bottom: 20px;
    transition: 0.3s;
    background: white;
  }

  .actions {
	grid-area: actions;
  }

  .logo {
	grid-area: logo;
  }

  .social {
	grid-area: social;
  }


  @media (max-width: 768px) {
  .header-main-page {
    grid-template-columns: 1fr auto auto;
    gap: 20px;
    padding-right: 10px;
    padding-left: 10px;
    grid-template-areas: "logo social actions";
  }

  .header-other-page {
    grid-template-columns: 1fr auto auto;
    gap: 20px;
    padding-right: 10px;
    padding-left: 10px;
    grid-template-areas: "logo social actions";
  }
}

  
</style>
