function manana() {
    let tabla = document.getElementById("tabla");
    let valor = "<table border='1'><thead><tr><th>HORARIOS MAÑANAS</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr><tr><th>9:00 - 11:00</th><th></th><td></td><td></td><td></td><td></td><td></td></tr><tr><th>11:00 - 13:00</th><td></td><td></td><td></td><td></td><td></td></tr><tr><th>13:00 - 15:00</th><td></td><td></td><td></td><td></td><td></td></tr></thead><tbody></tbody></table>";
    tabla.innerHTML = valor;
}

function tarde() {
    let tabla = document.getElementById("tabla2");
    let valor ="<table border='1'><thead><tr><th>HORARIOS TARDES</th><th>Lunes</th> <th>Martes</th> <th>Miercoles</th> <th>Jueves</th> <th>Viernes</th>  </tr> <tr>  <th>16:00 - 17:00</th>   <td></td> <td></td><td></td><td></td><td></td></tr><tr><th>17:00 - 18:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>18:00 - 19:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>19:00 - 20:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>20:00 - 21:00</th><td></td> <td></td><td></td><td></td><td></td></tr></thead><tbody></tbody></table>";
    tabla.innerHTML = valor;


}
