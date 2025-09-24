const emblaNode = document.querySelector(".embla");
const dotsNode = document.querySelector(".embla__dots");
const options = { loop: true };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

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
