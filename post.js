	/*************************************************************/
	/******************** Newsletter - Mobile ********************/
	/*************************************************************/	
	const btnMobileNewsletter = document.getElementById('btnMobileNewsletter');	
	let token = document.querySelector(".newsletter__form input[name='_token']");	
	let emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;	

	var btnMainMenuSuscribete = document.getElementById('btn-main-menu-suscribete');
	
	btnMainMenuSuscribete.onclick = function(){
		compNewsletter.classList.toggle('newsletter__floating');
		compNewsletter.style.top = '0';
	}

	function subscribeLR(e) {
		e.preventDefault();
		//console.log('data invalida');
		let dataJson = {
			_token: token.value,
			correo: inputText.value
		}

		var data = JSON.stringify(dataJson);
		var request = new XMLHttpRequest();
		request.open('POST', '/save-suscriptor', true);
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8', 'x-Requested-with');
		request.setRequestHeader('X-CSRF-Token', token.value);		
		request.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status >= 200 && this.status < 400) {					
					let responseJSON = JSON.parse(this.responseText);
					if(responseJSON.message === 'el correo ya esta registrado'){
						spanMessage.style.visibility = 'visible';
						spanMessage.style.display = 'block';
						spanMessage.style.color = '#d82238';
						spanMessage.innerHTML = 'Este correo ya se encuentra registrado.';
						spanMessage.style.fontSize = '1.2rem';
						spanMessage.style.lineHeight = '2.2rem';
						//disabledNewsletter = setInterval(fnDisable,1000);
					}else if(responseJSON.message === 'registro completado'){
						spanMessage.style.visibility = 'visible';
						spanMessage.style.display = 'block';
						spanMessage.style.color = '#6faf2e';
						spanMessage.innerHTML = 'Gracias por registrarte.';
						spanMessage.style.fontSize = '1.2rem';
						spanMessage.style.lineHeight = '2.2rem';						
						localStorage.setItem('subscribeLR', 'actived');
						//disabledNewsletter = setInterval(fnDisable,1000);
					}
				}
			}
		}
		request.send(data);
		request = null;
	}

	btnMobileNewsletter.disabled = true;	

	function validate (e) {		
		console.log('input : ',emailRegex.test(e.target.value))
		//console.log('validate checked : ',cbx_politicas.checked)
		if( emailRegex.test(e.target.value) ){ //el texto ingresado es valido
			console.log('entro al if');
			spanMessage.style.display = 'none';
			cbx_politicas.checked = true;
			btnMobileNewsletter.disabled = false;
			console.log('disabled = false');
			btnMobileNewsletter.style.cursor = 'pointer';
		}else{//el texto no es valido
			spanMessage.style.display = 'none';
			btnMobileNewsletter.disabled = true;
			cbx_politicas.checked = false;
			btnMobileNewsletter.style.cursor = 'no-drop';
            console.log('disabled = true')
        }
	}

	inputText.oninput = validate;

	inputText.onblur = validate;

	//inputText.onfocus = validate;

	//(localStorage.getItem('subscribeLR')) ? sectionNewsletter.style.display = 'none' : '';
	/*if (localStorage.getItem('subscribeLR')) {
		compNewsletter.style.display = 'none';
		console.log('existe el localStorage');
	}*/

	btnMobileNewsletter.onclick = subscribeLR;