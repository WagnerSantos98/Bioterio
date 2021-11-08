function Soma(){

  var soma = 0;
  $('.totais').each(function(){
    var valorItem = parseInt($(this).val());

    if(!isNaN(valorItem)){
      soma += parseInt(valorItem);
    }
    $('#final').val((soma).toFixed(0));
  });
}

//Perfil
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Fechar o menu
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
