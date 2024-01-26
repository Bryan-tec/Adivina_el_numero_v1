

//Variables
min = 1
max = 100 
let numeroSecreto = Math.floor(Math.random() * (max - min + 1 ) + min) //numero random 1 - 100
console.log(numeroSecreto)
//let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'Intento';
let maximosIntentos = 10;

alert("Juguemos a adivinar el numero, tienes tan solo 10 intentos... Comencemos");
//Mientras el numero secreto sea diferente
while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre el 1 y el 100: "));

    console.log(typeof(numeroUsuario));
    // Este codigo realizara la comparacion
    // En la alerta utilizamos el operador ternario para realizar la evaluacion de intentos desde la misma linea
    // ? representaria el 'IF'
    // : representaria el 'ELSE'
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero es menor.");
        } else {
            alert("El numero es mayor.");
        }
        //Incrementamos el contador cuando no acierta
        intentos ++;
        //palabraIntentos = 'Intentos';
        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        } 
    } 
}

