var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

var slidesLength = sliderImages.length;

var slideNumberElement = document.getElementById("slide-number");

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

var currentSlide = 1;

//On Click On Next Button

nextButton.addEventListener('click',()=>{nextSlide();});

//On Click On Prev Button

prevButton.addEventListener('click',()=>{prevSlide();});



//Create Ul Element

var paginationElement = document.createElement('ul');


//Set Id To Created Ul Element

paginationElement.setAttribute('id', 'pagination-ul');

//Create List Items Based On Slides Length
for(var i = 1; i <= slidesLength; i++){
    
    //Create Li
    var paginationItem = document.createElement('li');
    
    //Set Custom Attrebute
    paginationItem.setAttribute('data-index', i);
    
    //Set Item Content
    
    paginationItem.appendChild(document.createTextNode(i));
    
    //Append Items To Main Ul List
    
    paginationElement.appendChild(paginationItem);
}

//Add The Created Ul Element To The Page

document.getElementById('indicators').appendChild(paginationElement);

//Get The Created Ul

var paginationCreatedUl = document.getElementById("pagination-ul");

//Get The Bullets

var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

//Loop On All Bullets

for(var i = 0; i < paginationsBullets.length; i++){
    
    paginationsBullets[i].addEventListener('click',function(){
        
        currentSlide = parseInt(this.getAttribute('data-index'));
        
        checker();
        
    })
}

//Trigger The Checker 

checker();



//Next Slide Function

function nextSlide(){

    if(nextButton.classList.contains('disabled')){
        return false;
    }
    
    else{
        currentSlide++;
        
        checker();
    }

}

//Previous Slide Function

function prevSlide(){

    if(prevButton.classList.contains('disabled')){
        return false;
    }
    
    else{
        currentSlide--;
        
        checker();
    }
}


function checker(){
    
    //Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesLength);
    
    //Remove All Active Classes
    removeAllActive()
    
    
    //Set Active Class On Current Slide
    
    sliderImages[currentSlide - 1].classList.add("active")
    
    //Set Active Class On Current Pagination Item
    
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    
    
    //Check If The Image Is The First
    
    if(currentSlide == 1){
        // Add Disabled Class On Previous Button
        prevButton.classList.add("disabled");
        
    }
    else{
        // Remove Disabled Class On Previous Button
        prevButton.classList.remove("disabled");
    }
    
    if(currentSlide == slidesLength){
        // Add Disabled Class On Next Button
        nextButton.classList.add("disabled");
        
    }
    else{
        // Remove Disabled Class On Next Button
        nextButton.classList.remove("disabled");
    }
}


//Remove All Active Classes From Images And Paginations

function removeAllActive(){
    
    //Loop Through Images
    sliderImages.forEach((img)=>{
        
        img.classList.remove("active");
    })
    
    //Loop Through Pagination Images
    paginationsBullets.forEach((bullet)=>{
        
        bullet.classList.remove("active");
    })
}



