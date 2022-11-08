
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