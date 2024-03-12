function delaySecondLiAnimation() {
    setTimeout(function () {
        document.querySelector('.time ul li:nth-child(2)').style.opacity = '1';
    }, 1000); // Adjust the delay time (1s in this case) as needed
    setTimeout(function () {
        document.querySelector('.time ul li:nth-child(3)').style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        document.querySelector('.time ul li:nth-child(4)').style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        document.querySelector('.time ul li:nth-child(5)').style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        document.querySelector('p').style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        document.querySelector('.paragraph').style.opacity = '1';
    }, 3000);
}

// Trigger the delay function when the page is fully loaded
window.onload = delaySecondLiAnimation;



function handleIntersectionimage(entries, observer) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add the class to show the button
            entry.target.classList.add('show-animation');
        }
    });
}

// Options for the IntersectionObserver
const optionimage = {
    root: null, // Use the viewport as the root
    threshold: 1, // Trigger when any part of the element is in view
};

// Create a new IntersectionObserver
const observerimage = new IntersectionObserver(handleIntersectionimage, optionimage);

// Select the Next and Back buttons
const buttonimage = document.querySelectorAll('.image');

// Observe each button
buttonimage.forEach(button => {
    observerimage.observe(button);
});



function handleIntersectionh4(entries, observer) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add the class to show the button
            entry.target.classList.add('show-h4');
        }
    });
}

// Options for the IntersectionObserver
const optionh4 = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when any part of the element is in view
};

// Create a new IntersectionObserver
const observerh4 = new IntersectionObserver(handleIntersectionh4, optionh4);

// Select the Next and Back buttons
const buttonh4 = document.querySelectorAll('h4');

// Observe each button
buttonh4.forEach(button => {
    observerh4.observe(button);
});



function handleIntersectionlast(entries, observer) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add the class to show the button
            entry.target.classList.add('show-last');
        }
    });
}

// Options for the IntersectionObserver
const optionlast = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when any part of the element is in view
};

// Create a new IntersectionObserver
const observerlast = new IntersectionObserver(handleIntersectionlast, optionlast);

// Select the Next and Back buttons
const buttonlast = document.querySelectorAll('.last');

// Observe each button
buttonlast.forEach(button => {
    observerlast.observe(button);
});


function handleIntersections(entries, observer) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add the class to show the button
            entry.target.classList.add('show-a');
        }
    });
}

// Options for the IntersectionObserver
const optiona = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when any part of the element is in view
};

// Create a new IntersectionObserver
const observera = new IntersectionObserver(handleIntersections, optiona);

// Select the Next and Back buttons
const buttona = document.querySelectorAll('a');

// Observe each button
buttona.forEach(button => {
    observera.observe(button);
});


// window.addEventListener('scroll', function () {
//     var mainelements = document.querySelectorAll('.mainclass');

//     mainelements.forEach(function (element, Index) {
//         var position = element.getBoundingClientRect().top;
//         var windowHeight = window.innerHeight;

//         if (position < windowHeight) {
//             if (Index % 2 === 0) {
//                 element.classList.add('show-mainclass-even');
//             } else if (Index % 2 === 1) {

//                 element.classList.add('show-mainclass-odd');
//             }
//         }
//     });
// });


// Function to be called when an observed element enters the viewport
function handleIntersectionn(entries, observer) {
    entries.forEach(entry => {
        // If the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Apply the opening animation
            entry.target.style.animation = 'openAnimation 2s ease forwards';
            // Unobserve the target element to improve performance
            observer.unobserve(entry.target);
        }
    });
}

// Options for the IntersectionObserver
const optionn = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the element is in view
};

// Create a new IntersectionObserver
const observern = new IntersectionObserver(handleIntersectionn, optionn);

// Select the target element
const names = document.querySelectorAll('.names');

// Observe the target element
names.forEach(name => {
    observern.observe(name);
}); 