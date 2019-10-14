window.onload = function () {
    let fecha_get = document.querySelector("#fecha_field");
    let hora_get = document.querySelector("#hora_field");
    let comentario_get = document.querySelector("#com_field");
    let tbody = document.querySelector("#table_body");
    let btn_Ingresar = document.querySelector("#ingresar_btn");
    let archivo_get = document.querySelector("#img_InputFile");
    let archivoRuta = archivo_get.value;
    let cadena = [];//aqui se guardan las cadenas de texto

    let add_Evento = (fechas, horas, descripciones, fotos) => {
        let nuevaFila = document.createElement("tr");
        nuevaFila.classList.add("table-active");
        nuevaFila.innerHTML = `<td><center>${fechas}</center></td>
        <td id = 'hhh'><center>${horas}</center></td>
        <td><center>${descripciones}</center></td>
        <td><center>${fotos}</center></td>`
        tbody.appendChild(nuevaFila);
    }
    btn_Ingresar.addEventListener("click", function () {
        let fDate = fecha_get.value,
            hhour = hora_get.value,
            descc = comentario_get.value,
            separador = ",",
            descc_guardado = descc.split(separador),
            imgg = archivo_get.value;
        cadena = descc_guardado;
        console.log(cadena);
        console.log(fDate);
        console.log(hhour);
        if (fDate === "") {
            alert("La fecha ingresada no es valida");
        } else {
            if (hhour === "") {
                alert("La hora Ingresada no es valida")
            } else {
                if (descc_guardado[0] === "") {
                    alert("No hay nada en el comentario");
                } else {
                    if (imgg === '') {
                        imgg = "no hay foto";
                        add_Evento(fDate, hhour, descc_guardado, imgg);
                    } else {
                        //imgg = archivo_get.value;
                        add_Evento(fDate, hhour, descc_guardado, imgg);
                    }
                }
            }
        }
    })
}
