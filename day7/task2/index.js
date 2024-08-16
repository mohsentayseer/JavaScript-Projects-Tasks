var img = document.querySelector('img');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var stop = document.querySelector('.stop');
var slideshow = document.querySelector('.slideshow');

var imageArr = ['./images/1.jpeg', './images/2.jpeg', './images/3.jpeg', './images/4.jpeg', './images/5.jpeg']
var imgIndex = 0

next.addEventListener("click", function () {
    if (imgIndex < imageArr.length - 1) {
        imgIndex++
        img.src = imageArr[imgIndex]
    }
})
previous.addEventListener("click", function () {
    if (imgIndex > 0) {
        imgIndex--
        img.src = imageArr[imgIndex]
    }
})
var x;
slideshow.addEventListener("click", function () {

    x = setInterval(function () {
        imgIndex++
        if (imgIndex < imageArr.length - 1) {
            img.src = imageArr[imgIndex]
        } else if (imgIndex === imageArr.length - 1) {
            imgIndex = 0
        }
    }, 1000)
})

stop.addEventListener("click", function () {
    clearInterval(x)
})