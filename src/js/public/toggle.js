import $ from "jquery";

/**
 * Toggle button
 */

let toggleBtn = document.querySelector('.nav-toggle');
let navItems = document.querySelector('.nav-items');
let toggle = false;

toggleBtn.addEventListener('click', (eve) => {

    $('.nav-toggle').animateCss('pulse');
    
    if(toggle) {

        $('.nav-items').animateCss("fadeOut", () => {

            navItems.classList.remove('display');        
            navItems.classList.add('hide');
            toggle = false;
            
        });

    } else {

        $('.nav-items').animateCss('fadeIn');
        navItems.classList.remove('hide');
        navItems.classList.add('display');
        toggle = true;

    }

});