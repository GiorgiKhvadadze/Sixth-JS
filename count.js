

var clicker = document.getElementById("clicker");
var increment = 1;
var count = 0; 

clicker.onclick = function(){
    count +=increment;
    clicker.innerHTML = "Click Numbers: " + count;
    if(count == 10 || count ==0){
        increment *=-1;
        clicker.innerHTML = "Click Numbers: " + count;
    }
}

