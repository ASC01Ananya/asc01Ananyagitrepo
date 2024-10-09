i=2;
j=4;
console.log(i+j);

function func()
{
    console.log("EXTERNAL SCRIPT RUNNING!!!!!!");
}
func();
var el = document.getElementById("finish");
el.addEventListener("click", (event) => {
    event.preventDefault();  // for Preventing form submission and refreshing the page
    var nam = document.getElementById('name').value;
    console.log(nam);
    document.getElementById('namei').innerHTML = nam;  
    document.getElementById('addressi').innerHTML = document.getElementById('address').value;  
    document.getElementById('beverages').innerHTML = document.getElementById('beverage').selected;  
});

function internal(){
    console.log("IN External ");
}
internal();

function namefun(name){
    console.log("IN External "+name);
}
namefun("ANANYA");
for(var i=0;i<5;i++)
{
    console.log("value of i in external script is "+i);

}

function ava() {
    var ifr = document.getElementById("yt");
    ifr.innerHTML = '<iframe width="676" height="300" src="https://www.youtube.com/embed/zrcCfubqijo" title="AVA+ Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
function ab() {
    var ifr = document.getElementById("yt");
    ifr.innerHTML = '<iframe width="676" height="380" src="https://www.youtube.com/embed/Ir-5m7LESzs" title="AI-Driven Innovation Starts Here" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
