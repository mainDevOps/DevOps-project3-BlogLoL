


const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const dateb = document.getElementById('dateb');
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
// const formsucces = document.getElementById('form-succed');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    

	if(usuarioValue === '') {
		setErrorFor(usuario, 'You cannot leave the username blank');
		flag1 = 0;
	} else if (!isusuario(usuarioValue)) {
		setErrorFor(usuario, 'invalid username');
		flag1 = 0;
	} else {
		setSuccessFor(usuario);
		flag1 = 1;
	}

	if(emailValue === '') {
		setErrorFor(email, 'You cannot leave the email blank');
		flag2 = 0;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'invalid email');
		flag2 = 0;
	} else {
		setSuccessFor(email);
		flag2 = 1;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'You cannot leave the password blank');
		flag3 = 0;
	} else if (!ispassword(passwordValue)) {
		setErrorFor(password, 'the password can only have 4 to 6 digits');
		flag3 = 0;
	} else {
		setSuccessFor(password);
		flag3 = 1;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'You cannot leave the password blank');
		flag3 = 0;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'passwords do not match');
		flag3 = 0;
	} else{
		setSuccessFor(password2);
		flag4 = 1;
	}
	console.log(flag1,flag2,flag3,flag4);
 	// if(flag1 === 1 && flag2 === 1 && flag3 === 1 && flag4 ===1){
 	//  	setSuccessFor(formsucces);
	// }else{
	//   	setErrorFor(formsucces, 'incomplete form');

	// }

}    


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;

	// formControl.className = 'form-succed error';
	// small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	// formControl.className = 'form-succed success';
}

function isusuario(usuario) {
	return /^.{4,12}$/.test(usuario);
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function ispassword(password) {
	return /^.{5,12}$/.test(password);
}