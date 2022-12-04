/*Crea un programa que solicite al usuario su año de nacimiento y devuelve la categorı́a a la que pertenece.*/
function calcular3() {

    anio = parseInt(document.getElementById("anio").value);
    categoria = document.getElementById("lectura6");
    categoria.innerHTML=anio;

    if (anio >= 2005) {
        categoria.innerHTML = "Prebenjamin";
    } else if (anio >= 2004 && anio <= 2006) {
        categoria.innerHTML = "Benjamin";
    } else if (anio >= 2003 && anio <= 2007) {
        categoria.innerHTML = "Alevin";
    } else if (anio >= 2002 && anio <= 2008) {
        categoria.innerHTML = "Infantil";
    } else if (anio >= 2001 && anio <= 2009) {
        categoria.innerHTML = "Cadete";
    } else if (anio >= 2000 && anio <= 2010) {
        categoria.innerHTML = "Juvenil";
    } else if (anio >= 1999 && anio <= 2011) {
        categoria.innerHTML = "Senior";
    } else if (anio >= 1998 && anio <= 2012) {
        categoria.innerHTML = "Veterano";
    } else {
        alert("Debes ingresar tu año de nacimiento");
    }
};