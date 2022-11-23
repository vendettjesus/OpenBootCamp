//Métodos más utilizados con cadenas de caracteres


//Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length); 

//Cómo obtener partes de cadenas de caracteres
//slice() substring() substr()

let slice_str = str.slice(0, 14);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10)
console.log(substr_str);

//Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Pepe";
console.log(cadena);

//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('Pepe', 'Jesús'));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_largo.length);
console.log(texto_largo.replace('Tito', 'Pepe'));

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/Tito/g, 'Pepe'));

//METODOS DE CADENAS DE TEXTO PT 2
//Convertir la cadena a minusculas o mayúsculas
let input = "Tauro";
let db = "tauro";

//toLowerCase() - toUpperCase()


console.log(input.toLocaleLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase === db.toLowerCase);

//Formas de Concatenar 2 cadenas de caracteres
let str_1 = "Hola soy la primer cadena.";
let str_2 = "Y yo soy la segunda cadena.";

//Mejor metodo para concatenar strings
console.log(str_1.concat(" ", str_2));

console.log(str_1 + " " + str_2);

console.log(`${str_1} ${str_2}` );
//alt+96 comillas invertidas

//Eliminar espacios al inicio y al final

let str_3 = "     Hola soy un string con espacios al final.     "
console.log(str_3.length)

//trim()   Eliminar espacios en blanco
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Obtener el caracter que se encuentra en cierta posición
let str_4 = "Hola soy el string number 4";

console.log(str_4.charAt(5));
console.log(str_4[5]);


//Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Pepe y me gustan los videojuegos. Pepe soy yo";
console.log(str_5.indexOf("Pepe"));
console.log(str_5.lastIndexOf("Pepe"));