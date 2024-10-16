function func() {
    console.log("EXTERNAL SCRIPT RUNNING!!!!!!");
}
func();

var el = document.getElementById("finish");
el.addEventListener("click", (event) => {
    // console.log(event)
    event.preventDefault();
    validateForm();
    // PS::::when placed outside the function name last name address and dob is not captured
    var nam = document.getElementById('name').value.trim();
    var lnam = document.getElementById('lname').value.trim();
    var dat = document.getElementById('dateofbirth').value.trim();
    var adrs = document.getElementById('address').value.trim();
    var jsSkill = document.getElementById('range').value;
    var payment = document.getElementById('payment').value;
    var tea = document.getElementById('beverages_tea');
    var coffee = document.getElementById('beverages_coffee');
    var femaleElement = document.getElementById('gender_female');
    var maleElement = document.getElementById('gender_male');


    var bev = [];
    if (tea && tea.checked) {
        bev.push("Tea");
    }
    if (coffee && coffee.checked) {
        bev.push("Coffee");
    }

    var gender = "";
    if (femaleElement && femaleElement.checked) {
        gender = "Female";
    } else if (maleElement && maleElement.checked) {
        gender = "Male";
    }



    // Adding rows only if data is present
    if (nam) {
        addRow('First Name :', nam);
    }
    if (lnam) {
        addRow('Last Name :', lnam);
    }
    if (dat) {
        addRow('Date of Birth :', dat);
    }
    if (adrs) {
        addRow('Address :', adrs);
    }
    if (bev.length > 0) {
        addRow('Beverage :', bev.join(", "));
    }
    if (gender) {
        addRow('Gender :', gender);
    }
    if (jsSkill) {
        addRow('JS Skill Level :', jsSkill);
    }
    if (payment) {
        addRow('PaMode :', payment);
    }
});

function addRow(label, value) {
    var table = document.getElementById('tab');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = label;
    cell2.textContent = value;
}

function validateForm() {
    var firstName = document.getElementById("name").value.trim();
    var lastName = document.getElementById("lname").value.trim();
    var tea = document.getElementById('beverages_tea');
    var coffee = document.getElementById('beverages_coffee');
    var female = document.getElementById('gender_female');
    var male = document.getElementById('gender_male');
    var jsSkill = document.getElementById('range').value;

    // VALIDATIONS
    if (firstName === "") {
        alert("First Name is required");
        return false;
    }

    if (lastName === "") {
        alert("Last Name is required");
        return false;
    }


    if (!female.checked && !male.checked) {
        alert("Please select your gender");
        return false;
    }


    return true;
}

var reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    document.querySelector("#tab").innerHTML = " ";
});       

