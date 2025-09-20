const emblaNode = document.querySelector(".embla");
const options = { loop: true };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

console.log(emblaApi.slideNodes()); // Access API
