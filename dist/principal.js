import Cl_Persona from "./Cl_Persona.js";
import Cl_Sexo from "./Cl_Sexo.js";
let pers1 = new Cl_Persona('Luisa', 'f'), pers2 = new Cl_Persona('Ana', 'F'), pers3 = new Cl_Persona('José', 'M'), pers4 = new Cl_Persona('Carmen', 'F'), pers5 = new Cl_Persona('Rosa', 'F'), pers6 = new Cl_Persona('Juan', 'M'), pers7 = new Cl_Persona('María', 'F'), pers8 = new Cl_Persona('Luz', 'F'), pers9 = new Cl_Persona('Rafael', 'M'), pers10 = new Cl_Persona('Liz', 'F'), pers11 = new Cl_Persona('Marcos', 'M'), pers12 = new Cl_Persona('Leo', 'M');
let sexo = new Cl_Sexo();
sexo.procesarPersonas(pers1);
sexo.procesarPersonas(pers2);
sexo.procesarPersonas(pers3);
sexo.procesarPersonas(pers4);
sexo.procesarPersonas(pers5);
sexo.procesarPersonas(pers6);
sexo.procesarPersonas(pers7);
sexo.procesarPersonas(pers8);
sexo.procesarPersonas(pers9);
sexo.procesarPersonas(pers10);
sexo.procesarPersonas(pers11);
sexo.procesarPersonas(pers12);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `<h2>Cantidad de personas: ${sexo.cantPersonas()}</h2><br>Cantidad de hombres: ${sexo.cantHombres()}<br>Cantidad de mujeres: ${sexo.cantMujeres()}`;
}
else
    console.log("No se ha encontrado el elemento 'salida'");
