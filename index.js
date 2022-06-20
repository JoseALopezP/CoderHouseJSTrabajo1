let value;
let pValue
let total;
console.log("Voy a ayudarte a sumar el total de hoy");
value=pValue=total=prompt("Ingresa el primer numero (ESC para salir)");
while(value != "ESC"){
    value=prompt("Ingrese otro numero (ESC para salir, ANT para eliminar la ultima suma)");
    if(value == "ANT"){
        total=total-pValue;
    } else if(value == "ESC"){
        console.log("Su Total final es: ", total);
        let check = prompt("Desea realizar otra operacion de cero?(si/no)");
        while(check!="si" || check != "no"){
            alert("Disculpa, no entendi, repite");
            check = prompt("Desea realizar otra operacion de cero?(si/no)");
        }
        if(check == "si"){
            console.log("Comencemos de nuevo");
            value=pValue=total=prompt("Ingresa el primer numero (ESC para salir)");
        } else if(check)
    }
}