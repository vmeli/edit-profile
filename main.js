// SCRIPT APPEAR ELEMENT BLOQUE ACADEMIC
let btnAppearElement = document.getElementById("appearElement");

btnAppearElement.addEventListener("click", createElement);

function createElement() {
	var wrappeElement = document.getElementById('information-body-academic'),
		firstElement = wrappeElement.querySelectorAll('.information-career:last-of-type')[0],
		getNumberLastElement = Number(firstElement.getAttribute('data-number')) + 1,
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
}

function inputItemInformation(getNumberLastElement,name,text) {

	return '<div class="input-item-information d-ib-two" data-number="'+ getNumberLastElement + '">' +
				'<label class="information-label" for="'+ name + '-'+ getNumberLastElement + '">'+
					text +
				'</label>'+
				'<input class="information-input" type="text" placeholder="'+ text + '" name="' + name + '-' + getNumberLastElement + '" id="' + name + '-' + getNumberLastElement + '">' +
			'</div>'	
}

var pass = document.getElementById('pass'),
    passConfirmation = document.getElementById('pass_confirmation'),
    userEmail = document.getElementById('user_email'),
    userCellPhone = document.getElementById('user_cell_phone'),
    userAddress = document.getElementById('user_address'),
    companyPhone = document.getElementById('company_phone'),
    userBody = document.getElementById('user_body'),
    getNumberInformationCareer = Number(document.querySelector('.information-career:last-of-type').getAttribute('data-number'));

console.log(pass);