//Afficher les contenu des page que lorsque
// on est prèsà les animer
gsap.set(".wrapper", { visibility: "visible" });

//Customisé la souris
let mouseFollowers = $("#mouse-follower")[0];
let mouseFollowersDescription = $("#mouse-follower-description")[0];

$(document).on("mousemove", getMousePosition);
function getMousePosition(e) {
  anime({
    targets: mouseFollowers,
    left: e.clientX - 25,
    top: e.clientY - 25,
    duration: 400,
  });
  anime({
    targets: mouseFollowersDescription,
    left: e.clientX - 3,
    top: e.clientY - 3,
    easing: "linear",
    duration: 0,
  });
}

//Couler de la souris customisé selon les actions
$("a, .active-mouse").mouseenter(function () {
  anime({
    targets: "#mouse-follower",
    background: "#f5deb3",
    opacity: 0.7,
    scale: 1.5,
  });
});
$("a, .active-mouse").mouseleave(function () {
  anime({
    targets: "#mouse-follower",
    background: "#424242",
    scale: 1,
  });
});
