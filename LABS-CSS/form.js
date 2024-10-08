
var el = document.getElementById("finish");
el.addEventListener("click", (event) => {
    event.preventDefault();  // for Preventing form submission and refreshing the page
    var nam = document.getElementById('name').value;
    console.log(nam);
    document.getElementById('namei').innerHTML = nam;  
    document.getElementById('addressi').innerHTML = document.getElementById('address').value;  
    document.getElementById('beverages').innerHTML = document.getElementById('beverage').selected;  
});
