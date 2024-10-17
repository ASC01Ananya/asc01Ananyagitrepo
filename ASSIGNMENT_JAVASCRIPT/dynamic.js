function func() {
    console.log("EXTERNAL SCRIPT RUNNING!!!!!!");
}
func();

var el = document.getElementById("finish");
el.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm(); 
});

function addOrUpdateRow(label, value) {
    var table = document.getElementById('tab');
    var rows = table.getElementsByTagName('tr');
    var rowExists = false;
// if row already present!!! just update the valueee,,,
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === label) {
            rows[i].cells[1].textContent = value;
            rowExists = true;
            break;
        }
    }
// else create a new row!!!!!
    if (!rowExists) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = label;
        cell2.textContent = value;
    }
}


var reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    document.querySelector("#tab").innerHTML = "";
});

document.getElementById("name").addEventListener("input", () => {
    addOrUpdateRow('First Name :', document.getElementById("name").value.trim());
});
document.getElementById("lname").addEventListener("input", () => {
    addOrUpdateRow('Last Name :', document.getElementById("lname").value.trim());
});
document.getElementById("dateofbirth").addEventListener("input", () => {
    addOrUpdateRow('Date of Birth :', document.getElementById("dateofbirth").value.trim());
});
document.getElementById("address").addEventListener("input", () => {
    addOrUpdateRow('Address :', document.getElementById("address").value.trim());
});
document.getElementById("range").addEventListener("input", () => {
    addOrUpdateRow('JS Skill :', document.getElementById("range").value);
});
document.getElementById("payment").addEventListener("input", () => {
    addOrUpdateRow('Pay Mode :', document.getElementById("payment").value);
});

var tea = document.getElementById('beverages_tea');
var coffee = document.getElementById('beverages_coffee');

tea.addEventListener("change", () => {
    var bev = [];
    if (tea.checked) {
        bev.push("Tea");
    }
    if (coffee.checked) {
        bev.push("Coffee");
    }
   
    addOrUpdateRow('Beverage :', bev.join(", "));
});

var femaleElement = document.getElementById('gender_female');
var maleElement = document.getElementById('gender_male');

femaleElement.addEventListener("change", () => {
    addOrUpdateRow('Gender :', femaleElement.checked ? "Female" : maleElement.checked ? "Male" : "");
});
maleElement.addEventListener("change", () => {
    addOrUpdateRow('Gender :', femaleElement.checked ? "Female" : maleElement.checked ? "Male" : "");
});
