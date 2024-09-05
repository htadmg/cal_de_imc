function Calcular(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(peso) || isNaN(altura)) {
        return
    }
    else{
        alturaEmM = (altura / 100)
        const imc = (peso / (alturaEmM * alturaEmM)).toFixed(1);
        document.getElementById("imc").innerHTML = imc ;
        document.getElementById("classificacao").innerHTML = Classificacao(imc) ;
    }
} 

function Limpar(){
    document.getElementById("imc").innerHTML = " " ;
    document.getElementById("classificacao").innerHTML = " ";
} 

function limitInputLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

function Classificacao(imc){
    if(imc < 18.5){
        return 'Magreza';
    }
    if(imc >= 18.5 && imc <= 24.9){
        return 'Normal';
    }
    if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso I';
    }
    if(imc >= 30 && imc <= 39.9){
        return 'Obesidade II';
    }
    if(imc >= 40 ){
        return 'Obesidade III';
    }
}