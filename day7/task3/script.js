var dark = "images/marble1.jpg";
var light = "images/marble2.jpg";

var images = document.images;

var index = -1;

function moveNext() {
    if (index === -1) {
        index = 0;
        images[index].src = light;
    }
    else if (index < images.length - 1) {
        images[index].src = dark;
        images[++index].src = light;
    }
    else if (index === images.length - 1) {
        images[index].src = dark;
        index = 0;
        images[index].src = light;
    }
}

var movement = setInterval(moveNext, 1000);

var div = document.querySelector("div");
div.addEventListener("mouseenter", () => {
    clearInterval(movement);
    movement = null;
});

div.addEventListener("mouseleave", () => {
    if (!movement) movement = setInterval(moveNext, 1000);
});