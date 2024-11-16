document.addEventListener("DOMContentLoaded", function () {
  const mainEvent = document.querySelector(".main-event");
  const eventsContainer = document.querySelector(".events-container");

  let mainEventScrolled = false;

  // Helper function to prevent page scrolling
  function disablePageScrolling() {
    document.body.style.overflow = "hidden";
  }

  // Helper function to enable page scrolling
  function enablePageScrolling() {
    document.body.style.overflow = "auto";
  }

  window.addEventListener("scroll", function () {
    const mainEventBottom = mainEvent.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const containerBottom = eventsContainer.getBoundingClientRect().bottom;

    if (mainEventBottom <= viewportHeight && !mainEventScrolled) {
      // Fix the events container at the top of the screen when reaching the bottom of .main-event
      mainEventScrolled = true;
      eventsContainer.style.position = "fixed";
      eventsContainer.style.top = `${viewportHeight - mainEventBottom}px`;
      eventsContainer.style.width = "100%";

      // Disable page scrolling
      disablePageScrolling();
    }

    // When the .events-container reaches its bottom, enable page scrolling
    if (mainEventScrolled && containerBottom <= viewportHeight) {
      // Restore page scrolling when reaching the end of the events container
      enablePageScrolling();
      eventsContainer.style.position = "static";
      mainEventScrolled = false;
    }
  });
});
