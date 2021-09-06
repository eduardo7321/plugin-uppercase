document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#btn').addEventListener('click', function() {
        let text = document.querySelector('#texto').value
        document.querySelector('#result').innerHTML = upper(text)
        //document.querySelector("#cop").value = copy(text)
    })
  
    function upper(text) {
        return text.toUpperCase()
    }

   /* document.querySelector('#btn').addEventListener('click', function() {
        let text = document.querySelector('#texto').value
        document.querySelector('#result2').innerHTML = upper(text)
        //document.querySelector("#cop").value = copy(text)
    })*/





    let copyTextareaBtn = document.querySelector('#botaocopy')

    copyTextareaBtn.addEventListener('click', function(event) {
      let copyTextarea = document.querySelector('.texto')
      copyTextarea.select()
    
      try {
        let successful = document.execCommand('copy')
        let msg = successful ? 'sim!' : 'não!'
        alert('Texto copiado? ' + msg)
      } catch (err) {
        alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
      }
    })

    //<textarea class="textarea">Vamos copiar este texto?</textarea>
    //<br>
    //<button class="copiar">Copiar Texto</button>

})