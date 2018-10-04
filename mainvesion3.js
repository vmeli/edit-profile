// SCRIPT APPEAR ELEMENT BLOQUE ACADEMIC
let btnAppearElement = document.getElementById("appearElement");

btnAppearElement.addEventListener("click", createElement);

dataSelectCareer();
dataSelectGradesAcademic();
dataSelectInstitution();

var key = 0;

function createElement() {
	var wrappeElement = document.getElementById('information-body-academic'),
		countElementInformationCareer = wrappeElement.querySelectorAll('.information-career').length,
		getNumberLastElement = countElementInformationCareer +1,
		elementParent = document.createElement('div');
		key++;
		elementParent.setAttribute('class','information-career fz-0');
		elementParent.setAttribute('id','information-career-'+'n'+key);
		elementParent.setAttribute('data-number',key);
		elementParent.setAttribute('data-key','n'+key);
		elementLineHorizontal = document.createElement('span');
		elementLineHorizontal.setAttribute('class', 'hr');

		elementParent.innerHTML = 	inputSelectItemInformation('n'+key,'institucion', 'Institución') +
									inputSelectItemInformation('n'+key,'grado', 'Grado') +
									inputSelectItemInformation('n'+key,'carrera', 'Carrera') +
									inputItemInformation('n'+key,'anio', 'Año de Egreso');

		wrappeElement.appendChild(elementParent);
		wrappeElement.appendChild(elementLineHorizontal);

		//VALIDATION INPUT
		//elementParent.querySelector("[name^='anio']").oninput = validateInputsNumber;
		
		var wrapperElementInformationCareer = document.getElementById('information-career-'+'n'+ key);
		var selectInstitution = wrapperElementInformationCareer.querySelector('#institucion-' + 'n'+ key);
		var selectGradeAcademic = wrapperElementInformationCareer.querySelector('#grado-'+ 'n'+ key);
		var selectCareer = wrapperElementInformationCareer.querySelector('#carrera-' + 'n'+ key);


		createElementSelect(selectInstitution, dataInstitution);
		createElementSelect(selectGradeAcademic, dataGradesAcademic);
		createElementSelect(selectCareer, dataCareer);	
}

function inputSelectItemInformation(NumberElement,name,text) {

	return '<div class="input-item-information d-ib-two" data-number="'+ NumberElement + '"'+ 'id="'+ name + '-' + NumberElement + '"' + '>' +
				'<label class="information-label" for="'+ name + '-'+ NumberElement + '">'+
					text +
				'</label>'+
			'</div>'	
}

function inputItemInformation(NumberElement,name,text) {

	return '<div class="input-item-information d-ib-two" data-number="'+ NumberElement + '">' +
				'<label class="information-label" for="'+ name + '-'+ NumberElement + '">'+
					text +
				'</label>'+
				'<input class="information-input" type="text" placeholder="'+ text + '" name="' + name + '-' + NumberElement + '" id="' + name + '-' + NumberElement + '">' +
			'</div>'	
}


// VALIDATION FORM

var	pass             = document.getElementById('pass'),
    passConfirmation = document.getElementById('pass_confirmation'),
    userEmail 		 = document.getElementById('user_email'),
 	userCellPhone    = document.getElementById('user_cell_phone'),
    userAddress      = document.getElementById('user_address'),
	companyPhone     = document.getElementById('company_phone'),
    userBody         = document.getElementById('user_body'),
    uid              = document.getElementById('uid').
    sid              = document.getElementById('sid');

var wrappeElement = document.getElementById('information-body-academic'),
	setElementInformationCareer = wrappeElement.querySelectorAll('.information-career'),
	countElementInformationCareer = setElementInformationCareer.length;

	userCellPhone.oninput = validateInputsNumber;
	companyPhone.oninput  = validateInputsNumber;
	userEmail.oninput     = validateInputEmail;
	//pass.oninput          = validatePassToPassConfirmation;


if(countElementInformationCareer) {
	let setInputAnioEgresado = Array.from(wrappeElement.querySelectorAll("[name^='anio']"));
	setInputAnioEgresado.map((x) => {
		x.oninput = validateInputsNumber;
	})
}

