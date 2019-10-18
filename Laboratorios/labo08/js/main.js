let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let lete_switch = document.querySelector("#late_switch").value;
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");
let carnet_regex = new RegExp("[0-9]{8}$");
let student_list = [];
let serial = 0;


let printArray = () => {
  tbody.innerHTML = "";

  student_list.forEach(elem => {
    let new_row = document.createElement("tr");


    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let btnEliminar = document.createElement("button");
    let confirmCarnet = document.createElement("input")


    new_row.classList.add("table-active");
    new_row.innerHTML = `<td>${elem.carnet}</td>
    <td>${elem.horario}</td>
    <td>${elem.horaIngreso.toLocaleString()}</td>
    <td>${elem.tarde}</td>`;

    /*
     *personalizando btn
     */

    btnEliminar.className = "btn btn-danger";
    btnEliminar.innerText = "Eliminar";
    btnEliminar.value = elem.id;
    /*
    * personalizando input
    */

    confirmCarnet.className = "form-control";
    confirmCarnet.type = "text";


    btnEliminar.addEventListener("click", event => {
      let id_actual = event.target.value;

      if (confirmCarnet.value === elem.carnet) {
        student_list.forEach((elem, pos) => {
          if (id_actual == elem.id) {
            student_list.splice(pos, 1);
            printArray();
          }
        });
      }else{
        alert ("colocar el mismo carnet para confirmar eliminar");
      }
    });

    celda2.appendChild(confirmCarnet);
    new_row.appendChild(celda2);
    tbody.appendChild(new_row);

    celda.appendChild(btnEliminar);
    new_row.appendChild(celda);
    tbody.appendChild(new_row);



  });
};

let add_student = (carnet, schedule, late) => {
  let dateTime = new Date();
  student_list.push({
    id: serial,
    carnet: carnet,
    horario: schedule,
    tarde: late,
    horaIngreso: dateTime
  });
  serial++;
};


let parseLateSwitch = (value) => {
  if (value) {
    return "Tardisimo";
  } else

    return "A tiempo";

};

submit_btn.addEventListener("click", () => {

  let carnet = carnet_field.value;
  let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
  let late = parseLateSwitch(lete_switch.checked);

  if (carnet_regex.test(carnet)) {
    add_student(carnet, schedule, late);
    printArray();
  } else {
    alert("el carnet no es valido");
  }
});

carnet_field.addEventListener("keyup", event => {
  let keyUp = event.kedCode;
  let carnet = carnet_field.value;
  if (keyUp == 13) {
    submit_btn.click();
  }

  if (carnet_regex.test(carnet)) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;

  }
});
