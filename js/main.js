const arrayNum = [];
var posizioneArray = 0;

function cambioColore(colore){
    var cssLink = document.getElementById("css-file");
    var nuovoCSS;

    if(colore=="default"){
        nuovoCSS="/css/main.css";
    }else if(colore=="rosa"){
        nuovoCSS="/css/main_rosa.css";
    }else(
        nuovoCSS="/css/main_verde.css"
    )
    
    cssLink.href= nuovoCSS;
}

function calcolaFattorialeIncrementa() {
    var n = parseInt(document.getElementById("inputNumber").value);
    var risultato = 1;

    for (var i = 1; i <= n; i++) {
        risultato = risultato * i;
  }

  document.getElementById("risFattoriale").textContent = "Il fattoriale di " + n + " è " + risultato;
}

function sommaNNumPrimi(){
    var num = parseInt(document.getElementById("inputNumber").value);
    var somma = 0;

    for (let i=1; i<=num; i++){
        somma = somma + i;
    }

    document.getElementById("risSommaNum").textContent = "La somma dei primi " + num + " numeri è " + somma;
}

function calcolaQuadrato(){
    var num = parseInt(document.getElementById("inputNumber").value);
    document.getElementById("risQuadrato").textContent = "Il quadrato di " + num + " è " + num*num
}

function calcolaFattorialeDecrementa(){
    var n = parseInt(document.getElementById("inputNumber").value);
    var risultato = 1;

    for (var i = n; i >= 1; i--){
        risultato = risultato * i;
    }
    document.getElementById("risFattoriale").textContent = "Il fattoriale di " + n + " è " + risultato;
}

function calcolaSommaNNumDecrementa(){
    var num = parseInt(document.getElementById("inputNumber").value);
    var somma = 0;

    for (var i = num; i >= 1; i--){
        somma = somma + i; 
    }
    document.getElementById("risSommaNum").textContent = "La somma dei primi " + num + " numeri è " + somma;
}

function inserisciNumArray(){
    var n = parseFloat(document.getElementById("inputNumber").value);
    arrayNum[posizioneArray] = n;
    document.getElementById("risInsArray").textContent = "Il num " + n + " è stato inserito nella poszione " + posizioneArray;
    posizioneArray++;
}

function trovaPosArray(){
    var n = parseInt(document.getElementById("inputNumber").value);
    var ris = 0;
    ris = arrayNum[n];

    if (arrayNum[n] == undefined) {
        document.getElementById("risTrovaArray").textContent = "Nella posizione " + n + " non è stato inserito nessun numero ";
        
    } else {
        document.getElementById("risTrovaArray").textContent = "Nella posizione " + n + " c'è il num " + ris;
    }
    
}

function calcolaArray(){
    if(posizioneArray<1){
        document.getElementById("risCalcArray").textContent = "Insufficienti numeri nell'array";
    }else{
        let somma = 0;

        for (let i=0;i<(posizioneArray-1);i++){
            somma += arrayNum[i] * arrayNum[i+1];
            console.log("Somma: "+ somma);
        }

        document.getElementById("risCalcArray").textContent = "Somma dei prodotti dell'array: "+somma;
    }
}

function ResetArray() {
    arrayNum.length = 0;
    posizioneArray = 0;
}

function MoltiplicaEstremi(){
    risultato1 = 0;
    risultato2 = 0;
    var i= arrayNum[0];
    var j= arrayNum[posizioneArray];

    if(posizioneArray==0){
        arrayNum[0]*arrayNum[posizioneArray]==risultato1;
        i++;
        j--;
        document.getElementById("risSommaPerEstremi").textContent = risultato3;
    }
}

