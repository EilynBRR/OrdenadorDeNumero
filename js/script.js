function validate_numberExpReg(number) { // Valida que solo se ingresen números
	if (!/^([0-9])*$/.test(number)) {
		return true;
	}
	return false;
}

function repeat_value(array) { // Verifica si hay números repetidos
	var repeat = Object.create(null);
	for (var i = 0; i < array.length; ++i) {
		var value = array[i];
		if (value in repeat) {
			return true;
		}
		repeat[value] = true; 
	}
	return false;
}

function get_array() { //Recibe el conjunto de números ingresado 
	var array = [];
	var number = document.getElementById("number").value;
	var onlyNumber = validate_numberExpReg(number);// Valida que sean solo números
	if(!onlyNumber){
		for (i = 0; i < number.length; i++) {
			array[i] = number[i];
		}
		var exist = repeat_value(array); // función que verifica si hay números repetidos
		if (exist) {
			alert("No se permiten números repetidos, por favor intente de nuevo");
			document.getElementById("number").value = '';
			document.getElementById("number").focus();
			reset_result();//oculta el resultado
		} else
			order_asc(array); // Se llama a la función que ordena el arreglo
		}else{
			alert("El valor ingresado " + number + " contiene caracteres no numéricos");
			document.getElementById("number").value = '';
			document.getElementById("number").focus();
			reset_result();//Oculta el resultado
		}
	}


function order_asc(array) { // Ordena el arreglo en forma ascendente
	var size_array = array.length;
	var order_array = [];
	var res;
	var valueOrder = true; // Variable para determinar si el arreglo de números se encuentra ya ordenado
	if (size_array != 1) { // Verifica si se ingresa más de un número a ordenar
		for (k = 0; k < (size_array - 1); k++) {
			for (j = 0; j < size_array; j++) {
				if (array[j] > array[j + 1]) {
					var maxNumber = array[j];
					array[j] = array[j + 1];
					array[j + 1] = maxNumber;
					res = array.toString().replace(/,/g, " ");
					valueOrder = false; // si no esta ordenado, se coloca en false
				}
			}
		}
		if (valueOrder) { //Verifica si los números estan ordenados de forma ascendente, y retorna el mismo array.
			res = array.toString().replace(/,/g, " ");
		}
	} else { // Verifica si se ingresa un solo número y retorna el mismo
		res = array[0];
	}
	document.getElementById("result").style.display = 'block';
	document.getElementById("arrayResult").innerHTML = res; //Llena el div del resultado
}

function reset_result() { //Limpia los resultados
	document.getElementById("result").style.display = 'none';
}