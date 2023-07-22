var colors = require('colors');


function sumar(n1, n2, color) {
    var resultado = n1 + n2;
    console.log(resultado.toString()[color]);
}

sumar(1, 2, "blue");

function notaAlumnos(nota) {
   let color = "";
    if (nota < 65) {
        color = "red";
    } else if (nota < 81) {
        color = "yellow";
    } else {
        color= "green"
    }
    console.log(nota.toString()[color]);
}

notaAlumnos(64);
notaAlumnos(65);
notaAlumnos(80);
notaAlumnos(81);

//crear una aplicacion que permita crear colores dependiendo la nota
//-65 rojo, 66-80 amarillo, 81-100 verde

/* console.log("inicio");
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass */
