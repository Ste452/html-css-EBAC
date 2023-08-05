function obterMedia() { 

       var a = parseInt(document.getElementById("a").value);
       var b = document.getElementById("b").value;
       var c = document.getElementById("c").value;
    
       var media = (a + b + c) /3;
       
       document.getElementById("resultado").innerHTML = "Resultado:  " + media;

       console.log(a + b + c);
    
    }