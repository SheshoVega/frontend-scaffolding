/**
 * Importing public sass files
 */
import '../../scss/public/main.scss';
/**
 * Importing jquery as external 
 */
import $ from 'jquery';


let jsMsg = 'from JS';
let jsGreeting = `Hello World ${jsMsg}`;
let htmlMsg = 'fine!'
let htmlGreeting = `Works ${htmlMsg}`;

console.log(jsGreeting);

// document.querySelector('.greeting > p').innerHTML = htmlGreeting;

$('.greeting > p').html(htmlGreeting);

import './utils'
import './toggle';