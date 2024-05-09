// crear un array con las 5 notas
//mostrar 4 botones que hagan:
//      mostrar lista con las notas (funcion con <ul> y <li> for of)
//      calcular el promedio (funcion para calcular promedio con for)
//      obtener la nota mas alta (funcion con while)
//      establecer si hubo aplazos (nota menor a 4) (funcion con do while)

let array = [5,9,2,10,8];

function listarNotas(){ //funcion para crear una lista con las notas del array
    let lista = document.getElementById("listaNotas"); //se crea la variable lista y se le da valor mediante id 

    for (let nota of array){ // se utiliza for of para iterar sobre cada valor de el array 
        let item = document.createElement("li"); // se crea la variable item y se crean elemento de lista con .createElement 
        item.innerText= nota; // el texto interno del elemento lista va aser igual a nota (cada valor del array)
        lista.appendChild(item); // se llama a lista y con appenChild se agregan los elemtentos de item
    }
}

function calcularPromedio(){
    let suma=0;

    for (x=0; x<5; x++){
        suma += array[x]; // esto suma el valor del array en el indice x, osea suma todos los numeros del array
    }

    let promedio = (suma / 5); //alojo el promedio en la variable promedio

    document.getElementById("promedio").textContent= promedio// agrego el contenido de la variable promedio mediante id 
}

function notaMasAlta(){
    let notaAlta =0;// variable para alojar el valor de la nota mas alta

    let i =0;//variable para iterar sobre las notas

    while (i<6){ // numero 6 xq incluye el cinco 
        if (array[i] > notaAlta){ //si array en su indice i es mayor que el valor de notaAlta...
            notaAlta = array[i];//... entonces aloja el valor de array[i] en notaAlta
        }
        i++; //iteramos la variable i de a un valor
    }
    document.getElementById("mayor").textContent= notaAlta; // agrego el contenido de la variable notaAlta 
                                                            //mediante id para mostarlo en pantalla 
}

function hayAplazo(){//verifico si hay nota menor que 4
    let aplazo = "No"
    let i =0; // variable para ir ciclando

    do { 
        if (array[i]<4){ // si la nota que hay en el array indice i es menor que 4 entonces aplazo es igual a si
            aplazo = "Si";
            break; // corto el bucle por que si hay aplazo, sino no encuentra no cambia nada
        }  i++;  // nos aseguramos que i cicle de a un valor
    } while (i<5); // esto si sigue haciendo mientras que i es menor que 5 
    document.getElementById("aplazo").textContent = aplazo; // le doy un valor al emelemto que tiene id de aplazo con el valor de la variable aplazo
}