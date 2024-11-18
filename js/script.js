// Toggle the visibility of dropdowns when clicked on mobile
document.addEventListener("DOMContentLoaded", function () {
    // Target all dropdown menus and add event listeners for mobile toggles
    const dropdownItems = document.querySelectorAll('.nav-item .nav-link');
  
    dropdownItems.forEach(item => {
      item.addEventListener('click', function (e) {
        // Prevent dropdown from closing immediately
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
          e.preventDefault();
          // Toggle dropdown visibility on mobile
          dropdownMenu.classList.toggle('show');
          
          // Close other dropdowns
          dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
              const otherDropdown = otherItem.nextElementSibling;
              if (otherDropdown && otherDropdown.classList.contains('dropdown-menu')) {
                otherDropdown.classList.remove('show');
              }
            }
          });
        }
      });
    });
  });
  