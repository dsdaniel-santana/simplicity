/* Selecionando elementos a serem manipuladps */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const mensagem = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

/* Ativação das máscaras com jQurey Mask */
$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00) 0000-0000");


/* Monitorando o evento de acionamento do botão localizar CEP */
botaoLocalizar.addEventListener("click", function (event) {

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
        .then(resposta => resposta.json())

        /* Etapa 4: e então, extraia os dados da resposta e mostra na tela */
        .then(function (dados) {
            console.log(dados);
            if ("erro" in dados) {
                //Apresentamos a mensagem abaixo
                mensagem.innerHTML = "Cep Não Encontrado!";
                mensagem.style.color = "red";
                campoCep.focus();

            } else {
                //Senão, o cep existe então mostramos:
                mensagem.innerHTML = "Cep Encontrado!";
                mensagem.style.color = "blue";


                campoEndereco.value = dados.logradouro;
                campoBairro.value = dados.bairro;
                campoCidade.value = dados.localidade;
                campoEstado.value = dados.uf;

            }


        })
});