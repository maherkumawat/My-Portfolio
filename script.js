var certificateBox = document.getElementById("certificateBox");
          certificateBox.addEventListener("click", function() {
           window.location.href = "Certificate.html";
});

var contact = document.getElementById("btn-contact");
contact.addEventListener("click",function(){
window.location.href = "contact.html"
});


const texts = ["Web Developer", "UI/UX Designer"];
let index = 0;

function changeText() {
    const textElement = document.getElementById("text");
    textElement.style.opacity = 0; 


    setTimeout(() => {
        index = (index + 1) % texts.length; 
        textElement.textContent = texts[index]; 
        textElement.style.opacity = 1; 
    }, 500); 

}

setInterval(changeText, 2500);




const ecos = document.querySelectorAll('.eco'); 

ecos.forEach(eco => {
    const ecoicon = eco.querySelector('.eco-icon'); 
    const edoi = eco.querySelector('.eco-icon i');  

    eco.addEventListener('mouseover', function() {
        ecoicon.style.background = '#1386eb'; 
        edoi.style.color = 'white'; 
        ecoicon.style.transition = 'all ease 1s'; 
        edoi.style.transition = 'all ease 1s'; 
    });

    eco.addEventListener('mouseout', function() {
        ecoicon.style.background = '#31353e'; 
        edoi.style.color = '#1386eb'; 
    });
});



var educationContents = document.querySelectorAll(".education-content");

educationContents.forEach(function(educationContent) {
    var present = educationContent.querySelector(".present-2024"); 

    educationContent.addEventListener("mouseover", function() {
        present.style.background = "#1386eb";
        present.style.transition = "all ease 1s";
    });

    educationContent.addEventListener("mouseout", function() {
        present.style.background = "transparent";
    });
});



const btnCV = document.getElementById("btn-cv");


btnCV.addEventListener("click", function() {
    btnCV.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!btnCV.contains(event.target)) {
        btnCV.classList.remove("active");
    }
});







//   function checkOrientation() {
//     if (window.innerHeight > window.innerWidth) {
//       alert(' Please rotate your device.');
//     }
//   }

//   // Run the checkOrientation function on page load and when orientation changes
//   window.addEventListener('load', checkOrientation);
//   window.addEventListener('resize', checkOrientation);


function checkOrientation() {
    const blackScreen = document.getElementById('black-screen');

    // Check if the device is in portrait mode (height > width)
    if (window.innerHeight > window.innerWidth) {
      blackScreen.style.display = 'flex'; // Show black screen
    } else {
      blackScreen.style.display = 'none'; // Hide black screen when in landscape mode
    }
  }

  // Run the checkOrientation function on page load and when orientation changes
  window.addEventListener('load', checkOrientation);
  window.addEventListener('resize', checkOrientation);
