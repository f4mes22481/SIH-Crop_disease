document.getElementById('prediction-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const resultText = document.getElementById('result-text');
  const cropImage = document.getElementById('crop-image').files[0];
  
  if (cropImage) {
      // Simulate prediction result
      const fakeResult = {
          disease: 'Leaf Blight',
          confidence: 92
      };

      resultText.textContent = `Disease: ${fakeResult.disease}, Confidence: ${fakeResult.confidence}%`;
  } else {
      resultText.textContent = 'No image uploaded.';
  }
});
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
  }
  
  function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
  }

  document.getElementById('prediction-form').addEventListener('submit', function(event) {
    let errorMessages = '';

    // Access the input fields
    const avgTemp = document.getElementById('avgTemp');
    const cropSelect = document.getElementById('cropSelect');
    const pesticides = document.getElementById('pesticides');

    // Validate avgTemp field
    if (!avgTemp.checkValidity()) {
        errorMessages += 'Average temperature must be a valid number.<br>';
    }

    // Validate cropSelect field
    if (!cropSelect.checkValidity()) {
        errorMessages += 'Please select a crop.<br>';
    }

    // Validate pesticides field
    if (!pesticides.checkValidity()) {
        errorMessages += 'Pesticides value must be a valid number.<br>';
    }

    if (errorMessages) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('errorMessages').innerHTML = errorMessages;
    }
});
let currentIndex = 0;
const intervalTime = 10000; // Set the interval time in milliseconds (3000ms = 3 seconds)

// Function to show the slide based on the index
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Handle wrap-around
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move the carousel inner container to show the active slide
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Set the interval to automatically change slides
const autoSlide = setInterval(nextSlide, intervalTime);

// Initial display of the first slide
showSlide(currentIndex);
const carousel = document.querySelector('.carousel');

// Pause auto-slide on hover
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));

// Resume auto-slide when hover ends
carousel.addEventListener('mouseleave', () => setInterval(nextSlide, intervalTime));


document.getElementById('prediction-form1').addEventListener('submit', function(event) {
    event.preventDefault();

    const avgtemp = document.getElementById('avg temp');
  const item = document.getElementById('item');
  const pesticides = document.getElementById('pesticides');

  if (avgtemp,item,pesticides) {
    // Simulate prediction result
    const fakeResult = {
        disease: 'Leaf Blight',
        confidence: 92
    };

    resultText.textContent = `Disease: ${fakeResult.disease}, Confidence: ${fakeResult.confidence}%`;
} else {
    resultText.textContent = 'No image uploaded.';
}
});

