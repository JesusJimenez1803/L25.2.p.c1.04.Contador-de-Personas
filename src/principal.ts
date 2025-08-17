/*CONTADOR DE PERSONAS
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
*datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
*/
import Cl_Persona from "./Cl_Persona.js";
import Cl_Sexo from "./Cl_Sexo.js";

let pers1: Cl_Persona = new Cl_Persona('Luisa', 'f'),
    pers2: Cl_Persona = new Cl_Persona('Ana', 'F'),
    pers3: Cl_Persona = new Cl_Persona('José', 'M'),
    pers4: Cl_Persona = new Cl_Persona('Carmen', 'F'),
    pers5: Cl_Persona = new Cl_Persona('Rosa', 'F'),
    pers6: Cl_Persona = new Cl_Persona('Juan', 'M'),
    pers7: Cl_Persona = new Cl_Persona('María', 'F'),
    pers8: Cl_Persona = new Cl_Persona('Luz', 'F'),
    pers9: Cl_Persona = new Cl_Persona('Rafael', 'M'),
    pers10: Cl_Persona = new Cl_Persona('Liz', 'F'),
    pers11: Cl_Persona = new Cl_Persona('Marcos', 'M'),
    pers12: Cl_Persona = new Cl_Persona('Leo', 'M');
let sexo: Cl_Sexo = new Cl_Sexo();
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

let salida: HTMLElement | null = document.getElementById("salida");
    if(salida !== null){
        salida.innerHTML = `<h2>Cantidad de personas: ${sexo.cantPersonas()}</h2><br>Cantidad de hombres: ${sexo.cantHombres()}<br>Cantidad de mujeres: ${sexo.cantMujeres()}`;
    }
    else console.log("No se ha encontrado el elemento 'salida'");