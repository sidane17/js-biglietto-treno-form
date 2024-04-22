const z = 0.21;
let sconto=0;
document.getElementById("submit").onclick = function(){
    let a = document.getElementById("km").value;
    let b = document.getElementById("eta").value;
    let k = document.getElementById("nome").value
    

    console.log(a)
    console.log(b)
    console.log(k)
  
    let costo = a*z;
    if(b<18){
        sconto=(costo*20)/100;
        costo-=sconto;
        costo=Math.round(costo*100)/100;
        console.log(costo)
    document.getElementById("offerta").innerHTML="Giovane";

    }
    else if(b>65)
    {
        sconto=(costo*40)/100;
        costo-=sconto;
        costo=Math.round(costo*100)/100;
        console.log(costo)
    document.getElementById("offerta").innerHTML="Anziano";

    }
    document.getElementById("costo").innerHTML=costo+"$";
    document.getElementById("cognome").innerHTML=k;


}