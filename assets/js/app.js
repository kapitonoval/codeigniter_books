
// import 'expose-loader?$!expose-loader?window.jQuery!expose-loader?jQuery!jquery'
import jquery from 'jquery'
window.jQuery = jquery;
window.$ = jquery;
import Popper from "popper.js";
window.Popper = Popper;
require('bootstrap');
require( "../scss/main.scss" );

require('components/feed');
