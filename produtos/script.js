window.onload = function(){
  getThemeFromLocalStorage()
}

const inputContainer = document.querySelector('#checkbox');
const rootElement = document.documentElement;

const lightTheme = {
  '--branco': '#fff',
  '--cinza': '#393e46',
  '--cinza-escuro': '#222831',
  '--cinza-claro': '#A9A9A9',
  '--bg-card': 'rgba( 255, 255, 255, 0.25 )',
  '--color-input': '#18c071',
}
const darkTheme = {
  '--branco': '#000',
  '--cinza': '#393e46',
  '--cinza-escuro': '#A9A9A9',
  '--cinza-claro': '#A9A9A9',
  '--bg-card': 'rgba( 10, 10, 10, 0.25 )',
  '--color-input': '#000',
}
inputContainer.addEventListener('change', function(){
  const isChecked = inputContainer.checked;
  if(isChecked){
    changeTheme(darkTheme)
  }else{
    changeTheme(lightTheme)
  }
})
function changeTheme(theme){
  for(let [prop,value ] of Object.entries(theme)){
    changeProperty(prop, value)
  }
  saveThemeLocalStorage(theme)
}
function changeProperty(property, value){
  rootElement.style.setProperty(property, value)
}

//criando localStorage
function saveThemeLocalStorage(theme){
  localStorage.setItem('theme', JSON.stringify(theme))
}
 
function isThemeEqual(firstTheme, secondTheme){
  for(let prop in firstTheme){
    if(firstTheme[prop] != secondTheme[prop]){
      return false;
    }else{
      return true;
    }
  }
}
 
function getThemeFromLocalStorage(){
  const theme = JSON.parse(localStorage.getItem('theme'))
  if(isThemeEqual(theme, darkTheme)){
    inputContainer.checked = true
  }
  changeTheme(theme);
}
  // Função Dark/Ligth Mode
  // function darkMode(){
  //   var checkBox = document.querySelector('#theme');
  //   var video = document.querySelector('#video');
  //   var image = document.querySelector('#image');
  //   if (checkBox.checked == true){
  //       document.documentElement.style.setProperty('--bg-cinza', 'rgba(152,24,245, 0.9)'),
  //       document.documentElement.style.setProperty('--cinza', '#9818F5'),
  //       document.documentElement.style.setProperty('--cinza-escuro', '#C7C8CA'),
  //       document.documentElement.style.setProperty('--branco', '#000'),
  //       document.documentElement.style.setProperty('--border-card', 'rgba(152,24,245, 0.37)'),
  //       document.documentElement.style.setProperty('--verde', '#BD62FF'),
  //       video.setAttribute ('src', '../assets/cellcode-Iphone/video-cell-modelo-black.mp4');
  //       image.setAttribute ('src', '../assets/cellcode-Iphone/tablet.png');
  //     } else {
  //       document.documentElement.style.setProperty('--bg-cinza', 'rgba(57, 62, 70, 0.9)'),
  //       document.documentElement.style.setProperty('--cinza-escuro', '#222831'),
  //       document.documentElement.style.setProperty('--cinza', '#393e46'),
  //       document.documentElement.style.setProperty('--branco', '#fff'),
  //       document.documentElement.style.setProperty('--border-card', 'rgba( 50, 221, 224, 0.37)'),
  //       document.documentElement.style.setProperty('--verde', '#1af38c'),
  //       video.setAttribute ('src','../assets/cellcode-Iphone/videoCellCode.mp4'),
  //       image.setAttribute ('src', '../assets/cellcode-Iphone/img2.png');
  //     }
  //   }

  
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Botão que acionou o modal
  var recipient = button.data('whatever') // Extrai informação dos atributos data-*
  // Se necessário, você pode iniciar uma requisição AJAX aqui e, então, fazer a atualização em um callback.
  // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
  var modal = $(this)
  modal.find('.modal-title').text('Um pouco mais sobre o ' + recipient)
  if(recipient == 'Apoiador Junior'){
      modal.find('.modal-body p').text(`Com o plano ${recipient} você terá um terminal de comandos integrado (GRÁTIS).`)
  }else if(recipient == 'Apoiador Pleno'){
      modal.find('.modal-body p').text(`Com o plano ${recipient} você terá uma conexão direta com o GitHub.`)
  }else if(recipient == 'Apoiador Senior'){
      modal.find('.modal-body p').text(`Com o plano ${recipient} você terá disponivel uma IDE dedicada para .NET Framework, uma versão mais robusta e completa.`)
  }else if(recipient == 'Apoiador Full Stack'){
      modal.find('.modal-body p').text(`Com o plano ${recipient} você vai investir no projeto e a partir disso, sera um patrocinador.`)
  }
})
