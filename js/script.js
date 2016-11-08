
// $(document).ready(function(){
// 	$('p').click(function(){
// 		alert('hola mundo')
// 	});
// });
$(document).ready(function() {
	var nuevaLista = 0;
	// preguntar si hay más inputs
	$('.agregar').click(function() {
		nuevaLista = nuevaLista + 1;
        $('.nuevaLista').append('<input type="text" placeholder="Nombra tu lista" class="col-sm-push-1 col-sm-3 inputLista" id="'+nuevaLista+'">');
   	});
});
// Si nueva lista es menor a 1 crear el input