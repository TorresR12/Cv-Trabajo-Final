document.getElementById('nombreCV').addEventListener('click', function(){
	mostrarNombre();
});

document.getElementById('modoTema').addEventListener('click', function(){
	cambiarTema();
});

document.getElementById('imagenCv').addEventListener('click', function(){
	cambiarFoto();
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
	/**Modo oscuro*/
   	if(estadoTema == 1){
    	document.getElementById('infoSuperior').style.backgroundColor = "#4a646e";
		document.getElementById('infoLateral').style.backgroundColor = "#00003f";
		document.getElementById('infoCentral').style.backgroundColor = "#354d63";
		document.getElementById('modoTema').src = "Imagenes\\IconoModoOscuro.png";
		document.getElementById('iconUbicacion').src = "Imagenes\\IconoUbicacionCV-Blanco.png";
		document.getElementById('iconMail').src = "Imagenes\\IconoMailCV-Blanco.png";
		document.getElementById('iconTelefono').src = "Imagenes\\IconoTelefonoCV-Blanco.png";
		document.getElementById('iconCumpleaños').src = "Imagenes\\IconoFechaCV-Blanco.png";
    }
    /**Modo claro*/
 	else if(estadoTema == -1){
    	document.getElementById('infoSuperior').style.backgroundColor = "#87ceeb";
		document.getElementById('infoLateral').style.backgroundColor = "#3352a2";
		document.getElementById('infoCentral').style.backgroundColor = "#75aadb";
		document.getElementById('modoTema').src = "Imagenes\\IconoModoClaro.png";
		document.getElementById('iconUbicacion').src = "Imagenes\\IconoUbicacionCV-Negro.png";
		document.getElementById('iconMail').src = "Imagenes\\IconoMailCV-Negro.png";
		document.getElementById('iconTelefono').src = "Imagenes\\IconoTelefonoCV-Negro.png";
		document.getElementById('iconCumpleaños').src = "Imagenes\\IconoFechaCV-Negro.png";
    }
  	estadoTema*=-1;
}

var estadoFoto = 1;
function cambiarFoto(){
	if(estadoFoto == 1){
	document.getElementById('imagenCv').src="Imagenes\\FotoPerfilCV2.jpeg";
	}
	else if(estadoFoto == -1){
	document.getElementById('imagenCv').src="Imagenes\\FotoPerfilCV.jpeg";
	}
	estadoFoto*=-1;
}