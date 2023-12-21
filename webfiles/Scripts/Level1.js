let name = 0;
        function slider () {
            name = name + 1
            pushtext()
        }
        function skip () {
            name = 799
            pushtext ()
        }
        function pushtext () {
            if (name < 80) {
            //Assigns text to a paragraph for usage.
                document.getElementById("nameBoks").innerHTML = "cringe levels at " +name+ "%, non critical levels";
            } else if (name < 100){
                document.getElementById("nameBoks").innerHTML = "Nearing 100% cringe! " +name+ "%!";
            } else if (name < 150){
                document.getElementById("nameBoks").innerHTML = "Too much cringe for the system to handle. " +name/100+ "% equiavelent percentage overbound";
            } else if (name < 225){
                document.getElementById("nameBoks").innerHTML = "Bruh can you stop please?";
            } else if (name < 300){
                document.getElementById("nameBoks").innerHTML = "please consider the following: <img src=\"Media/Amongus.png\" alt=\"mogus\">";
            } else if (name < 350){
                document.getElementById("nameBoks").innerHTML = "Do i have to stop you?";
            } else if (name < 650){
                document.getElementById("nameBoks").innerHTML = "Imminent destruction in " +(650-name)+ " clicks";
            } else if (name < 800){
                document.getElementById("nameBoks").innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            } else {
                document.getElementById("nameBoks").innerHTML = "*dies* hope ur happy <form action=\"lev2.html\"><button class=\"smaller-button\">Next Level</button></form>"
            }
        }