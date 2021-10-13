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

