document.addEventListener('keydown', function() {
    if(KeyboardEvent.keyCode == 37) {
        x = x + 1
        updatelist()
    }    
    else if(KeyboardEvent.keyCode == 39) {
        x = x + 1
        updatelist()
    }
} )

function updatelist () {
    document.getElementById("bozo").innerHTML = "clicked" +x+ "times";
}