let value;
let pValue
let total;
console.log("Voy a ayudarte a sumar el total de hoy");
value=pValue=total=prompt("Ingresa el primer numero (ESC para salir)");
while(value != "ESC" && isNaN(value)){
    alert("Disculpa, no entendi, repite");
    console.log(value);
    value=pValue=total=prompt("Ingresa el primer numero (ESC para salir)");
}
while(value != "ESC"){
    console.log("Su total actual es: ", total);
    value=prompt("Ingrese otro numero (ESC para salir, ANT para eliminar la ultima suma)");
    while(value != "ESC" && value != "ANT" && isNaN(value)){
        alert("Disculpa, no entendi, repite");
        value=prompt("Ingrese otro numero (ESC para salir, ANT para eliminar la ultima suma)");
    }
    if(value == "ANT"){
        if(pValue == "ANT"){
            alert("Error, solo se puede retroceder 1 vez");
        } else{
            total=parseFloat(total)-parseFloat(pValue);
            pValue="ANT";
        }
    } else if(value == "ESC"){
        console.log("Su Total final es: ", total);
        let check = prompt("Desea realizar otra operacion de cero?(si/no)");
        while(check != "si" && check != "no"){
            alert("Disculpa, no entendi, repite");
            check = prompt("Desea realizar otra operacion de cero?(si/no)");
        }
        if(check == "si"){
            console.log("Comencemos de nuevo");
            value=pValue=total=prompt("Ingresa el primer numero (ESC para salir)");
        }
    } else{
        total=parseFloat(total)+parseFloat(value);
        pValue=value;
    }
}