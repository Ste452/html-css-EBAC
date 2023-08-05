function calcularMedia( notas ) { 

    var soma = 0;    
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
     }    
    
       media = soma / notas.length; 
    
       return media;
    
    }

    function aprovacao(notas) {
        let media = calcularMedia(notas); // remover "let" para usar a variável global//...
    }

    let media; //Escopo global

    function aprovacao ( notas ) {
    
       let media = calcularMedia( notas );//escopo da função
       
       let condicao = media >= 5 ? "aprovado" : "reprovado";
       
       return 'Media ' + media + ' -  Resultado: ' + condicao; 
    }
    
            //Funções Recursivas

            function contagemRegressiva(numero) {

                let soma = 0;
                for(c = 0; c < notas.length; c++) {
                    soma += notas[c];
                }

                media = soma / notas.length;
                return media;

            }

            
               /*Formulário de envio de dados para o cálculo da média 
                var classAttribute = this.getAttribute('class');
                    if (classAttribute !== null && classAttribute.match(/erro/)) {
                    
                       return false;
                    
                   }*/

                    const formulario1 = document.getElementById("formulario-01")

                    if(formulario1) 
                    formulario1.addEventListener('submit', function(evento) {
                        
                        evento.preventDefault();
                        
                        evento.stopPropagation();

                        if(this.getAttribute('class').match(/erro/)) {
                            
                            return false;

                        }
                    
                        let dados = new FormData(this);
                        
                        let notas = [];
                    
                        for (let key of dados.keys()) {
                            
                            let numero = dados.get(key).match(/^\d+$/) ? Number(dados.get(key)) : 0;
                            
                            if (!isNaN(numero)){
                                notas.push(numero);

                            }
                        }
                    
                        console.log(notas);
                    
                        let texto = aprovacao(notas);
                    
                        document.getElementById('resultado').innerHTML = texto;
                    });
                    

            function validaCampo(elemento) {
            
            elemento.addEventListener("focusout", function(event) { 


                event.preventDefault();

                if(this.value == "") {
                    document.querySelector(".mensagem").innerHTML = "Verifique o preenchimento dos campos em vermelho";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }else{
                    document.querySelector(".mensagem").innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                }

            });
        }

        function validaCampoNumerico(elemento) {
            
            elemento.addEventListener("focusout", function(event) { 


                event.preventDefault();

                let numero = this.value.match(/^[\d]5-[]/) ? this.value.replace(/-/, '') : this.value;

                if(numero != "" && (/[0-9]*/) && numero >= 0 && numero <= 10) {
                    document.querySelector(".mensagem").innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector(".mensagem").innerHTML = "Verifique o preenchimento dos campos em vermelho";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }

            });
        }
        // Array contendo a lista de siglas dos estados brasileiros
        const estadosBrasileiros = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  
      // Função para validar a unidade federativa
      function validaUnidadeFederativa(uf) {
        // Verifica se a entrada está em letras maiúsculas
        const ufUpper = uf.toUpperCase();
        // Verifica se a entrada está presente no array de estados brasileiros
        return estadosBrasileiros.includes(ufUpper);
    }
    
    // Supondo que você queira validar o valor de um campo de entrada de texto com o id "uf":
    const ufInput = document.getElementById("uf");
    
    if (validaUnidadeFederativa(ufInput.value)) {
        document.querySelector(".mensagem").innerHTML = "";
        ufInput.classList.remove('erro');
        ufInput.parentNode.classList.remove('erro');
    } else {
        document.querySelector(".mensagem").innerHTML = "Verifique o preenchimento dos campos em vermelho";
        ufInput.classList.add('erro');
        ufInput.parentNode.classList.add('erro');
    }
    
        

   
  
        function validaEmail(elemento) {

            elemento.addEventListener("focusout", function(event) { 


                event.preventDefault();

                const emailValido = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;

                if(this.value.match(emailValido)) {
                    document.querySelector(".mensagem").innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector(".mensagem").innerHTML = "Verifique o preenchimento dos campos em vermelho";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
            });
         }

        let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
        let camposNumericos = document.querySelectorAll("input.numero");
        let camposEmail = document.querySelectorAll("input.email");

        for (emFoco of camposObrigatorios) {
            validaCampo(emFoco);
        }

        for(emFoco of camposNumericos) {
            validaCampoNumerico(emFoco);
        }

        for(emFoco of camposEmail) {
            validaCampoNumerico(emFoco);
        }