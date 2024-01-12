let registerButton = document.getElementById('submit_btn');
let form = document.getElementById('car_form');
let deleteButton = document.getElementById('deleteButton')

registerButton.onclick = function(event) {

    event.preventDefault();
    
    let owner = document.getElementById("owner").value;
    let carName = document.getElementById("car_name").value;
    let licensePlate = document.getElementById("license_plate").value;
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;
    let startDateValue = new Date(startDate);
    let endDateValue = new Date(endDate);
    let licensePlateFormat = /^[A-Z]{2}-[A-Z]{2}-\d{2}$/;

    if (!owner || !carName || !licensePlate || !startDate || !endDate) {
        alert("Please fill in all fields");
        return;
    }

    if (endDateValue < startDateValue) {
        alert("End date cannot be earlier than start date");
        return;
    }

    if (!licensePlate.match(licensePlateFormat)) {
        alert("Please enter a valid license plate in the suggested format(e.g. AA-BB-11)");
        return;
    } 


    let table = document.getElementById("car_table_body");
    let newRow = table.insertRow(table.rows.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerHTML = owner;
    cell2.innerHTML = carName;
    cell3.innerHTML = licensePlate;
    cell4.innerHTML = startDate;
    cell5.innerHTML = endDate;
    cell6.innerHTML = `<button class="delete_btn" onclick="deleteRow(this)"><i class="fa-solid fa-x"></i></button>`;

    form.reset();

};


function deleteRow(button) {
    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}

//Search Function

function searchTable() {
    let input = document.getElementById('search_bar');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('car_table');
    let tbody = document.getElementById('car_table_body');
    let tr = tbody.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let rowVisible = false;
        for (let j = 0; j < tr[i].cells.length; j++) {
            let td = tr[i].cells[j];
            if (td) {
                let txtValue = td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    rowVisible = true;
                    break;
                }
            }
        }
        tr[i].style.display = rowVisible ? '' : 'none';
    }
}