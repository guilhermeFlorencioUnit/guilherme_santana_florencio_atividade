//Contador de Palavras
var inp = document.getElementById('exampleFormControlTextarea1'),
    out = document.getElementById('out');
     
inp.addEventListener('keyup', function () {
    out.innerHTML = inp.value.split(/\s/).length;
    resultPala.innerHTML = inp.value.split(/\s/).length;
});

//Abrir o segundo painel
var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');
btn.addEventListener('click', function() {
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

//Exibir dados no Modal
function teste() {
    var name = document.getElementById('floatingInput').value;
    var idade = document.getElementById('floatingInput2').value;
    var sexo = document.getElementById('flexRadioDefault1').value;
    var data = document.getElementById('data').value;
    var area = document.getElementById('exampleFormControlTextarea1').value;
    
    
    document.getElementById('restulNome').innerHTML = name;
    document.getElementById('restulIdade').innerHTML = idade;
    document.getElementById('restulSexo').innerHTML = sexo;
    document.getElementById('restulData').innerHTML = data;
    document.getElementById('restulArea').innerHTML = area;    
}

//Validar Idade
function validarIdade(campoIdade){
    var idadeInformada = parseInt(document.getElementById("floatingInput2").value);
    var idadeDefault = 1;
    var resultado = '';
    
    if(idadeInformada) {
      if(idadeInformada === idadeDefault) {
        return true;
      } else if(idadeInformada > idadeDefault){
        return true;
      } else {
        document.getElementById("floatingInput2").values ="";
        alert("Adicione uma idade valida");
        document.form-content.floatingInput2.focus();

          return false;
      }
    }    
}

function validarData(campoData){
  console.log(campoData);
}