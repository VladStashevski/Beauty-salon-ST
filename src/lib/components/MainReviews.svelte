<script lang="ts">
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	
	const reviews = [
		{ text: 'Отличный сервис, я очень довольна!', author: 'Анна' },
		{ text: 'Потрясающее качество, буду заказывать еще!', author: 'Мария' },
		{ text: 'Очень профессионально, рекомендую!', author: 'Ирина' },
		{ text: 'Прекрасное обслуживание и внимание к деталям!', author: 'Светлана' },
		{ text: 'Я в восторге от результатов!', author: 'Ольга' },
		{ text: 'Лучший салон, который я посещала!', author: 'Екатерина' }
	];
	</script>
	
<section class="w-min-90-1100 mr-auto ml-auto">
		<div class="text-left w-auto mt-2 mb-5">
			<h2 class="flex">Отзывы клиентов</h2>
			<p>Реальные люди, реальные отзывы. Приглашаем вас оставить отзыв о своем опыте.</p>
		</div>
		<div class="flex justify-center">
			<Carousel.Root
				opts={{
					align: "start",
					loop: true
				}}
				class="w-full max-w-sm"
			>
				<Carousel.Content>
					{#each reviews as review}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<div class="p-1">
								<p class="text-center">{review.text}</p>
								<p class="text-center font-semibold">- {review.author}</p>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>
	</section>
	
