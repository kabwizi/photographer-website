let listOfImg = $(".project-wrapper");
//animer le text d'entré (page Projects)
var textWrapper = document.querySelector(".into-title .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
anime({
  targets: ".into-title .letter",
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 1000,
  easing: "easeOutExpo",
  delay: (el, i) => 50 * i,
});
anime({
  targets: "#intro-little-description",
  translateY: [50, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 500,
  delay: 500,
});

//À toute les image, afficher leur description
// respectivent lorsque la souris se trouve sur l'image
let allImageGallery = gsap.utils.toArray(".project-wrapper img");
allImageGallery.forEach((elem) => {
  elem.addEventListener("mouseenter", setPictureDescription);
  elem.addEventListener("mouseleave", removePictureDescription);
});

function setPictureDescription(e) {
  $("#mouse-follower-description").html(e.target.dataset.imgDescription);
  anime({
    targets: "#mouse-follower-description",
    scale: 11.5,
    background: "rgb(46, 45, 43)",
    color: "#fff",
    duration: 2,
    easing: "spring(1, 500, 10, 0)",
  });
  anime({
    targets: "#mouse-follower",
    opacity: 0,
    duration: 0.5,
    easing: "spring(1, 80, 10, 0)",
  });
}

function removePictureDescription(e) {
  $("#mouse-follower-description").html("");
  anime({
    targets: "#mouse-follower-description",
    scale: 1,
    background: "#424242",
    duration: 0.8,
    easing: "spring(1, 80, 10, 0)",
  });
  anime({
    targets: "#mouse-follower",
    opacity: 0.5,
    background: "#424242",
    duration: 0.5,
    easing: "spring(1, 80, 10, 0)",
  });
}

//pourcentage de l'element visible dans l'écrant avant animation
let options = {
  threshold: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
};

let callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    $(entries[0].target).addClass("enter-screen");
  }
};

let observer = new IntersectionObserver(callback, options);

listOfImg.toArray().forEach((elem) => {
  observer.observe(elem);
});

function toggleStyleSheet(elementId, imageIdsString) {
  //stop event propagation
  event.stopPropagation();
  const imageListWrapper = document.querySelector(elementId);
  console.log(imageListWrapper.classList.contains("active"));
  if (imageListWrapper.classList.contains("active")) {
    imageListWrapper.classList.remove("active");
    anime({
      targets: imageListWrapper,
      translateY: "100%",
      duration: 200,
      easing: "cubicBezier(0.000, 0.000, 0.580, 1.000)",
    });
  } else {
    imageListWrapper.classList.add("active");

    if (imageIdsString) {
      const galleryWrapper = document.querySelector("#splide__list-parent");
      const imageIds = imageIdsString.split(",");
      galleryWrapper.innerHTML = "";
      imageIds.forEach((imageId) => {
        galleryWrapper.innerHTML += imageGalerryTemplate(imageId);
      });

      var splide = new Splide(".splide", {
        perPage: 3,
        type: "loop",
        focus: "center",
        direction: "ltr",
        keyboard: true,
        wheel: true,
      });
      splide.mount();
    }

    anime({
      targets: imageListWrapper,
      translateY: 0,
      duration: 200,
      easing: "cubicBezier(0.000, 0.000, 0.580, 1.000)",
    });
  }
}

function closeStyleSheet(event) {
  //stop event propagation
  event.stopPropagation();
  const imageListWrapper = document.querySelector("#image-list-wrapper");
  const contactWrapper = document.querySelector("#contact-container");

  imageListWrapper.classList.remove("active");
  contactWrapper.classList.remove("active");

  anime({
    targets: [imageListWrapper, contactWrapper],
    translateY: "100%",
    duration: 200,
    easing: "cubicBezier(0.000, 0.000, 0.580, 1.000)",
  });
}

function imageGalerryTemplate(imageIndex) {
  return `
    <li class="splide__slide">
        <div class="image-galery-wrapper">
          <div class="image-galery-item-top-wrapper">
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
            <div class="image-galery-item-top-card"></div>
          </div>
          <div class="image-galery-item-bottom-wrapper">
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
            <div class="image-galery-item-bottom-card"></div>
          </div>
          <img
            class="image-list-wrapper-img"
            src="/img/img-${imageIndex}.jpg"
            alt="image 2"
          />
      </div>
    </li>
  `;
}
