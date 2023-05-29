const calculaImc = () => {
    const altura = document.imcForm.elements["altura"].value;
    const peso = document.imcForm.elements["peso"].value;

    const imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        alert("Voce esta abaixo do peso");
    }
    else if (imc >= 18.5 && imc < 25) {
        alert("Voce esta com o peso normal");
    }
    else if (imc >=25 && imc < 30) {
        alert("Voce esta com sobrepeso");
    }
    else if (imc >=30 && imc < 40){
        alert("Voce esta com obesidade");
    }
    else {
        alert("Voce esta com obesidade grave");
    }
}