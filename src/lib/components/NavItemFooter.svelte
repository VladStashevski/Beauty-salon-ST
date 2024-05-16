<script>
  import { currentPage, isMenuOpen } from '../assets/js/store';

  export let href;

  $: isCurrentPage = $currentPage.startsWith(href);

  const maybeCloseMenu = () => {
    if (href != $currentPage) {
      isMenuOpen.set(false);
    }
  };
</script>

<li>
  <a class="nav-item-footer"
    href={href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>

<style>

  .nav-item-footer:hover {
    color: white;
  }
</style>
