const pictures = document.getElementsByClassName("picture");
const btnLeft = document.querySelector(".left-arrow");
const btnRight = document.querySelector(".right-arrow");
const btnOldLeft = document.querySelector(".left-arrow-slideshow");
const btnOldRight = document.querySelector(".right-arrow-slideshow");

let currentPictureIndex = 0;
let lastPictureIndex = pictures.length - 1;

function goToSlide(slideIndex) {
  [...pictures].forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slideIndex)}%)`)
  );
  currentPictureIndex = slideIndex;
}

goToSlide(currentPictureIndex);

function prepareNextSlide() {
  if (currentPictureIndex === 0) {
    pictures[0].insertAdjacentElement(
      "beforebegin",
      pictures[lastPictureIndex]
    );
    pictures[0].style.transform = `translateX(-${100}%)`;
    currentPictureIndex++;
  }

  if (currentPictureIndex === lastPictureIndex) {
    pictures[lastPictureIndex].insertAdjacentElement("afterend", pictures[0]);
    pictures[lastPictureIndex].style.transform = `translateX(${100}%)`;
    currentPictureIndex--;
  }
}

if (currentPictureIndex === lastPictureIndex || currentPictureIndex === 0) {
  prepareNextSlide();
}

function shiftSlides(direction) {
  if (direction) {
    currentPictureIndex++;
  } else {
    currentPictureIndex--;
  }

  if (currentPictureIndex === lastPictureIndex || currentPictureIndex === 0) {
    prepareNextSlide();
  }
  goToSlide(currentPictureIndex);
}

btnRight.addEventListener("click", shiftSlides.bind(null, 1));
btnLeft.addEventListener("click", shiftSlides.bind(null, 0));
btnOldRight.addEventListener("click", shiftSlides.bind(null, 1));
btnOldLeft.addEventListener("click", shiftSlides.bind(null, 0));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const textContent = document.getElementsByClassName("content");

let currentContentIndex = 0;
let lastContentIndex = textContent.length - 1;

function goToSlide2(slideIndex) {
  [...textContent].forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slideIndex)}%)`)
  );
  currentContentIndex = slideIndex;
}

goToSlide2(currentContentIndex);

function prepareNextSlide2() {
  if (currentContentIndex === 0) {
    textContent[0].insertAdjacentElement(
      "beforebegin",
      textContent[lastContentIndex]
    );
    textContent[0].style.transform = `translateX(-${100}%)`;
    currentContentIndex++;
  }

  if (currentContentIndex === lastContentIndex) {
    textContent[lastContentIndex].insertAdjacentElement(
      "afterend",
      textContent[0]
    );
    textContent[lastContentIndex].style.transform = `translateX(${100}%)`;
    currentContentIndex--;
  }
}

if (currentContentIndex === lastContentIndex || currentContentIndex === 0) {
  prepareNextSlide2();
}

function shiftSlides2(direction) {
  if (direction) {
    currentContentIndex++;
  } else {
    currentContentIndex--;
  }

  if (currentContentIndex === lastContentIndex || currentContentIndex === 0) {
    prepareNextSlide2();
  }
  goToSlide2(currentContentIndex);
}

btnRight.addEventListener("click", shiftSlides2.bind(null, 1));
btnLeft.addEventListener("click", shiftSlides2.bind(null, 0));
btnOldRight.addEventListener("click", shiftSlides2.bind(null, 1));
btnOldLeft.addEventListener("click", shiftSlides2.bind(null, 0));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a MediaQueryList object
const x = window.matchMedia("(max-width: 39em)");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    const topNav = document.querySelectorAll(".top-nav");
    topNav.forEach((t) => t.classList.add("hidden"));

    const menu = document.querySelector(".menu");
    console.log(menu);
    menu.classList.remove("hidden");

    const imagesMobile = document.querySelectorAll(".mobile-img");
    imagesMobile.forEach((i) => i.classList.remove("hidden"));
    const imagesDesktop = document.querySelectorAll(".desktop-img");
    imagesDesktop.forEach((i) => i.classList.add("hidden"));
  } else {
    const topNav = document.querySelectorAll(".top-nav");
    topNav.forEach((t) => t.classList.remove("hidden"));

    const menu = document.querySelector(".menu");
    menu.classList.add("hidden");

    const imagesMobile = document.querySelectorAll(".mobile-img");
    imagesMobile.forEach((i) => i.classList.add("hidden"));
    const imagesDesktop = document.querySelectorAll(".desktop-img");
    imagesDesktop.forEach((i) => i.classList.remove("hidden"));
  }
}

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

const y = window.matchMedia("(max-width: 63em)");

const leftA = document.querySelector(".left-arrow-slideshow");
const oldLeftA = document.querySelector(".left-arrow");
const rightA = document.querySelector(".right-arrow-slideshow");
const oldRightA = document.querySelector(".right-arrow");

function changeArrow(y) {
  if (y.matches) {
    leftA.classList.remove("hidden");
    oldLeftA.classList.add("hidden");
    rightA.classList.remove("hidden");
    oldRightA.classList.add("hidden");
  } else {
    leftA.classList.add("hidden");
    oldLeftA.classList.remove("hidden");
    rightA.classList.add("hidden");
    oldRightA.classList.remove("hidden");
  }
}

changeArrow(y);

y.addEventListener("change", function () {
  changeArrow(y);
});

////////////////////////////////////////////////////////////////////

const m = document.querySelector(".menu");

m.addEventListener("click", function () {
  document.querySelector(".outermost-div").classList.remove("hidden");
  document.querySelector(".mobile-nav").classList.remove("hidden");
  document.querySelector(".close-mobile").classList.remove("hidden");
  const tnm = document.querySelectorAll(".top-nav-mobile");
  tnm.forEach((t) => t.classList.remove("hidden"));
});

const c = document.querySelector(".close-mobile");

c.addEventListener("click", function () {
  document.querySelector(".outermost-div").classList.add("hidden");
  document.querySelector(".mobile-nav").classList.add("hidden");
  document.querySelector(".close-mobile").classList.add("hidden");
  const tnm = document.querySelectorAll(".top-nav-mobile");
  tnm.forEach((t) => t.classList.add("hidden"));
});
