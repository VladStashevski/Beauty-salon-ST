<section class="pt-10 pb-10 bg-greenFooter">
<div class="main-service w-min-90-1100 ml-auto mr-auto">

	<h2 class ="title">Оазис для тех, кто хочет побаловать себя моментом релаксации и оздоровления.</h2>
		
	<div class ="about self-end">
			<p class ="mb-5">Мы учитываем настроение наших гостей и предлагаем услугу, которая позволит им чувствовать себя комфортно в данный момент.</p>
			<a href="/about">Все услуги</a>
		</div>

	<!-- <div class ="images">
		<div class="image-one"><img src="/images/greenBG.webp" alt=""></div>
		<div class="image-two"><img src="/images/kitchen.webp" alt=""></div>
		<div class="image-three"><img src="/images/apart.webp" alt=""></div>
	</div> -->


</div>
</section>

<style>
	.main-service {
		display: grid;
  grid-template-columns: 320px 1fr 300px;
  grid-template-areas: "title images about";
}


@media (max-width: 1280px) {
  .main-service {
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
		row-gap: 20px;
    grid-template-areas:
				"title about"
        "images images";
  }

	.images{
	background-repeat: no-repeat;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 120px 240px 120px;
    grid-template-rows: 380px;
    isolation: isolate;
    /* margin-left: -100px;
    margin-right: -100px; */
		--image-offset: 40%;
		justify-items: center;
}
}

@media (max-width: 768px) {
  .main-service {
		column-gap: 20px;
		grid-template-columns: 1fr;
		row-gap: 20px;
    grid-template-areas:
				"title"
        "images"
        "about";
  }

	.images{
	background-repeat: no-repeat;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 120px 240px 120px;
    grid-template-rows: 380px;
    isolation: isolate;
    /* margin-left: -100px;
    margin-right: -100px; */
		--image-offset: 40%;
		justify-items: center;
}
}


.title{
	grid-area: title;
}

.images {
	background-repeat: no-repeat;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 120px 240px 120px;
    grid-template-rows: 380px;
    isolation: isolate;
    /* margin-left: -100px;
    margin-right: -100px; */
		--image-offset: 40%;
		justify-items: center;
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