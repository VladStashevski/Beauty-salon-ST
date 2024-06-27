<script>
	export let posts = []
</script>

<div class="w-min-90-1100 ml-auto mr-auto" >
<ul class="grid gap-4 md:grid-cols-3 md:gap-6">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
					src={post.coverImage}
					alt=""
					width={357}
					height={255}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h2>
						{post.title}
					</h2>
					<h3>
						{post.excerpt}
					</h3>
					<span>Читать</span>
				</a>
			</article>
		</li>
	{/each}
</ul>
</div>