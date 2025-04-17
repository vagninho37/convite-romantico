function verificarSenha() {
  const senha = document.getElementById('senha').value;
  if (senha === "22/07/24") {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('conviteScreen').style.display = 'flex';
  } else {
    alert("Senha incorreta, tente novamente!");
  }
}

function responder(escolha) {
  if (escolha) {
    document.getElementById('conviteScreen').style.display = 'none';
    document.getElementById('respostaScreen').style.display = 'flex';
  } else {
    alert("Poxa... tudo bem, talvez outro dia!");
  }
}