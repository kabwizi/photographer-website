let listOfImg = $('.project-wrapper')
//animer le text d'entré (page Projects)
var textWrapper = document.querySelector('.into-title .letters')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)
anime({
  targets: '.into-title .letter',
  translateY: ['1.1em', 0],
  translateX: ['0.55em', 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 1000,
  easing: 'easeOutExpo',
  delay: (el, i) => 50 * i
})
anime({
  targets: '#intro-little-description',
  translateY: [50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 500,
  delay: 500
})

//À toute les image, afficher leur description
// respectivent lorsque la souris se trouve sur l'image
let allImageGallery = gsap.utils.toArray('.project-wrapper img')
allImageGallery.forEach((elem) => {
  elem.addEventListener('mouseenter', setPictureDescription)
  elem.addEventListener('mouseleave', removePictureDescription)
})

function setPictureDescription(e) {
  $('#mouse-follower-description').html(e.target.dataset.imgDescription)
  anime({
    targets: '#mouse-follower-description',
    scale: 8.5,
    background: '#fff',
    duration: 2,
    easing: 'spring(1, 500, 10, 0)'
  })
  anime({
    targets: '#mouse-follower',
    opacity: 0,
    duration: 0.5,
    easing: 'spring(1, 80, 10, 0)'
  })
}
function removePictureDescription(e) {
  $('#mouse-follower-description').html('')
  anime({
    targets: '#mouse-follower-description',
    scale: 1,
    background: '#424242',
    duration: 0.8,
    easing: 'spring(1, 80, 10, 0)'
  })
  anime({
    targets: '#mouse-follower',
    opacity: 0.5,
    background: '#424242',
    duration: 0.5,
    easing: 'spring(1, 80, 10, 0)'
  })
}

//pourcentage de l'element visible dans l'écrant avant animation
let options = {
  threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
}

let callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    $(entries[0].target).addClass('enter-screen')
  }
}

let observer = new IntersectionObserver(callback, options)

listOfImg.toArray().forEach((elem) => {
  observer.observe(elem)
})
