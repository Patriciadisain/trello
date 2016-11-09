
// $(document).ready(function(){
// 	$('p').click(function(){
// 		alert('prueba')
// 	});
// });
var contID = 0;
var idTarjetas = 100;
$(document).ready(function() {
	$('.agregar').click(function() {
        $('.nuevaLista').append('<input type="text" placeholder="Escribe el título de tu lista" class="col-sm-2 agregarNuevo '+contID+'" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-1" onclick="agregarLista('+contID+')">Guardar</button>');
   		contID++;
   	});
});
	// postear el valor del input, y añadir botón para agregar tarjetas
var contenedorPost = document.getElementById('contenedorPost');

function agregarLista (numId){
	$('#nuevaLista').addClass('hidden');
	$('.agregarNuevo').addClass('hidden');
		var valorInput = document.getElementsByClassName(numId)[0].value;
	// console.log(numId);	
	var post = document.createElement('div');
	var parrafoLista = document.createElement('p');
	var  titulo = document.createTextNode(valorInput);
	var botonTarjeta = document.createElement('button');
	var nodoBoton = document.createTextNode('Añadir tarjeta');
		post.setAttribute("class", "divPost col-sm-2");
		post.setAttribute("id",numId);
		parrafoLista.setAttribute("class", "titulo-lista text-center");
		botonTarjeta.setAttribute("class", "btn btn-añadir");
		botonTarjeta.setAttribute("onclick", "mostarTextarea("+numId+");");
	// parentar
		parrafoLista.appendChild(titulo);
		contenedorPost.appendChild(post);
		botonTarjeta.appendChild(nodoBoton);
		post.appendChild(parrafoLista);
		post.appendChild(botonTarjeta);	
// Para mostrar a un costado
	$('.nuevaLista').append('<input type="text" placeholder="Escribe el título de tu lista" class="col-sm-2 agregarNuevo '+contID+'" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-1" onclick="agregarLista('+contID+')">Guardar</button>');
   		contID++;	
};
// Funcion para que se creen las tarjetas
function mostarTextarea (nuevoId){
	var inputTarjeta = document.createElement('textarea');
		inputTarjeta.setAttribute("class", "classInput");
		inputTarjeta.setAttribute("type", " text")
		inputTarjeta.setAttribute("placeholder", "Escribe tus tarjetas")
		idTarjetas++
		inputTarjeta.setAttribute("id", idTarjetas);	
	var contenedorLista = document.getElementById(nuevoId);
		contenedorLista.appendChild(inputTarjeta);
		console.log(contenedorLista);
};
	// var valorTarj = document.getElementsByClassName('classInput')[0].value;
	// var nodoValorT = document.createTextNode(valorTarj);	
	// var tarjetaAgregada = document.createElement('div');
	// var parrafoTarjeta =  document.createElement('p');
	// 	contenedorPost.appendChild(tarjetaAgregada);
	// 	tarjetaAgregada.appendChild(parrafoTarjeta);
		// parrafoTarjeta.appendChild(nodoValorT);