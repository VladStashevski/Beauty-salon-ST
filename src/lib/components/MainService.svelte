<section class="pt-10 pb-10 bg-greenFooter">
<div class="main-service w-custom-logo ml-auto mr-auto">

	<h2 class ="title">Оазис для тех, кто хочет побаловать себя моментом релаксации и оздоровления.</h2>
		
	<div class ="about self-end">
			<p class ="mb-5">Мы учитываем настроение наших гостей и предлагаем услугу, которая позволит им чувствовать себя комфортно в данный момент.</p>
			<a href="/about">Все услуги</a>
		</div>

	<div class ="images">
		<div class="image-one"><img src="/static/images/greenBg.webp" alt=""></div>
		<div class="image-two"><img src="/static/images/kitchen.webp" alt=""></div>
		<div class="image-three"><img src="/static/images/apart.webp" alt=""></div>
	</div>


</div>
</section>

<style>
	.main-service {
		display: grid;
  grid-template-columns: 320px 1fr 300px;
  grid-template-areas: "title images about";
}

.title{
	grid-area: title;
}

.images{
	grid-area: images;
	pointer-events: none;
  grid-area: images;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  --image-offset: 40%;
  isolation: isolate;
}

.about {
	grid-area: about;
}

.image-one {
	margin-right: calc(var(--image-offset)* -1);
    -ms-flex-item-align: end;
    align-self: end;
}

.image-two {
	position: relative;
    z-index: -1;
    margin-top: 40px;
    margin-bottom: 40px;
}

.image-three {
	margin-left: calc(var(--image-offset)* -1);
    -ms-flex-item-align: start;
    align-self: start;
}
</style>