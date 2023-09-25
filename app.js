var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["aut"] = document.getElementById("aut").value;
    formData["title"] = document.getElementById("title").value;
    formData["con"] = document.getElementById("con").value;
    formData["date"] = document.getElementById("date").value;
    formData["cmt"] = document.getElementById("cmt").value;
    return formData;
}

//Insert 
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.aut;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.title;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.con;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.date;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.cmt;
    cell6 = newRow.insertCell(6);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("aut").value = selectedRow.cells[1].innerHTML;
    document.getElementById("title").value = selectedRow.cells[2].innerHTML;
    document.getElementById("con").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cmt").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.aut;
    selectedRow.cells[2].innerHTML = formData.title;
    selectedRow.cells[3].innerHTML = formData.con;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.cmt;
}

//Delete 
function onDelete(td) {
    if (confirm('Do you want to delete this post?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset
function resetForm() {
    document.getElementById("id").value = '';
    document.getElementById("aut").value = '';
    document.getElementById("title").value = '';
    document.getElementById("con").value = '';
    document.getElementById("date").value = '';
    document.getElementById("cmt").value = '';
    selectedRow = null;
}