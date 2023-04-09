let imageNo = 1
displayimg(imageNo);


function nextimg(n) {
    displayimg(imageNo += n)
}

function currentSlide(n) {
    displayimg(imageNo = n)
}
function displayimg(n) {
    let image = document.querySelectorAll(".image");
    let dots = document.querySelector(".dot");

    if (n > image.length) {
        imageNo = 1;
    }
    if (n < 1) {
        imageNo = image.length;
    }

    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";

    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }

    image[imageNo - 1].style.display = "block";
    dots[imageNo - 1].className += "active";

}




