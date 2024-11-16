// ----------------- HORIZONTAL SCROLLING -----------------

const events = [
  {
    imgSrc: "images/maaya.jpg",
    title: "MAAYA 2024",
    description: "PES ELECTRONIC CITY'S LARGEST CULTURAL FESTIVAL",
  },
  {
    imgSrc: "images/aatmatrisha.jpg",
    title: "AATMATRISHA",
    description: "PES RING ROAD'S LARGEST CULTURAL FESTIVAL",
  },
];

let currentIndex = 0;

const eventImg = document.querySelector(".event-img");
const eventTitle = document.querySelector(".hero-event-details h2");
const eventDescription = document.querySelector(".hero-event-details p");

document.getElementById("left-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + events.length) % events.length;
  updateEvent();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % events.length;
  updateEvent();
});

function updateEvent() {
  eventImg.src = events[currentIndex].imgSrc;
  eventTitle.textContent = events[currentIndex].title;
  eventDescription.textContent = events[currentIndex].description;
}

// ----------------- FILTER FUNCTION -----------------

document
  .getElementById("event-status")
  .addEventListener("change", () => filterEvents());
document
  .getElementById("event-campus")
  .addEventListener("change", () => filterEvents());

let selectedCategory = null;

const filterImages = document.querySelectorAll(".filters > div");
filterImages.forEach((filterImage) => {
  filterImage.addEventListener("click", () => {
    const category = filterImage.getAttribute("data-category");
    if (selectedCategory === category) {
      selectedCategory = null; // Deselect the category if it's clicked again
    } else {
      selectedCategory = category; // Select the new category
    }
    filterEvents(selectedCategory, true);
  });
});

function filterEvents(category = null, isCategoryClicked = false) {
  const status = document.getElementById("event-status").value;
  const campus = document.getElementById("event-campus").value;

  const events = document.querySelectorAll(".events > div");
  let hasVisibleEvents = false;

  events.forEach((event) => {
    const matchesStatus = status === "all" || event.classList.contains(status);
    const matchesCampus = campus === "all" || event.classList.contains(campus);
    const matchesCategory = !category || event.classList.contains(category);

    if (
      matchesStatus &&
      matchesCampus &&
      (isCategoryClicked ? matchesCategory : true)
    ) {
      event.style.display = "block";
      hasVisibleEvents = true;
    } else {
      event.style.display = "none";
    }
  });

  document.getElementById("no-events").style.display = hasVisibleEvents
    ? "none"
    : "block";
}
