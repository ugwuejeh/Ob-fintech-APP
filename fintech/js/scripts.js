/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

/// Replace this value with your desired progress (0 to 100)
const progress = 65;

const ring = document.querySelector('.ring');
const text = document.querySelector('.percentage');
const circumference = parseInt(getComputedStyle(ring).getPropertyValue('stroke-dasharray'));

// Calculate the dash offset based on the progress
const offset = circumference - (progress / 100) * circumference;
ring.style.strokeDashoffset = offset;

// Update the text to display the percentage
text.textContent = `${progress}%`;

// /// Replace this value with your desired progress (0 to 100)
// const progress1 = 70;

// const ring1 = document.querySelector('.ring');
// const text1 = document.querySelector('.percentage');
// const circumferencee = parseInt(getComputedStyle(ring1).getPropertyValue('stroke-dasharray'));

// // Calculate the dash offset based on the progress
// const offset1 = circumferencee - (progress1 / 100) * circumferencee;
// ring.style.strokeDashoffset = offset;

// // Update the text to display the percentage
// text.textContent = `${progress1}%`;

