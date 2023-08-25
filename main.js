const imagesUrls = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
];


let currentIndex = 0;

const imageElement = document.querySelector("#image");
imageElement.src = imagesUrls[currentIndex];


const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", function () {

    currentIndex ++;
    if (currentIndex >= imagesUrls.length) {
        currentIndex = imagesUrls.length - 1;
    }
    imageElement.src = imagesUrls[currentIndex]; 
});



const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", function () {
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    imageElement.src = imagesUrls[currentIndex];
});


// nextButton.style.display = "none";
// previousButton.style.display = "none";
