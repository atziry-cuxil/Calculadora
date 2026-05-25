let botones = document.querySelectorAll('.numero')
let operadores = document.querySelectorAll('.operador')
let input = document.querySelector('#pantalla')
let borrar = document.querySelector('#borrar')

botones.forEach(btn => {
    btn.addEventListener('click', (event) => {
        input.value += event.target.textContent
    })
})

const buscarMultiplicacion = (datos) => {
    let arreglo = []
    while (datos.includes('*') || datos.includes('/')) {
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] == '*' || datos[i] == '/') {
                arreglo[0] = datos[i - 1]
                arreglo[1] = datos[i]
                arreglo[2] = datos[i + 1]
                let decimales = controlDecimales(arreglo)
                if(decimales){
                    input.value = 'Doble Punto'
                    return;
                }
                let calculo = calcular(arreglo)
                datos.splice(i - 1, 3, calculo)
            }
        }
    }

    return datos;
}

const operacion = () => {
    let resultado  = 0
    let operacionLarga = input.value
    let operadoresTamanio = 0
    let operadores = '+-/*'
    let datos = []

    datos = operacionLarga.trim().split(' ')

    for(let b =0; b < datos.length; b++)
    {
        if(datos[b] == ""){
            let signos = datos[b-1] + datos[b+1]
            switch(signos){
                case '+-':
                    datos.splice(b-1, 3, '-')
                    break;
                case '++':
                    datos.splice(b-1, 3, '+')
                    break;
                case '--':
                    datos.splice(b-1, 3, '+')
                    break;
                case '-+':
                    datos.splice(b-1, 3, '-')
                    break;
                case '*-':
                    datos.splice(b, 3, parseFloat(datos[b+2])*-1)

                    break;
                case '*+':
                    datos.splice(b-1, 3, '*')
                    break;
                case '/+':
                    datos.splice(b-1, 3, '/')
                    break;
                case '/-':
                    datos.splice(b, 3, parseFloat(datos[b+2]) * -1)
                    break;
                default:
                    return 'Math Error'
            }

        }else if(operadores.includes(datos[b])  && b == 0){
            if(datos[b] == '-'){
                datos[b+1] = parseFloat(datos[b+1]) * -1
            }else{
                datos[b+1] = parseFloat(datos[b+1]) * 1
            }
            datos.shift()
        }
    }

    console.log(datos)

   for (let i = 0; i <= datos.length; i++) {
        if (operadores.includes(datos[i])) {
            console.log(datos[i])
            operadoresTamanio++
        }
    }

    datos = buscarMultiplicacion(datos)


    for (let j = 0; j < operadoresTamanio; j++) {
       if(datos.length >= 3){
            let decimales = controlDecimales(datos)
            if(decimales){
                input.value = 'Doble punto'
                return;
            }
            resultado = calcular(datos)
       }else{
            resultado = datos[0]
       }
    }

    input.value = resultado
}

const calcular = (datos) => {
    let calculo;

    switch (datos[1]) {
        case '+':
            calculo = parseFloat(datos[0]) + parseFloat(datos[2])

            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '-':
            calculo = parseFloat(datos[0]) - parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '*':
            calculo = parseFloat(datos[0]) * parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        case '/':
            calculo = parseFloat(datos[0]) / parseFloat(datos[2])
            datos.shift()
            datos.shift()
            datos.shift()
            datos.unshift(calculo)
            return calculo;
            break;
        default:
            return 'Expresion mal formada'
    }
}


operadores.forEach(operador => {
    operador.addEventListener('click', (event) => {
        if (event.target.textContent == '=') {
            operacion()
        } else {
            input.value += ' ' + event.target.textContent + ' '
        }
    })
})

borrar.addEventListener('click', (event) => {
    input.value = ''
})

const controlDecimales = (arreglo) => {
    let count = 0
    for(let i = 0; i < arreglo.length ; i++){
        for (let j = 0; j < arreglo[i].length; j++) {
            if (arreglo[i][j] == '.') {
                count++
            }
        }

        if (count > 1) {
            return true;
        }
    }

}
// definir nuestra calculadora
// Hacer operaciones Largas.
// Aceptar Negativos
// 5
// solo signos mas y menos juntos.
