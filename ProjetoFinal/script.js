function calcular() {
    var nome = window.document.querySelector ('input#nome').value;
    var salarioMes = window.document.querySelector ('input#salario').value;
    var diasDaSemana = window.document.querySelector ('input#dias').value;
    var horasTrabalhadas  = window.document.querySelector ('input#horas').value;
    // var resultado = window.document.querySelector ('input#resultado');
    var semanas = 4
    var gastoComLanche= window.document.querySelector ('input#lanche').value
    gastoComLanche = gastoComLanche.replace ('.' ,'')
    gastoComLanche = gastoComLanche.replace (',' , '.')


    if (nome !== '' && salarioMes !== '' && diasDaSemana !=='' && horasTrabalhadas !=='' ) {
        // alert ('Valor preenchido')
       
        var diasMes = (semanas * diasDaSemana )
        var horasTrabalhasMes = (diasMes * horasTrabalhadas )
        var salarioHora = (salarioMes / horasTrabalhasMes )
        var horasTrabalhadasParaGastos = (gastoComLanche / salarioHora)
        

        document.querySelector('#nomes').innerHTML = nome
        document.querySelector('#horatrabalhada').innerHTML = salarioHora
        document.querySelector('#custodolanche').innerHTML =  gastoComLanche
        document.querySelector('#horasparalanche').innerHTML = horasTrabalhadasParaGastos
        document.getElementById('resultado').classList.remove('invisivel') 

      

    } else  {
        alert ('valor não preenchido!')
    }
    

}
