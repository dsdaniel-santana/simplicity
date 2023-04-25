/* Selecionando elementos a serem manipuladps */
const formulario = document.querySelector ("form");
const campoCep = formulario.querySelector ("#cep");
const campoEndereco = formulario.querySelector ("#endereco");
const campoBairro = formulario.querySelector ("#bairro");
const campoCidade = formulario.querySelector ("#cidade");
const status = formulario.querySelector ("#status");
const botaoLocalizar = formulario.querySelector ("#localizar-cep");
/* Monitorando o evento de acionamento do botão localizar CEP */
botaoLocalizar.addEventListener("click", function(event){

    event.preventDefault();
    //pegar o CEP digitado
    let cep = campoCep.value;
    
    /* Técninca de comunicação assíncrona: "AJAX"
    API (Web Service) via CEP
    www.viacep.com.br */
    /* Etapa 1: preparar uma URL contendo o cep digitado e o caminho da API (Viacep) */
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    /* Etapa 2: Acesse e inicie uma comunicação/requisão com o servidor da URL indicada*/
    fetch(url)

    /* Etapa 3: e então, recupere a resposta do servidor no formato do objeto (JSON).
    Este objeto contém todas as informações do endereço referente ao CEP informado. */
    .then(resposta => resposta.json() )
    
    /* Etapa 4: e então, extraia os dados da resposta e mostra na tela */
    .then(function(dados){
        console.log(dados);
    })
});