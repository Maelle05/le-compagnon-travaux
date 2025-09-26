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

// Slider 2 button
const embla2Node = document.querySelector(".embla2__viewport");
const embla2Button = document.querySelector(".embla2__buttons");
const options2 = { loop: true, align: "start" };
const plugins2 = [];
const embla2Api = EmblaCarousel(embla2Node, options2, plugins2);

const prevBtnNode = embla2Button.querySelector(".embla2__button--prev");
const nextBtnNode = embla2Button.querySelector(".embla2__button--next");
prevBtnNode.addEventListener("click", () => embla2Api.scrollPrev());
nextBtnNode.addEventListener("click", () => embla2Api.scrollNext());

// Avis
function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

function initReviews() {
  // Nouvelle API Place (au lieu de PlacesService)
  const place = new google.maps.places.Place({
    id: "ChIJPx9JV9LXB0gR-8PCZ_u74Yg", // ID du lieu ex: ChIJLU7jZClu5kcR4PcOOO6p3I0
    // id: "ChIJLU7jZClu5kcR4PcOOO6p3I0", // ID du lieu ex: ChIJLU7jZClu5kcR4PcOOO6p3I0
  });

  place
    .fetchFields({ fields: ["reviews"] })
    .then((response) => {
      const reviewsContainer = document.getElementById("reviews");
      reviewsContainer.innerHTML = "";

      if (response.place.reviews && response.place.reviews.length > 0) {
        response.place.reviews.forEach((review) => {
          const div = document.createElement("a");
          div.classList.add(
            "rounded-lg",
            "p-8",
            "border",
            "flex-[0_0_100%]",
            "md:flex-[0_0_40%]",
            "hover:bg-[rgba(0,0,0,.05)]",
            "transition-all",
            "duration-300"
          );
          div.style.borderColor = "rgba(0,0,0,.20)";
          div.href = review.googleMapsURI;
          div.target = "_blank";

          // Créer les étoiles
          let stars = "";
          for (let i = 0; i < review.rating; i++) {
            stars +=
              "<img class='size-7' src='/assets/icons/icon-etoile.png' />";
          }

          div.innerHTML = `
                  <div class="flex flex-row justify-between gap-3 items-center" >
                    <div class="flex flex-row gap-3 items-center justify-center">
                      <img class="size-12" src="${
                        review.authorAttribution.photoURI
                      }" />
                      <div class="flex flex-col gap-1 -mt-1" >
                        <p class="poppins-semibold" >${
                          review.authorAttribution.displayName
                        }</p>
                        <p class="poppins-light text-xs" ><em>${
                          review.relativePublishTimeDescription
                        }</em></p>
                      </div>
                    </div>
                    <img class="size-8" src="/assets/icons/icon-google.png" />
                  </div>
                  <div class='flex flex-row gap-1 mt-2' >
                    ${stars}
                  </div>
                  <p class="my-5" >${truncateText(review.text, 200)}</p>
                  <a href="${
                    review.googleMapsURI
                  }" class="poppins-light text-xs block" style="color: #1a73e8;" target="_blank">Voir plus sur Google</a>
              `;

          reviewsContainer.appendChild(div);
        });
        const divEnd = document.createElement("a");
        divEnd.classList.add(
          "rounded-lg",
          "p-8",
          "border",
          "flex-[0_0_80%]",
          "md:flex-[0_0_20%]",
          "hover:bg-[rgba(0,0,0,.05)]",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
          "gap-5",
          "transition-all",
          "duration-300"
        );
        divEnd.style.borderColor = "rgba(0,0,0,.20)";
        divEnd.href = "https://share.google/Uwveae8KJwD8ZP9M5";
        divEnd.target = "_blank";
        divEnd.innerHTML = `
          <img class="size-17" src='/assets/icons/icon-google.png' />
          <span class="text-center">Voir tous les commentaires</span>
        `;

        reviewsContainer.appendChild(divEnd);
      } else {
        reviewsContainer.innerHTML = "<p>Aucun avis trouvé.</p>";
      }
    })
    .then(() => {
      // Slider 3
      const embla3Node = document.querySelector(".embla3");
      const embla3Button = document.querySelector(".embla3__buttons");
      const options3 = { loop: false, align: "start" };
      const plugins3 = [];
      const embla3Api = EmblaCarousel(embla3Node, options3, plugins3);

      const prevBtnNode3 = embla3Button.querySelector(".embla3__button--prev");
      const nextBtnNode3 = embla3Button.querySelector(".embla3__button--next");
      prevBtnNode3.addEventListener("click", () => embla3Api.scrollPrev());
      nextBtnNode3.addEventListener("click", () => embla3Api.scrollNext());
    })
    .catch((err) => console.error("Erreur API:", err));
}

window.onload = initReviews;
