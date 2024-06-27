<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Мой блог и новости</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<section>
	<div class="w-min-90-800 ml-auto mr-auto text-center mb-5 mt-10">
		<h1>Мой блог и новости</h1>
		<h2>Ваша красота – наша страсть. Ваше благополучие – наша цель.</h2>
	</div>

			<PostsList posts={data.posts} />

			<Pagination currentPage={1} totalPosts={data.total} />
</section>