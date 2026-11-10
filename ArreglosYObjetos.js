const numeros = [1,2,3,4,5];

const dobles = numeros.map(n=>n*2);

console.log("arreglo original:", numeros);
console.log("dobles:", dobles);

const elementosLista = numeros.map(n=> `<li>Numero: ${n}</li>`);

console.log("elementos de lista:", elementosLista.join(" "));

const usuario = {
    nombre: "Juan",
    edad: 30,
    hobby: ["futbol", "lectura", "viajar"],
    direccion: {
        calle: "Calle Falsa 123",
        numero: 1234,
        latitud: 40.7128,
        longitud: -74.0060
    },
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años y vivo por ${this.direccion.calle} ${this.direccion.numero}. Mis hobbies son: ${this.hobby.join(", ")}.`;
    }
};
console.log(usuario.saludar());

usuario.edad = 31;

let x = 18;
function puerta(x){
    if(x >= 18 && x < 40){
        console.log("Puedes pasar");
        return;
    }
    if(x >= 40){
        console.log("vayase a dormir")
        return;
    }
    
    console.log("No puedes pasar");
    
}
let dia = 1

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("No es ni lunes ni martes ni miércoles");
}

//for in -- recorre las llaves de un objeto
for(const llave in usuario){
    console.log(`${llave} = ${usuario[llave]}`);
}

//for of -- recorre los elementos de un arreglo
for(const hobby of usuario.hobby){
    console.log(hobby);
}

for(let i = 0; i < usuario.hobby.length; i++){
    console.log(usuario.hobby[i]);
}
