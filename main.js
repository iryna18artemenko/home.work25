const imagesUrls = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
];


let currentIndex = 0;

const imageElement = document.querySelector("#image");
imageElement.src = imagesUrls[currentIndex];


function nextBtn () {
        if (currentIndex >= imagesUrls.length -1) {
    
        nextButton.style.display = "none";
        previousButton.style.display = "block";  

    } else {
        currentIndex ++;
        nextButton.style.display = "block"; 
        previousButton.style.display = "block"; 
    }

   
    imageElement.src = imagesUrls[currentIndex];
}


function previousBtn () {

       currentIndex--;

    if (currentIndex < 1) {
        
        previousButton.style.display = "none"; 
        nextButton.style.display = "block";

    } else {

            previousButton.style.display = "block"; 
            nextButton.style.display = "block"; 
        
    }

    imageElement.src = imagesUrls[currentIndex];
}


const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextBtn);


const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", previousBtn);