function validateInputEmail(e) {
    var email, isValid, regexEmail;
    //formResponse[0].classList.remove("show-msg");
    regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email = e.target.value;
        isValid = true;
        if (!regexEmail.test(email) || email.length < 3) {
            e.target.classList.add("input-error");
            e.target.classList.remove("ready");
        isValid = false;
      } else {
        e.target.classList.remove("input-error");
        e.target.classList.add("ready");
      }
     // console.log(isValid);
      return isValid;
}

function validateInputsNumber(e) {
	e.target.value = e.target.value.replace(/[^0-9\.]+/g, "");
	if (e.target.value.length > 0){
        e.target.classList.remove("input-error");
    }else{
        e.target.classList.add("input-error");
    }
}

    
function validateInputsText(e) {
    //ev.target.value = ev.target.value.replace(/[^a-zA-Z\s]/g, "");
    e.target.value = e.target.value.replace(/[^A-Za-zÑñÁáÉéÍíÓóÚúÜü ]/g, "");

    if (e.target.value.length > 0){
        e.target.classList.remove("input-error");
    }else{
        e.target.classList.add("input-error");
    }
}

//function validatePassToPassConfirmation(e) {
//	console.log(pass.value);
//}
function validateEmptyInputStatic() {
	if( pass.value.trim() =="" || passConfirmation.value.trim() == "" || userEmail.value.trim() == "" ||
		userCellPhone.value.trim() == "" || userAddress.value.trim() == "" || companyPhone.value.trim() == "" || userBody.value.trim() == "") {
		return false;
	}
	return true;
}

// SEND DATA FORM 
var btnSubmit = document.getElementById('sendData'); 

btnSubmit.addEventListener('click', sendMessage);
//btnSubmit.onclick = sendMessage;

function sendMessage(e) {

	e.preventDefault();
	var isCorrectInputStaticDatos = validateEmptyInputStatic();
	var isCorrectInputDinamicDatos = validateEmptyInputDinamic();
	var isCorrectMatchPass = MatchValue(); 
		console.log(data, isCorrectInputStaticDatos, isCorrectInputDinamicDatos, isCorrectMatchPass);

	if (isCorrectInputStaticDatos === true && isCorrectInputDinamicDatos === true && isCorrectMatchPass === true) {

	console.log("preparando para el envío");
		// ESTRUCTURA DE LA DATA A ENVIAR
		var data               = {};	
		data.uid               = uid.value.trim();
		data.sid               = sid.value.trim();
		data.pass              = pass.value.trim();
		data.pass_confirmation = passConfirmation.value.trim();
		data.personal_email    = userEmail.value.trim();
		data.user_cell_phone   = userCellPhone.value.trim();
		data.user_address      = userAddress.value.trim();
		data.company_phone     = companyPhone.value.trim();
		data.user_body         = userBody.value.trim();

		var json               = JSON.stringify(data);

		console.log(data);

		var request = new XMLHttpRequest();
		request.open('POST', 'http://qaintranet.glr.pe/api/user/update', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		//request.setRequestHeader('X-CSRF-Token', "valor del token{{ csrf_field() }}	");

		xhr.onload = function () {
			//console.log('entro al XMLHttpRequest');
			var responseServer = JSON.parse(xhr.responseText);
			if (xhr.readyState == 4 && xhr.status == "200") {
				console.log(responseServer);
				//var modalRegistro = document.getElementById('sucessRegister');
				//modalRegistro.style.display = 'block';
				//modalRegistro.classList.add('twinkle');
				console.log('se registro !!');
			} else {
				//console.log("ERRORRR");
				console.log(responseServer);
			}
		}

		xhr.send(json);


	}else {
		console.log("no mandar data");
		//message error
	}

	function validateEmptyInputDinamic() {
		if(countElementInformationCareer) {
			
			var setInputCareer = Array.from(document.querySelectorAll('.information-career .information-input'));
			
			var boolean = true;

			setInputCareer.map((x,item) => {
								
				boolean = boolean && !(x.value.trim() == "");
			});
		}else {
			boolean = true;
			console.log("no hay datos académicos");
		}
		return boolean;
	}

	function MatchValue() {
		console.log(pass.value , passConfirmation.value);
		if((pass.value.trim() !="") && (passConfirmation.value.trim() !="") && (pass.value === passConfirmation.value)) {
			return true;
		}
		return false;
	}
}


function dataSelectCareer() {
	let request = new XMLHttpRequest();
	request.open('GET','http://qaintranet.glr.pe/api/term-list?_format=json&vid=careers&options=1&order=asc&order-field=name', true);
	request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
	// Success!
		window.dataCareer = JSON.parse(request.responseText)['data'];
		//console.log(dataSelectCareer);
	} else {
	// We reached our target server, but it returned an error

	}
	};

	request.onerror = function() {
	// There was a connection error of some sort
	};

	request.send();
}

