document.getElementById('nombreCV').addEventListener('click', function(){
	mostrarNombre();
});

document.getElementById('modoTema').addEventListener('click', function(){
	cambiarTema();
});

var estadoNombre = 1;
function mostrarNombre(){
	if(estadoNombre == 1){
	document.getElementById('nombreCV').innerHTML = "John Frederick Brendsen Thomson";
	}
	else if(estadoNombre == -1){
	document.getElementById('nombreCV').innerHTML = "John Brendsen";
	}
	estadoNombre*=-1;
}

let estadoTema = 1;
function cambiarTema(){
   	if(estadoTema == 1){
    	document.getElementById('infoSuperior').style.backgroundColor = "#4a646e";
		document.getElementById('infoLateral').style.backgroundColor = "#00003f";
		document.getElementById('infoCentral').style.backgroundColor = "#354d63";
		document.getElementById('modoTema').src = "Imagenes\\IconoModoClaro.png";
		document.getElementById('iconUbicacion').src = "Imagenes\\IconoUbicacionCV-Claro.png";
		document.getElementById('iconMail').src = "Imagenes\\IconoMailCV-Claro.png";
		document.getElementById('iconTelefono').src = "Imagenes\\IconoTelefonoCV-Claro.png";
		document.getElementById('iconCumpleaños').src = "Imagenes\\IconoFechaCV-Claro.png";
    }
 	else if(estadoTema == -1){
    	document.getElementById('infoSuperior').style.backgroundColor = "#87ceeb";
		document.getElementById('infoLateral').style.backgroundColor = "#3333a2";
		document.getElementById('infoCentral').style.backgroundColor = "#75aadb";
		document.getElementById('modoTema').src = "Imagenes\\IconoModoOscuro.png";
		document.getElementById('iconUbicacion').src = "Imagenes\\IconoUbicacionCV-Oscuro.png";
		document.getElementById('iconMail').src = "Imagenes\\IconoMailCV-Oscuro.png";
		document.getElementById('iconTelefono').src = "Imagenes\\IconoTelefonoCV-Oscuro.png";
		document.getElementById('iconCumpleaños').src = "Imagenes\\IconoFechaCV-Oscuro.png";
    }
  	estadoTema*=-1;
}