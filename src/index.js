
import "./scss/main.scss";
import "./index.pug";
import "../src/components/signin-form/signin-form.pug"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "../src/components/form-search/form-search.js";
import "../src/components/components-page/components-page.js";
// import "../src/components/datepicker/datepicker.js";
import "../src/components/slider/slider.js";
import "../src/blocks/chart/chart.js";
require('./fonts.scss');
require('jquery');
require('jquery-ui-bundle');
require("../node_modules/jquery-ui-themes/themes/ui-lightness/jquery-ui.css");
require("../node_modules/jquery-ui-themes/themes/ui-lightness/theme.css");
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import "../src/components/card-room/card-room.js";
import "../src/components/room-page/room-page.js";
import "../node_modules/material-icons/css/material-icons.min.css"
import "../src/blocks/airdatepicker/airdatepicker.js";
import "../src/blocks/dropdown/dropdown.js";
import "../src/blocks/panagination/panagination.js";




    function closeSideBar(){
      $("sidebar").on("click", function() {
        $("sidebar").css("width", "250")
      })
      document.getElementById("left-side").style.marginLeft = "0";
      console.log("fgfhg");
    }
  
  
    function openSideBar(){
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("left-side").style.marginLeft = "250px";
    }
  