function dataSelectGradesAcademic() {
	let request = new XMLHttpRequest();
	request.open('GET','http://qaintranet.glr.pe/api/term-list?_format=json&vid=academic_grades&options=1&order=asc&order-field=name', true);
	request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
	// Success!
		window.dataGradesAcademic = JSON.parse(request.responseText)['data'];
		//console.log(dataSelectGradesAcademic);
	} else {
	// We reached our target server, but it returned an error

	}
	};

	request.onerror = function() {
	// There was a connection error of some sort
	};

	request.send();
}
function dataSelectInstitution() {
	let request = new XMLHttpRequest();
	console.log(request.status);
	request.open('GET','http://qaintranet.glr.pe/api/term-list?_format=json&vid=academic_institutions&options=1&order=asc&order-field=name', true);
	console.log(request.status);
	request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
	// Success!
		window.dataInstitution = Array.from(JSON.parse(request.responseText)['data']);
		//console.log(dataSelectInstitution);
	} else {
	// We reached our target server, but it returned an error

	}
	};

	request.onerror = function() {
	// There was a connection error of some sort
	};

	request.send();
}

function createElementSelect(selectInstitucion, dataSelect) {
		let elementParentSelect = document.createElement('select');
			elementParentSelect.setAttribute('class', 'information-input');
			elementParentSelect.setAttribute('name', 'por definir');
			elementParentSelect.setAttribute('id', 'por definir');

		let elementOptionText = document.createElement('option');
			elementOptionText.setAttribute('value', '0');


			for ( let x = 0; x < dataSelect.length; x++) {
				let option = document.createElement('option'),
					textOption = document.createTextNode(dataSelect[x]['name']);

					option.setAttribute('value', dataSelect[x]['tid']);
					option.appendChild(textOption);

					elementParentSelect.appendChild(option);
					console.log(option);
			}
			selectInstitucion.appendChild(elementParentSelect);
}



/*function createElementSelect(selectInstitucion, dataSelect) {
		let elementParentSelect = document.createElement('select');
			elementParentSelect.setAttribute('class', 'information-input');
			elementParentSelect.setAttribute('name', 'por definir');
			elementParentSelect.setAttribute('id', 'por definir');

			dataSelect.map((x) => {
				let option = document.createElement('option'),
					textOption = document.createTextNode(x['name']);

					option.setAttribute('value', x['tid']);
					option.appendChild(textOption);

					elementParentSelect.appendChild(option);
					console.log(option);
			});
			selectInstitucion.appendChild(elementParentSelect);
}
function createElementSelect(selectInstitucion, dataSelect) {
	var elementParentSelect = document.createElement('select');
	elementParentSelect.setAttribute('class', 'information-input');
	elementParentSelect.setAttribute('name', 'por definir');
	elementParentSelect.setAttribute('id', 'por definir');

	dataSelect.forEach(function (x) {
		var option = document.createElement('option'),
		    textOption = document.createTextNode(x['name']);

		option.setAttribute('value', x['tid']);
		option.appendChild(textOption);

		elementParentSelect.appendChild(option);
		console.log(option);
	});
	selectInstitucion.appendChild(elementParentSelect);
}



*/