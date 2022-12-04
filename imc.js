function calcular(){
    kg=parseInt(document.getElementById("kg").value);
    cm=parseInt(document.getElementById("cm").value);
    imc=document.getElementById("imc");
    lectura=document.getElementById("lectura");

    var imcres=kg/(cm*cm);
    imc.innerHTML=imcres;

    if(imcres<18.5){
        lectura.innerHTML="Peso insuficiente";
    }else if(imcres>=18.5 && imcres<=24.9){
        lectura.innerHTML="Peso normal";
    }else if(imcres>=25 && imcres<=26.9){
        lectura.innerHTML="Sobrepeso grado I";
    }else if(imcres>=27 && imcres<=29.9){
        lectura.innerHTML="Sobrepeso grado II (preobesidad)";
    }else if(imcres>=30 && imcres<=34.9){
        lectura.innerHTML="Obesidad tipo I";
    }else if(imcres>=35 && imcres<=39.9){
        lectura.innerHTML="Obesidad tipo II";
    }else if(imcres>=40){
        lectura.innerHTML="Obesidad tipo III (morbida)";
    }else{
        alert("Debes ingresar peso y altura");
    }

}