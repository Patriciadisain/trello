
// $(document).ready(function(){
// 	$('p').click(function(){
// 		alert('hola mundo')
// 	});
// });
$(document).ready(function() {
	var contID = 1;
	$('.agregar').click(function() {
        $('.nuevaLista').append('<input type="text" placeholder="Añadir una lista" class="col-sm-2 agregarNuevo '+contID+'" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-1" onclick="agregarLista('+contID+')">Guardar</button>');
   		contID++;
   	});
});
	// postear el valor del input
function agregarLista (numId){
	$('#nuevaLista').addClass('hidden');
	$('.agregarNuevo').addClass('hidden');
	var contenedorPost = document.getElementById('contenedorPost');
	var valorInput = document.getElementsByClassName(numId)[0].value;
	console.log(numId);	
	var post = document.createElement('div');
	var parrafoLista = document.createElement('p');
	var  titulo = document.createTextNode(valorInput);
	var botonTarjeta = document.createElement('button');
	var nodoBoton = document.createTextNode('Añadir tarjeta');
	post.setAttribute("class", "divPost col-sm-2");
	parrafoLista.setAttribute("class", "titulo-lista");
	botonTarjeta.setAttribute("class", "btn btn-añadir")
	// // parentar
	parrafoLista.appendChild(titulo);
	contenedorPost.appendChild(post);
	botonTarjeta.appendChild(nodoBoton);
	post.appendChild(parrafoLista);
	post.appendChild(botonTarjeta);
};

// function () falta funcion para que se creen las tarjetas