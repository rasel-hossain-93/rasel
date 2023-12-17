// MIXLTUP
var mixer = mixitup('.work-grid');

// MENU
    function openMenu() {
        document.getElementById('menu-container').style.width="100%";

    }

    function closeMenu() {
        document.getElementById('menu-container').style.width="0";

    }
    // ANIMATION
    new WOW().init();

    wow = new WOW(
        {
       

      
        mobile:       true,       // default
      
      }
      )
      wow.init();