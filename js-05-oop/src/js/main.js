
document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";


/* Para importar la funcion desde otro modulo, se debe de llamar la funcion con 

import { nombre del modulo (sirve mucho dejarlo abierto) } from "./ruta del modulo.js"



*/

import { changePrincipalTitle } from "./modules/ChangePrincipalTittles";

// crear una funcion que se le pasen el nombre de la imagen a mostrar (cat o dino)
// Esta imagen es la que se debe de mostrar en el elemento con id "logo"

// importanción nombrada
import { changeLogo } from "./modules/changeLogo.js";
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { aliceUser } from "./modules/literalObject.js";


changePrincipalTitle("title");

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");

console.log( aliceUser.getFullName() );
console.log( aliceUser );
console.log( aliceUser.stringify() );