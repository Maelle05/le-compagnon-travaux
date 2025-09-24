const emblaNode = document.querySelector(".embla");
const embla2Node = document.querySelector(".embla2");
const dotsNode = document.querySelector(".embla__dots");
const options = { loop: true };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);
const embla2Api = EmblaCarousel(embla2Node, options);

// console.log(emblaApi.slideNodes()); // Access API

// Crée les dots
const dots = emblaApi.scrollSnapList().map(() => {
  const button = document.createElement("button");
  button.classList.add("embla__dot");
  dotsNode.appendChild(button);
  return button;
});

// Gestion sélection active
const setSelectedDot = () => {
  const selected = emblaApi.selectedScrollSnap();
  dots.forEach((dot, i) => dot.classList.toggle("is-selected", i === selected));
};

// Clic sur dot => scroll
dots.forEach((dot, i) =>
  dot.addEventListener("click", () => emblaApi.scrollTo(i))
);

emblaApi.on("select", setSelectedDot);
setSelectedDot();

// Slider 2 button
const prevBtnNode = embla2Node.querySelector(".embla2__button--prev");
const nextBtnNode = embla2Node.querySelector(".embla2__button--next");
prevBtnNode.addEventListener("click", () => embla2Api.scrollPrev());
nextBtnNode.addEventListener("click", () => embla2Api.scrollNext());
