window.onload = function () {
    let fecha_get = document.querySelector("#fecha_field");
    let hora_get = document.querySelector("#hora_field");
    let comentario_get = document.querySelector("#com_field");
    let tbody = document.querySelector("#table_body");
    let btn_Ingresar = document.querySelector("#ingresar_btn");
    let archivo_get = document.querySelector("#img_InputFile");
    let archivoRuta = archivo_get.value;



    let add_Evento = (fechas, horas, descripciones, fotos) => {

        let nuevaFila = document.createElement("tr");

        nuevaFila.classList.add("table-active");

        nuevaFila.innerHTML = `<td><center>${fechas}</center></td>
        <td><center>${horas}</center></td>
        <td><center>${descripciones}</center></td>
        <td><center>${fotos}</center></td>`

        tbody.appendChild(nuevaFila);
    }
    btn_Ingresar.addEventListener("click", function () {
        let fDate = fecha_get.value;
        let hhour = hora_get.value;
        let descc = comentario_get.value;
        let imgg = archivo_get.value;
        

        if (imgg === '') {
            imgg = "no hay foto";
        }

        add_Evento(fDate, hhour, descc, imgg);
        
       
    })

}