// SCRIPT APPEAR ELEMENT BLOQUE ACADEMIC
let btnAppearElement = document.getElementById("appearElement");

btnAppearElement.addEventListener("click", createElement);

function createElement() {
	var wrappeElement = document.getElementById('information-body-academic'),
		countElementInformationCareer = wrappeElement.querySelectorAll('.information-career').length,
		getNumberLastElement = countElementInformationCareer + 1,
		elementParent = document.createElement('div');

		elementParent.setAttribute('class','information-career fz-0');
		elementParent.setAttribute('data-number',getNumberLastElement);
		elementLineHorizontal = document.createElement('span');
		elementLineHorizontal.setAttribute('class', 'hr');

		elementParent.innerHTML = 	inputItemInformation(getNumberLastElement,'institucion', 'Institución') +
									inputItemInformation(getNumberLastElement,'grado', 'Grado') +
									inputItemInformation(getNumberLastElement,'carrera', 'Carrera') +
									inputItemInformation(getNumberLastElement,'anio', 'Año de Egreso');

		wrappeElement.appendChild(elementParent);
		wrappeElement.appendChild(elementLineHorizontal);

		//VALIDATION INPUT
		elementParent.querySelector("[name^='anio']").oninput = validateInputsNumber;

}

function inputItemInformation(getNumberLastElement,name,text) {

	return '<div class="input-item-information d-ib-two" data-number="'+ getNumberLastElement + '">' +
				'<label class="information-label" for="'+ name + '-'+ getNumberLastElement + '">'+
					text +
				'</label>'+
				'<input class="information-input" type="text" placeholder="'+ text + '" name="' + name + '-' + getNumberLastElement + '" id="' + name + '-' + getNumberLastElement + '">' +
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

//console.log(pass);
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