let table = document.getElementById("datetable");

function formDate() {
    const forms = document.forms[0];
    const messages = document.querySelectorAll('div');  
    let row = "<tr>"; 
    let empty = false; 

    for (let i = 0; i < forms.length; i++) {
        if (forms[i].type !== "button") {
            if (forms[i].value === "") {
                empty = true; 
                messages[i].style.display = 'block'; 
            } else {
                row += "<td>" + forms[i].value + "</td>";
                messages[i].style.display = 'none'; 
            }
        }
    }

    if (empty) {
        return; 
    }

    row += '<td><button type="button" onclick="deleteDate(this)">Delete</button></td>';
    row += "</tr>";  
   
    const tbody = table.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML += row; 
    }

    for (let i = 0; i < forms.length; i++) {
        if (forms[i].type !== "button") {
            forms[i].value = ""; 
        }
    }
}

function deleteDate(button) {
    const row = button.closest("tr"); 
    row.remove(); 
}