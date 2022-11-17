function Recuperar() {
    var done = 0;
    var senha = document.getElementsByName('passnew1')[0].value;
    senha = senha.toLowerCase();
    var senha2 = document.getElementsByName('passnew2')[0].value;
    senha = senha.toLowerCase();
  
    if (senha == senha2 ) {
      window.location = "../login/login.html";
      done = 1;
    }
    else if (done == 0) {
      alert("AS senhas não conferem!");
  
    }
  }