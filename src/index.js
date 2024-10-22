// entry point module.

import "./style.css";
import home_page from "./home-page.js";
import about_page from "./about-page.js";
import menu_page from "./menu-page.js";
import contact_page from "./contact-page.js";

const about_link = document.querySelector('#about-link');
const home_link = document.querySelector('#home-link');
const menu_link = document.querySelector('#menu-link');
const contact_link = document.querySelector('#contact-link');

home_page();

about_link.addEventListener('click', about_page);
menu_link.addEventListener('click', menu_page);
contact_link.addEventListener('click', contact_page);
home_link.addEventListener('click', home_page);
