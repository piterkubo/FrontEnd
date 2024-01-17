function Mudarstatus(evento) {
    var display = document.getElementById(evento).style.display;

    if(display == "none"){
        document.getElementById(evento).style.display = 'block';
    }

    else{
        document.getElementById(evento).style.display = 'none';
    }
    
    a.addEventListener("click", Mudarstatus);
}