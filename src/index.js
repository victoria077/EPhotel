
import "./scss/main.scss";
import "./index.pug";
import "../src/components/signin-form/signin-form.pug"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "../src/components/form-search/form-search.js";
import "../src/components/card-room/card-room.js";
import "../src/components/room-page/room-page.js";
import "../src/components/components-page/components-page.js";
import "../src/components/datepicker/datepicker.js";
import "../src/components/slider/slider.js";
require('./fonts.scss');
require('jquery');
require('jquery-ui-bundle');
require("../node_modules/jquery-ui-themes/themes/ui-lightness/jquery-ui.css");
require("../node_modules/jquery-ui-themes/themes/ui-lightness/theme.css");
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

window.onload = function(){
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });
  };
