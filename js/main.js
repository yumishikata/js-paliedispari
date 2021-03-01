// FUNZIONE SENZA USARE IL REVERSE 

function isPalindroma (word) {
    word = word.toLowerCase();
    console.log(word);   
    word = Array.from(word);
    var i = 0; 
    var j = word.length - 1;
    while (word[i] == word[j] && i <= j ){
        i++;
        j--;
    }
    if (j< i) {
        return true;
    }
    else {
        return false;
    }
    
    
}

    document.getElementById("invia").addEventListener('click' , 
    function() {
        var parola = document.getElementById("get_word").value;
        console.log(parola);
        if (isNaN(parola)) {
            if (isPalindroma(parola) == true){
                document.getElementById("palindroma").innerHTML = "La parola è palindroma";
                }
            else {
            document.getElementById("palindroma").innerHTML = "La parola NON è palindroma";
            } 
        }
        else {
            alert("Inserire una parola");
            } 
    }
    );


// PARI E DISPARI 

function randomToFive() {
    var y = Math.floor(Math.random() * 5) + 1;
    return y;
}

function sommaNumeriPari(x , y) {
    var somma = x + y;
    if (somma%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

document.getElementById("pari").addEventListener('click' , 
function (){
    var button = document.getElementById("pari");
    button.classList.add("bg_yellow");
    var element = document.getElementById("div_num");
    element.classList.add("visibility");
    document.getElementById("invio_num").addEventListener('click' , 
    function(){
        var numeroPlayer = parseInt(document.getElementById("numero").value);
        if (numeroPlayer <= 5 && numeroPlayer >= 1) {
            document.getElementById("num_player").innerHTML = "TU: " + numeroPlayer;
            var numeroPc = randomToFive();
            document.getElementById("num_pc").innerHTML = "PC: " + numeroPc;
            var somma = numeroPlayer + numeroPc;
            document.getElementById("somma").innerHTML = "La somma è: " + somma;
            if (sommaNumeriPari(numeroPc , numeroPlayer) == true) {
                document.getElementById("vittoria").innerHTML = "COMPLIMENTI HAI VINTO, LA SOMMA E' PARI";
            }
            else {
                document.getElementById("vittoria").innerHTML = "MI DISPIACE, HAI PERSO, LA SOMMA E' DISPARI"; 
            }
        }
        else {
            alert("Inserire un numero da 1 a 5");
            location.reload();
        }

    }
    )
}
);

document.getElementById("dispari").addEventListener('click' , 
function (){
    var button = document.getElementById("dispari");
    button.classList.add("bg_yellow");
    var element = document.getElementById("div_num");
    element.classList.add("visibility");
    document.getElementById("invio_num").addEventListener('click' , 
    function(){
        var numeroPlayer = parseInt(document.getElementById("numero").value);
        if (numeroPlayer <= 5 && numeroPlayer >= 1) {
            document.getElementById("num_player").innerHTML = "TU: " + numeroPlayer;
            var numeroPc = randomToFive();
            document.getElementById("num_pc").innerHTML = "PC: " + numeroPc;
            var somma = numeroPlayer + numeroPc;
            document.getElementById("somma").innerHTML = "La somma è: " + somma;
            if (sommaNumeriPari(numeroPc , numeroPlayer) == false) {
                document.getElementById("vittoria").innerHTML = "COMPLIMENTI HAI VINTO, LA SOMMA E' DISPARI";
            }
            else {
                document.getElementById("vittoria").innerHTML = "MI DISPIACE, HAI PERSO, LA SOMMA E' PARI"; 
            }
        }
        else {
            alert("Inserire un numero da 1 a 5");
            location.reload();
        }
    }
    )
}
);

document.getElementById("annulla").addEventListener('click' ,
function() {
    location.reload();
}
)



    
