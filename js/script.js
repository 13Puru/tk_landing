const scrollContent = document.querySelector('.scroll-content');
    const cards = document.querySelectorAll('.custom-card');
    const cardWidth = cards[0].offsetWidth + 50; // Card width + gap
    let isTransitioning = false;

    // Function to trigger scroll animation
    function scrollCards() {
      if (isTransitioning) return;
      isTransitioning = true;

      // Apply transformation for scrolling
      scrollContent.style.transition = "transform 1s ease-in-out";
      scrollContent.style.transform = `translateX(-${cardWidth}px)`;

      setTimeout(() => {
        // Move the first card to the end
        scrollContent.appendChild(scrollContent.firstElementChild);

        // Reset scroll position without animation
        scrollContent.style.transition = "none";
        scrollContent.style.transform = "translateX(0)";

        isTransitioning = false;
      }, 1000); // Wait for the transition to finish
    }

    // Start scrolling every 2 seconds
    setInterval(scrollCards, 2000);