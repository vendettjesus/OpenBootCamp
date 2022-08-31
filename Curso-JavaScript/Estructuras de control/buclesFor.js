/*
Estructuras de control Bucles for y while



*/

for (let i = 0; i < 10; i++){
    //    Esto es un bucle donde i se sumara hasta se menor a 10
    console.log(i);
}


//for en array 
let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    console.log(lista[i] * 2);
    console.log(lista[i] + " ducks");
}

//Estructura for... of
for( let valor of lista) {
    console.log(valor);
}

//Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})


//Estructura for ... in

let persona = {
    nombre: "José de Jesús",
    apellido: "Alvarado",
    edad: 34,
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}