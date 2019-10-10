let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let lete_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");
let carnet_regex = new RegExp('[0-9]{8}$')


let add_student = (carnet, schedule, later)=>{
    let new_row = document.createElement("tr");
    let dateTime = new Date();
    
    new_row.classList.add("table-active");

    new_row.innerHTML = `<td>${carnet}</td>
    <td>${schedule}</td>
    <td>${dateTime.toLocaleString()}</td>
    <td>${later}</td>`

    tbody.appendChild(new_row)
}

let parseLateBool=(value)=>{
    if (value) {
        return "Llego Tarde";        
    }else{
        return "A tiempo";
    }
}

submit_btn.addEventListener("click",()=>{

    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
    let late = parseLateBool(lete_switch.cheked);
    if(carnet_regex.test(carnet)){
        add_student(carnet,schedule,late)
    }else{
        alert("el carnet no es valido")
    }
    

})

carnet_field.addEventListener("keyup", (event)=>{
    let keyUp = event.kedCode
    let carnet = carnet_field.value
    if(keyUp == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
        submit_btn.disabled = false;
    } else{
        submit_btn.disabled = true;
    }
    
})
