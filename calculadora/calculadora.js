function calculadora (){
   const calculo = Number(prompt("Escolha uma operação: \n 1- Soma(+), \n 2-Subtração (-), \n 3-Multiplicação (*), \n 4-Divisão real (/), \n 5-Divisão inteira(%), \n 6-Potenciação(**)"))
   


  if(!calculo || calculo >=7){
    alert("Operação invalida")
    calculadora()
  }else{

    let numero1 = Number(prompt("Escolha o primeiro numero"))
    let numero2 = Number(prompt("Escolha o segundo numero"))
    let resultado;


    if(!numero1 || !numero2){
        alert("Parametros invalidos");
        calculadora()
    }else{
        function soma(){
            resultado = numero1 + numero2
            alert(`${numero1} + ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function subtracao(){
            resultado = numero1 - numero2
            alert(`${numero1} - ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function multuplicacao	(){
            resultado = numero1 * numero2
            alert(`${numero1} * ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function divisaoReal(){
            resultado = numero1 / numero2
            alert(`${numero1} / ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function divisaoInteira(){
            resultado = numero1 % numero2
            alert(`${numero1} % ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function potenciacao(){
            resultado = numero1 ** numero2
            alert(`${numero1} elevado ${numero2} = ${resultado}`)
            novaOperacao()
           }
        
           function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1-Sim \n 2-Não")
        
            if(opcao ==1){
                calculadora()
            }else if(opcao ==2){
                alert("Até logo")
            }else{
                alert("Digite uama opção valida");
                calculadora()
            }
            
           }
    }




   switch(calculo){
    case 1:
    soma()
    break

    case 2:
    subtracao()
    break

    case 3:
    multuplicacao()
    break

    case 4:
    divisaoReal()
    break

    case 5:
    divisaoInteira()
    break

    case 6:
    potenciacao()
    break

}
  }

  
}




calculadora()