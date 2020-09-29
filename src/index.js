'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'dom-node-polyfills';

import showPhone from "./modules/showPhone.js";
import showPopup from "./modules/showPopup.js";
import showAccordion from "./modules/showAccordion.js";
import showSlider from "./modules/showSlider.js";
import schemeSlider from "./modules/schemeSlider.js";
import designSlider from "./modules/designSlider.js";
import dotSlider from "./modules/dotSlider.js";
import toggleMenu from "./modules/toggleMenu.js";
import repairPopup from "./modules/repairPopup.js";
import repairSlider from "./modules/repairSlider.js";
import sendForm from "./modules/sendForm.js";

import portfolioSlider from "./modules/portfolioSlider.js";
import phoneValidator from "./modules/phoneValidator.js";
import showHint from "./modules/showHint.js";
import partnersSlider from "./modules/partnersSlider.js";

showPhone();
showPopup();
showAccordion();
//слайдер отзывы и документы
showSlider();
schemeSlider();
designSlider();
dotSlider();
toggleMenu();
repairPopup();
repairSlider();
sendForm();

portfolioSlider();
phoneValidator();
showHint();
partnersSlider();








