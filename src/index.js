import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
require('./fonts.scss');
require('jquery');
require('jquery-ui-bundle');
require('../node_modules/jquery-ui-themes/themes/ui-lightness/jquery-ui.css');
require('../node_modules/jquery-ui-themes/themes/ui-lightness/theme.css');
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../node_modules/material-icons/css/material-icons.min.css';


function importAll(req) {
   req.keys().forEach(req);
 }

 
 importAll(require.context('../src', true, /\.js$/))
 importAll(require.context('./', true, /\.scss$/))