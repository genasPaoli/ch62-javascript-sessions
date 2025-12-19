
import navbarContent from "./navbar"; // importanción por default

// import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada


const initApp = () => {

console.log("App initialized");
const navbarContainer = document.getElementById( "main-header");
navbarContainer.innerHTML = navbar()

};

export { initApp }; // exportación nombrada