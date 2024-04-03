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