<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  // Предположим, что у вас есть массив фотографий
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ];
</script>
 
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
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <img
                class="pointer-events-none"
                src={image}
                alt=""
              />
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
