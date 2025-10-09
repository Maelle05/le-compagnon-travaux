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

const prevBtnNode2 = embla2Button.querySelector(".embla2__button--prev");
const nextBtnNode2 = embla2Button.querySelector(".embla2__button--next");
prevBtnNode2.addEventListener("click", () => embla2Api.scrollPrev());
nextBtnNode2.addEventListener("click", () => embla2Api.scrollNext());

// Slider 4 button
const embla4Node = document.querySelector(".embla4__viewport");
const embla4Button = document.querySelector(".embla4__buttons");
const options4 = { loop: true, align: "start" };
const plugins4 = [];
const embla4Api = EmblaCarousel(embla4Node, options4, plugins4);

const prevBtnNode4 = embla4Button.querySelector(".embla4__button--prev");
const nextBtnNode4 = embla4Button.querySelector(".embla4__button--next");
prevBtnNode4.addEventListener("click", () => embla4Api.scrollPrev());
nextBtnNode4.addEventListener("click", () => embla4Api.scrollNext());

// Avis
function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

// function initReviews() {
//   // Nouvelle API Place (au lieu de PlacesService)
//   const place = new google.maps.places.Place({
//     id: "ChIJPx9JV9LXB0gR-8PCZ_u74Yg", // ID du lieu ex: ChIJLU7jZClu5kcR4PcOOO6p3I0
//     // id: "ChIJLU7jZClu5kcR4PcOOO6p3I0", // ID du lieu ex: ChIJLU7jZClu5kcR4PcOOO6p3I0
//   });

//   place
//     .fetchFields({ fields: ["reviews"] })
//     .then((response) => {
//       const reviewsContainer = document.getElementById("reviews");
//       reviewsContainer.innerHTML = "";

//       if (response.place.reviews && response.place.reviews.length > 0) {
//         response.place.reviews.forEach((review) => {
//           const div = document.createElement("a");
//           div.classList.add(
//             "rounded-lg",
//             "p-8",
//             "border",
//             "flex-[0_0_100%]",
//             "md:flex-[0_0_40%]",
//             "hover:bg-[rgba(0,0,0,.05)]",
//             "transition-all",
//             "duration-300"
//           );
//           div.style.borderColor = "rgba(0,0,0,.20)";
//           div.href = review.googleMapsURI;
//           div.target = "_blank";

//           // Créer les étoiles
//           let stars = "";
//           for (let i = 0; i < review.rating; i++) {
//             stars +=
//               "<img class='size-7' src='/assets/icons/icon-etoile.png' />";
//           }

//           div.innerHTML = `
//                   <div class="flex flex-row justify-between gap-3 items-center" >
//                     <div class="flex flex-row gap-3 items-center justify-center">
//                       <img class="size-12" src="${
//                         review.authorAttribution.photoURI
//                       }" />
//                       <div class="flex flex-col gap-1 -mt-1" >
//                         <p class="poppins-semibold" >${
//                           review.authorAttribution.displayName
//                         }</p>
//                         <p class="poppins-light text-xs" ><em>${
//                           review.relativePublishTimeDescription
//                         }</em></p>
//                       </div>
//                     </div>
//                     <img class="size-8" src="/assets/icons/icon-google.png" />
//                   </div>
//                   <div class='flex flex-row gap-1 mt-2' >
//                     ${stars}
//                   </div>
//                   <p class="my-5" >${truncateText(review.text, 200)}</p>
//                   <a href="${
//                     review.googleMapsURI
//                   }" class="poppins-light text-xs block" style="color: #1a73e8;" target="_blank">Voir plus sur Google</a>
//               `;

//           reviewsContainer.appendChild(div);
//         });
//         const divEnd = document.createElement("a");
//         divEnd.classList.add(
//           "rounded-lg",
//           "p-8",
//           "border",
//           "flex-[0_0_80%]",
//           "md:flex-[0_0_20%]",
//           "hover:bg-[rgba(0,0,0,.05)]",
//           "flex",
//           "flex-col",
//           "justify-center",
//           "items-center",
//           "gap-5",
//           "transition-all",
//           "duration-300"
//         );
//         divEnd.style.borderColor = "rgba(0,0,0,.20)";
//         divEnd.href = "https://share.google/Uwveae8KJwD8ZP9M5";
//         divEnd.target = "_blank";
//         divEnd.innerHTML = `
//           <img class="size-17" src='/assets/icons/icon-google.png' />
//           <span class="text-center">Voir tous les commentaires</span>
//         `;

