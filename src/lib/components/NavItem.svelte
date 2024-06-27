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
  <a class="nav-item"
    href={href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>

<style>
  .nav-item {
    position: relative;
    padding-left: 1em; /* Initial padding */
    transition: padding-left 500ms, margin-left 500ms; /* Transition for smooth effect */
  }

  .nav-item:hover {
    padding-left: 2em;
    margin-left: 0em;
  }

  .nav-item:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: calc(50%);
    width: calc(1em - 15px);
    left: 0;
    border-top: 3px solid #ffffff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-delay: 200ms; /* Add delay to match the movement transition */
  }

  .nav-item:hover:before {
    transform: scaleX(2);
  }
</style>
