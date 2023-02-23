//VARIABLE//
const nombreUsuario = prompt('Ingrese su nombre de usuario')
const contrasena = prompt('Ingrese su contraseña')

//FUNCION DE INGRESO//
function IngresoDeUsuario() {
    nombreUsuario
    contrasena
    alert('¡Hola ' + nombreUsuario + '!')
}

//FUNCION DE SUSCRIPCIONES//
function elegirSuscripcion() {
    alert('Presiona "Aceptar" para desplegar nuestros planes de suscripción mensual')
    let tipoDeSuscripcion = prompt('Elige tu suscripción: \n 1-Everyday \n 2-Simple \n 3-Doble Shot')
    switch (tipoDeSuscripcion){
        case '1':
            alert('¡Felicitaciones por su suscripción ' + nombreUsuario + '! \n El total de su compra es de $690')
            break
        case '2':
            alert('¡Felicitaciones por su suscripción ' + nombreUsuario + '! \n El total de su compra es de $900')
            break
        case '3':
            alert('¡Felicitaciones por su suscripción ' + nombreUsuario + '! \n El total de su compra es de $1700')
            break;
        default:
            alert('Ingrese opcion valida (1, 2 o 3)')
            break
    }
}

//FUNCION DE BOLSAS//
function elegirBolsa() {
    alert('Presiona "Aceptar" para comprar nuestros cafes de especialidad')
    let tipoDeBolsa = prompt('Elige tu café: \n 1-Brasil Crucera \n 2-Etiopía Najá \n 3-Guatemala GTA')
    switch (tipoDeBolsa) {
        case '1':
            alert('¡Felicitaciones por su compra ' + nombreUsuario + '! \n El total de su compra es de $550')
            break
        case '2':
            alert('¡Felicitaciones por su compra ' + nombreUsuario + '! \n El total de su compra es de $800')
            break
        case'3':
            alert('¡Felicitaciones por su compra ' + nombreUsuario + '! \n El total de su compra es de $700')
            break;
            default:
                alert('Ingrese opcion valida (1, 2 o 3)')
                break
    }
}

//FUNCION GENERAL DE INGRESO, SUSCRIPCION O COMPRA//
function QueComprar() {
    let suscripcionOCompra = prompt('¿Qué estás buscando? \n 1-Suscripción mensual \n 2-Compra')
    if (suscripcionOCompra == '1') elegirSuscripcion();
    if (suscripcionOCompra == '2') elegirBolsa();
}

//PARA VISUALIZAR HTML MIENTRAS SE EJECUTAN LAS FUNCIONES//
window.addEventListener('load',function(){
    let stringIngresoDeUsuario = IngresoDeUsuario();
    let stringQueComprar = QueComprar();
})