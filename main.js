//  repaso
/*
let valorUno = parseFloat(prompt("ingrese un valor"))
let valorDos = parseFloat(prompt("ingrese otro valor"))
let operacion = prompt("ingrese una operación")

while(valorUno || valorUno === 0){
    let resultado = 0
    switch(operacion){
        case "+":
            resultado = valorUno +  valorDos
            break
        case "-":
            resultado = valorUno - valorDos
            break
        case "*":
            resultado = valorUno * valorDos
            break
        case "/":
            resultado = valorUno / valorDos
            break 

    }
    alert(resultado)
    valorUno = parseFloat(prompt("ingrese un valor"))
    valorDos = parseFloat(prompt("ingrese otro valor"))
    operacion = prompt("ingrese una operación")
}
*/



// fin repaso


/*
function saludar (){
    let nombre = prompt("ingrese una funcion")
    alert("hola" + " " + nombre)
}

saludar()
*/

function consultaClima(){


    let pregunta1 = prompt("¿Te interesa saber el estado del clima en donde estás? (si/no)").toUpperCase()

    while(pregunta1 === "SI") {        
        nombreUsuario = prompt("Ingresa tu nombre").toUpperCase()
        zonaPais = prompt("¿En qué pais te encuentras?").toUpperCase()
        zonaUsuario = prompt("¿En qué zona vives? P.ej; Norte, Sur, Este, Oeste").toUpperCase()

        if(zonaUsuario === "NORTE") {
            alert(nombreUsuario + ", vistete fresco y mantente hidratado")
        } else if(zonaUsuario === "SUR"){
            alert(nombreUsuario + ", te recomendamos taparte por el frente frío #15 que se avecina")
        } else if(zonaUsuario === "ESTE"){
            alert(nombreUsuario + ", se esperan vientos fuertes y cielos despejados")
        } else if(zonaUsuario === "OESTE"){
            alert(nombreUsuario + ", evita salir a carretera ya que se espera una neblina espesa por las noches")
        } else (
            alert("Ingresa una región corecta")
        )

        pregunta1 = prompt("¿te interesaria saber otro clima?")

    } 
    alert("Gracias por visitarnos, vuelva pronto")

}

consultaClima()

