const allItems = gsap.utils.toArray('.container-item')
const containerWrapperImg = document.getElementById('container-img-wrapper')
const containerImg = document.getElementById('container-img')
//placer à chaque lien (soit date en bas de le page Index.html)
//un événement mouseenter, mouseleave et mousemove afin
//d'aficher leur image selon la position de la souris
allItems.forEach((item) => {
  item.addEventListener('mouseenter', onMouseEnterTheItem)
  item.addEventListener('mouseleave', onMouseLeaveTheItem)
  item.addEventListener('mousemove', moveDisplayImg)
})

//deplacer le container d'image selon la position de
//la souris lorsque la souris est sur une date (en bas de la page Index.html)
function moveDisplayImg(e) {
  let mouseXposition = e.clientX - 100
  let mouseYposition = e.clientY
  gsap.to(containerWrapperImg, { x: mouseXposition, y: mouseYposition })
}

//afficher l'image qui se trouve dans
//l'attribut [data-img]
function onMouseEnterTheItem(e) {
  const img = e.target.dataset.img
  gsap.set(containerImg, { backgroundImage: `url('./img/${img}')` })
  gsap.to(containerWrapperImg, { autoAlpha: 1, duration: 0.5 })
}

//enlever l'opactié du container d'image
function onMouseLeaveTheItem() {
  gsap.to(containerWrapperImg, { autoAlpha: 0, duration: 0.5 })
}

//===============animation d'entré=====================
const timeLine = gsap.timeline()
timeLine
  .from(['.site-logo', '.site-menu'], { y: 100, autoAlpha: 0, duration: 0.5 })
  .from('.middle-section', { y: 100, autoAlpha: 0, duration: 0.5 })
  .from('.item', { y: 100, autoAlpha: 0, stagger: 0.1 })
