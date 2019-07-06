// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("../../serviceWorker.js").then(() => {
//     console.log("Service worker registered");
//   });
// }

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("../../serviceWorker.js")
//     .then(registration => {
//       // registration worked
//       console.log("serviceWorker Registration succeeded.");
//       registration.unregister().then(boolean => {
//         // if boolean = true, unregister is successful
//       });
//     })
//     .catch(error => {
//       // registration failed
//       console.log("serviceWorker Registration failed with " + error);
//     });
// }

/*
 *DIsplay Backdrop when mobile side bar is toggled
 *
 */
const backdrop = document.querySelector(".backdrop");
const burgerButton = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

const backDrop = () => {
  backdrop.classList.remove("shade");
};
const mobileButton = () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("shade");
};
const removeBackDrop = () => {
  mobileNav.classList.remove("open");
  backDrop();
};

const animate = () => {
  burgerButton.addEventListener("click", mobileButton);
  backdrop.addEventListener("click", removeBackDrop);
};

animate();

/**
 * Animation
 */
const gallery = document.querySelectorAll('div[class*="card"]');
gallery.forEach(card => {
  TweenMax.from(card, 2, { x: 100, ease: Bounce.easeOut });
});