//         reviewsContainer.appendChild(divEnd);
//       } else {
//         reviewsContainer.innerHTML = "<p>Aucun avis trouvé.</p>";
//       }
//     })
//     .then(() => {
//       // Slider 3
//       const embla3Node = document.querySelector(".embla3");
//       const embla3Button = document.querySelector(".embla3__buttons");
//       const options3 = { loop: false, align: "start" };
//       const plugins3 = [];
//       const embla3Api = EmblaCarousel(embla3Node, options3, plugins3);

//       const prevBtnNode3 = embla3Button.querySelector(".embla3__button--prev");
//       const nextBtnNode3 = embla3Button.querySelector(".embla3__button--next");
//       prevBtnNode3.addEventListener("click", () => embla3Api.scrollPrev());
//       nextBtnNode3.addEventListener("click", () => embla3Api.scrollNext());
//     })
//     .catch((err) => console.error("Erreur API:", err));
// }

function parseCSVToAvis(csvText) {
  // Fonction pour convertir un titre de colonne en camelCase sans accents ni caractères spéciaux
  function normalizeKey(label) {
    return label
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // enlève accents
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "") // enlève les caractères spéciaux
      .split(" ")
      .map((word, i) =>
        i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  }

  const rows = [];
  let inQuotes = false;
  let value = "";
  let currentRow = [];

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      currentRow.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (value || currentRow.length > 0) {
        currentRow.push(value);
        rows.push(currentRow);
        currentRow = [];
        value = "";
      }
    } else {
      value += char;
    }
  }

  // Dernière ligne
  if (value || currentRow.length > 0) {
    currentRow.push(value);
    rows.push(currentRow);
  }

  const rawHeaders = rows[0];
  const keys = rawHeaders.map(normalizeKey);
  const dataRows = rows.slice(1);

  const result = dataRows.map((row) => {
    const obj = {};
    keys.forEach((key, i) => {
      let val = row[i] ? row[i].trim() : "";
      if (key === "noteSur5") {
        val = parseFloat(val); // convertir en nombre
      }
      obj[key] = val;
    });
    return obj;
  });

  return result;
}

function safeURL(url) {
  return url && url.trim() !== "" ? url : null;
}

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkXu67D_LVdcHpL9CHS5QKgjS4fgVMUZOW6nhjeFi_CRZMVBQl43JpKzqKD3IufOHGFUcqEBvaqBbF/pub?gid=0&single=true&output=csv";

function initReviews() {
  const reviewsContainer = document.getElementById("reviews");
  reviewsContainer.innerHTML = "";

  fetch(url)
    .then((r) => r.text())
    .then((avis) => {
      const tabAvis = parseCSVToAvis(avis);
      console.log(tabAvis);
      tabAvis.forEach((review) => {
        const div = document.createElement("div");
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
        // div.href = review.googleMapsURI;
        // div.target = "_blank";

        // Créer les étoiles
        let stars = "";
        for (let i = 0; i < review.noteSur5; i++) {
          stars += "<img class='size-7' src='/assets/icons/icon-etoile.png' />";
        }

        const profileImg = safeURL(review.photoDeProfilUrlOptionel)
          ? `<img class="size-12 rounded-full" src="${review.photoDeProfilUrlOptionel}" />`
          : `<img class="size-12 rounded-full" src="/assets/logo-1.png" />`;

        const avisImg = safeURL(review.photoDeLavisUrlOptionel)
          ? `<div class='w-full mt-5'>
              <img class="w-[50%] aspect-3/2 object-cover rounded-lg" src="${review.photoDeLavisUrlOptionel}" />
            </div>`
          : "";

        div.innerHTML = `
                  <div class="flex flex-row justify-between gap-3 items-center" >
                    <div class="flex flex-row gap-3 items-center justify-center">
                      ${profileImg}
                      <div class="flex flex-col gap-1 -mt-1" >
                        <p class="poppins-semibold" >${review.nom}</p>
                        <p class="poppins-light text-xs" ><em>${review.date}</em></p>
                      </div>
                    </div>
                    <img class="size-8" src="/assets/icons/icon-google.png" />
                  </div>
                  <div class='flex flex-row gap-1 mt-2' >
                    ${stars}
                  </div>
                  ${avisImg}
                  <p class="my-5" >${review.avis}</p>
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
      // divEnd.href = "https://share.google/Uwveae8KJwD8ZP9M5";
      // divEnd.target = "_blank";
      divEnd.innerHTML = `
          <img class="size-17" src='/assets/icons/icon-google.png' />
          <span class="text-center">Voir tous les commentaires</span>
        `;

      reviewsContainer.appendChild(divEnd);
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
