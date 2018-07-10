'use strict';
// Define values for keycodes
var VK_ENTER = 13;
var VK_SPACE = 32;

const skipMap = document.getElementById('skip-map');
const filterRestaurants = document.getElementById('neighborhoods-select');

/*For testing reasons
skipMap.addEventListener('click', function (event) {
    filterRestaurants.focus();
});
*/
skipMap.addEventListener('keydown', function (event) {
    event.preventDefault(); //Prevent the dropdown menu from opening up.
    if (event.keyCode == VK_SPACE || VK_ENTER) {
        filterRestaurants.focus();
    }
});
