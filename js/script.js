
// $(document).ready(function(){
// 	$('p').click(function(){
// 		alert('hola mundo')
// 	});
// });
$(document).ready(function() {
	var nuevaLista = 0;
	// preguntar si hay más inputs
	$('.agregar').click(function() {
		// nuevaLista = nuevaLista + 1;
        $('.nuevaLista').append('<input type="text" placeholder="Añadir una lista" class="col-sm-push-1 col-sm-2 agregarNuevo" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-push-1 col-sm-1" onclick="agregarLista()">Guardar</button>');
   	});
   	// postear el valor del input


});
// Si nueva lista es menor a 1 crear el input
function agregarLista (){
	var contenedorPost = document.getElementById('contenedorPost');
	var valorInput = document.getElementsByTagName('input')[0].value;		
	var post = document.createElement('div');
	var parrafoLista = document.createElement('p');
	var nodoLista = document.createTextNode(valorInput);
	var botonTarjeta = document.createElement('button');
	var nodoBoton = document.createTextNode('Añadir tarjeta');
	post.setAttribute("class", "divPost col-sm-2 col-sm-offset-1 ");
	// // parentar
	parrafoLista.appendChild(nodoLista);
	contenedorPost.appendChild(post);
	botonTarjeta.appendChild(nodoBoton);
	post.appendChild(parrafoLista);
	post.appendChild(nodoLista);
	post.appendChild(botonTarjeta);
};