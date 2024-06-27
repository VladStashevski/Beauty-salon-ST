<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '$lib/config'

	export let data
	const { page, totalPosts, posts } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
<section>
	<div class="w-min-90-800 ml-auto mr-auto text-center mb-5 mt-10">
		<h1>Мой блог и новости</h1>
		<h2>Ваша красота – наша страсть. Ваше благополучие – наша цель.</h2>
	</div>
	
	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
	<!-- <h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1> -->
</section>
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}