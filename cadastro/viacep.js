const inputCEP = document.querySelector('#floatingCep');
const inputEstado = document.querySelector('#floatingEstado');
const inputCidade = document.querySelector('#floatingCidade');
const inputBairro = document.querySelector('#floatingBairro');
const inputRua = document.querySelector('#floatingRua');
const inputComplemento = document.querySelector('#floatingComplemento');
let dados;

// FUNÇÃO PARA FAZER A REQUISIÇÃO DOS DADOS ATRAVÉS DA API VIACEP
// E GUARDAR OS VALORES NA VARIÁVEL DADOS
async function getInfo(event) {
  const cep = event.target.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  dados = await response.json();
}

// FUNÇÃO PARA SETAR OS CAMPOS BUSCADOS PELA API E AUTOCOMPLETAR PARA O USUÁRIO
async function setInfo() {
  await getInfo(event);
  inputEstado.value = dados.uf;
  inputCidade.value = dados.localidade;
  inputBairro.value = dados.bairro;
  inputRua.value = dados.logradouro;
  inputComplemento.value = dados.complemento;
}

inputCEP.addEventListener('change', setInfo);
