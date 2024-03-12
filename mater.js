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


window.addEventListener('scroll', function () {
    var images = document.querySelectorAll('.image');

    images.forEach(function (image) {
        var position = image.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            image.classList.add('show-animation');
        }
    });
});


window.addEventListener('scroll', function () {
    var images = document.querySelectorAll('h4');

    images.forEach(function (image) {
        var position = image.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            image.classList.add('show-h4');
        }
    });
});


window.addEventListener('scroll', function () {
    var images = document.querySelectorAll('.last');

    images.forEach(function (image) {
        var position = image.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            image.classList.add('show-last');
        }

    });


});


window.addEventListener('scroll', function () {
    var mainelements = document.querySelectorAll('a');

    mainelements.forEach(function (element, Index) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add('show-a');
        }
    });
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
   function handleIntersection(entries, observer) {
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
const option = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the element is in view
};

// Create a new IntersectionObserver
const observers = new IntersectionObserver(handleIntersection, option);

// Select the target element
const names = document.querySelectorAll('.names');

// Observe the target element
names.forEach(name => {
    observers.observe(name);
}); 