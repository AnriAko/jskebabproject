'use strict';

const addToOrderButton = document.getElementById('addToOrder');

addToOrderButton.addEventListener('click', function (event) {
	event.preventDefault();
});

addToOrderButton.addEventListener("click", checkForms);

function checkForms() {
	let lastName = document.getElementById('lastName');
	let telNumber = document.getElementById('telNumber')
	let peopleAmount = document.getElementById('peopleAmount');

	let selectDish = document.getElementById('selectDish');
	let dishAmount = document.getElementById('dishAmount')
	let specialRequest = document.getElementById('specialRequest')

	lastName.addEventListener('input', validLastName);
	telNumber.addEventListener('input', validTelNumber);
	peopleAmount.addEventListener('input', validPeopleAmount);

	selectDish.addEventListener('input', validSelectDish);
	dishAmount.addEventListener('input', validDishAmount);
	specialRequest.addEventListener('input', validSpecialRequest);

	function validLastName(){

	}
	function validTelNumber(){

	}
	function validPeopleAmount(){

	}
	function validSelectDish() {
		if (selectDish.value === 'select') {
			selectDish.parentElement.classList.add('wrong-input');
			return false;
		}
		else {
			selectDish.parentElement.classList.remove('wrong-input');
			return true;
		}
	}
	function validDishAmount() {
		if (dishAmount.value > 0 && dishAmount.value < 999) {
			dishAmount.parentElement.classList.remove('wrong-input');
			return true;
		}
		else {
			dishAmount.parentElement.classList.add('wrong-input');
			return false;

		}
	}
	function validSpecialRequest(){

	}
	
}
