<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  // Предположим, что у вас есть массив фотографий
  const images = [
    '/images/hair.webp',
    '/images/hair2.webp',
    '/images/hair3.webp',
    '/images/hair5.webp',
    '/images/hair6.webp',
    '/images/hair8.webp',
  ];
</script>
 
<div class="flex justify-center">
<Carousel.Root
  opts={{
    align: "start",
    loop: true
  }}
  class="w-full max-w-sm"
>
  <Carousel.Content>
    {#each images as image}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
        <div class="p-1">
              <img
                class=""
                src={image}
                alt=""
              />
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
</div>