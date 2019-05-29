
import "./components/main_ui/main_ui.scss";
import "./components/header/header.scss";
import "./components/landing_page/landing_page.scss";
import "./index.pug";
require('./fonts.scss');


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
