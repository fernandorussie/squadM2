const inputCEP = document.querySelector('#floatingCep');
let dados;

async function getInfo({ target }) {
  const cep = target.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  dados = await response.json();
  console.log(dados);
}

function setInfo() {
  getInfo();
  // criar
}

inputCEP.addEventListener('change', getInfo);
