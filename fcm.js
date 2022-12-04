function calcular2() {

    edad = parseInt(document.getElementById("edad").value);
    sexo = document.getElementById("sexo").value;
    frecuencia = document.getElementById("frecuencia");
    lectura = document.getElementById("lectura");
    lectura2 = document.getElementById("lectura2");
    lectura3 = document.getElementById("lectura3");
    lectura4 = document.getElementById("lectura4");

    if (sexo == "hombre") {
        var frecuenciaress = 220 - edad;
        frecuencia.innerHTML = frecuenciaress;

        var porcentaje = 0.6 * frecuenciaress;
        var porcentaje2 = 0.7 * frecuenciaress;
        var porcentaje3 = 0.8 * frecuenciaress;
        var porcentaje4 = 0.9 * frecuenciaress;

        lectura.innerHTML = porcentaje + "zona recuperaction";
        lectura2.innerHTML = porcentaje2 + "zona aerobica";
        lectura3.innerHTML = porcentaje3 + "zona anaerobica";
        lectura4.innerHTML = porcentaje4 + "Linea roja";
   
    } else if (sexo == "mujer") {
        var frecuenciares = 226 - edad;
        frecuencia.innerHTML = frecuenciares;

        var porcentaje = 0.6 * frecuenciares;
        var porcentaje2 = 0.7 * frecuenciares;
        var porcentaje3 = 0.8 * frecuenciares;
        var porcentaje4 = 0.9 * frecuenciares;

        lectura.innerHTML = porcentaje + "zona recuperaction";
        lectura2.innerHTML = porcentaje2 + "zona aerobica";
        lectura3.innerHTML = porcentaje3 + "zona anaerobica";
        lectura4.innerHTML = porcentaje4 + "Linea roja";
    } else {
        alert("Debes ingresar edad y sexo");
    }
};









