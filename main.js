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
        
        switch(zonaUsuario){
            case "NORTE":
                alert(nombreUsuario + ", vistete fresco y mantente hidratado")
                break
            case "SUR":
                alert(nombreUsuario + ", te recomendamos taparte por el frente frío #15 que se avecina")
                break
            case "ESTE":
                alert(nombreUsuario + ", se esperan vientos fuertes y cielos despejados")
                break
            case "OESTE":
                alert(nombreUsuario + ", evita salir a carretera ya que se espera una neblina espesa por las noches")
                break
            default:
                alert("Ingresa una región corecta")

                

        }
        pregunta1 = prompt("¿te interesaria saber otro clima?")

    } 
    alert("Gracias por visitarnos, vuelva pronto")

}

consultaClima()

/*
const datosClima = [
    {
        ciudad: "Buenos Aires",
        abreviatura:"BS",
        temperatura: 20,
        velocidadViento: 150,
    },
    {
        ciudad: "Nueva York",
        abreviatura:"NY",
        temperatura: 25,
        velocidadViento: 120,
    },
    {
        ciudad: "Tokio",
        abreviatura:"TK",
        temperatura: 28,
        velocidadViento: 100,
    },
    {
        ciudad: "Londres",
        abreviatura:"LD",
        temperatura: 18,
        velocidadViento: 80,
    },
    {
        ciudad: "Sídney",
        abreviatura:"SY",
        temperatura: 30,
        velocidadViento: 200,
    }
]
function consultaClima(){


    let continuar = confirm("¿Te interesa saber el estado del clima en donde estás?")

    while(continuar){        
        let nombreUsuario = prompt("Ingresa tu nombre").toUpperCase()
        let ciudadIngresada = prompt("¿En qué ciudad vives? P.ej; BA,NY,TK,LD,SY").toUpperCase()
        console.log(ciudadIngresada)
        let ciudadEncontrada = datosClima.find(dato => dato.abreviatura == ciudadIngresada)
        alert("Hola!! " + nombreUsuario + " la temperatura en " + ciudadEncontrada.ciudad + " es de " + ciudadEncontrada.temperatura + " grados")

        continuar = confirm("¿Te interesa saber el estado del clima en donde estás?")

    } 
    alert("Gracias por visitarnos, vuelva pronto")
    */
