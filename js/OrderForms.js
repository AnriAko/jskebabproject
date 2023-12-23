'use strict';

let addToOrderButton = document.getElementById('addToOrder');

let clientLastName = document.getElementById('lastName');
let clientTelNumber = document.getElementById('telNumber');
let clientPeopleAmount = document.getElementById('peopleAmount');
let dishSelect = document.getElementById('selectDish');
let dishAmount = document.getElementById('dishAmount');
let dishSpecialRequest = document.getElementById('specialRequest');

validForms();

addToOrderButton.addEventListener('click', function (event) {
	event.preventDefault();
});
addToOrderButton.addEventListener('click', checkAddToOrderForms);

function validForms() {

	clientLastName.addEventListener('input', validLastName);
	clientTelNumber.addEventListener('input', validTelNumber);
	clientPeopleAmount.addEventListener('input', validPeopleAmount);
	dishAmount.addEventListener('input', validDishAmount);
	dishSpecialRequest.addEventListener('input', validSpecialRequest);

	function validLastName(event) {
		// despite number everything
		if (!(Array.from(event.target.value).every(char => isNaN(char)))) {
			let temp = Array.from(clientLastName.value);
			temp.pop();
			clientLastName.value = temp.join('');
		}
	}
	function validTelNumber(event) {
		if (isNaN(event.target.value) || event.target.value.includes(' ') || event.target.value.includes(' ')) {
			let temp = Array.from(String(clientTelNumber.value));
			temp.pop();
			clientTelNumber.value = temp.join('');
		}
		if (clientTelNumber.value.length > 9) {
			let temp = Array.from(clientTelNumber.value);
			temp.pop();
			clientTelNumber.value = temp.join('');
		}
	}
	function validPeopleAmount(event) {
		if (isNaN(event.target.value) || event.target.value.includes(' ')) {
			let temp = Array.from(String(clientPeopleAmount.value));
			temp.pop();
			clientPeopleAmount.value = temp.join('');
		}

	}
	function validDishAmount(event) {
		if (isNaN(event.target.value) || event.target.value.includes(' ')) {
			let temp = Array.from(String(dishAmount.value));
			temp.pop();
			dishAmount.value = temp.join('');
		}
	}
	function validSpecialRequest(event) {
		if (event.target.value.includes('\n')) {
			let temp = Array.from(dishSpecialRequest.value);
			temp.pop();
			dishSpecialRequest.value = temp.join('');
		}
	}
}
function checkClientInfoForms() {
	checkLastName();
	checkTelNumber();
	checkPeopleAmount();
	clientLastName.addEventListener('input', checkLastName);
	clientTelNumber.addEventListener('input', checkTelNumber);
	clientPeopleAmount.addEventListener('input', checkPeopleAmount);

	if (checkLastName() && checkTelNumber() && checkPeopleAmount()) {
		return true;
	}
	function checkLastName() {
		if (clientLastName.value.length === 0) return wrongInputStyle(clientLastName);
		else return rightInputStyle(clientLastName);
	}
	function checkTelNumber() {
		if (clientTelNumber.value.length < 9) return wrongInputStyle(clientTelNumber);
		else return rightInputStyle(clientTelNumber);
	}
	function checkPeopleAmount() {
		if (clientPeopleAmount.value.length === 0) return wrongInputStyle(clientPeopleAmount);
		else return rightInputStyle(clientPeopleAmount);
	}
}
function checkAddToOrderForms() {
	checkSelectDish();
	checkDishAmount();
	dishSelect.addEventListener('input', checkSelectDish);
	dishAmount.addEventListener('input', checkDishAmount);
	if (checkSelectDish() && checkDishAmount()) {
		return true;
	}
	function checkSelectDish() {
		if (dishSelect.value === 'select') return wrongInputStyle(dishSelect);
		else return rightInputStyle(dishSelect);
	}
	function checkDishAmount() {
		if (dishAmount.value <= 0) return wrongInputStyle(dishAmount);
		else return rightInputStyle(dishAmount);
	}

}
function wrongInputStyle(item) {
	item.parentElement.classList.add('wrong-input');
	return false;
}
function rightInputStyle(item) {
	item.parentElement.classList.remove('wrong-input');
	return true;
}
/* <option value="select" selected>Select</option>
<option value="Pork Kebab">Pork kebab 15L</option>
<option value="Chicken Kebab">Chicken Kebab 12L</option>
<option value="Pork Khinkali">Khinkali with Pork 1.5L</option>
<option value="Beef Khinkali">Khinkali with Beef 1.5L</option>
<option value="Sheep Khinkali">Khinkali with Mutton 1.5L</option>
<option value="Chicken Salad">Chicken Salad 10L</option>
<option value="Olivie Salad">Olivie Salad 8L</option> */
addToOrderButton.addEventListener('click', addDishToOrder)
function addDishToOrder() {
	if (checkAddToOrderForms()) {
		function whichDish(dishName) {
			switch (dishName) {
				case "porkKebab":
					let porkKebab = {
						id: 'porkKebab',
						imgSrc: 'img/pork_kebab.jpg',
						name: 'Pork Kebab',
						cost: 15
					}
					return porkKebab;

				case "chickenKebab":
					let chickenKebab = {
						id: 'chickenKebab',
						imgSrc: 'img/chicken_kebab.jpg',
						name: 'Chicken Kebab',
						cost: 12
					}
					return chickenKebab;

				case "porkKhinkali":
					let porkKhinkali = {
						id: 'porkKhinkali',
						imgSrc: 'img/khinkali.jpg',
						name: 'Pork Khinkali',
						cost: 1.5
					}
					return porkKhinkali;

				case "beefKhinkali":
					let beefKhinkali = {
						id: 'beefKhinkali',
						imgSrc: 'img/khinkali.jpg',
						name: 'Beef Khinkali',
						cost: 1.5
					}
					return beefKhinkali;
					
				case "sheepKhinkali":
					let sheepKhinkali = {
						id: 'sheepKhinkali',
						imgSrc: 'img/khinkali.jpg',
						name: 'Sheep Khinkali',
						cost: 1.5
					}
					return sheepKhinkali;

				case "chickenSalad":
					let chickenSalad = {
						id: 'chickenSalad',
						imgSrc: 'img/chicken_salad.jpg',
						name: 'Chicken Salad',
						cost: 10
					}
						return chickenSalad;

				case "olivieSalad":
					let olivieSalad = {
						id: 'olivieSalad',
						imgSrc: 'img/olivie_salad.jpg',
						name: 'Olivie Salad',
						cost: 8
					}
					return olivieSalad;
					
			}
			

		}

		if (document.getElementById(dishSelect.value) == null) {
			let currentDish = whichDish(dishSelect.value);

			let dishMenu = document.createElement('div');
			dishMenu.classList.add('order-main__orders__list__dish-menu');
			dishMenu.id = currentDish.id;

			initDishMenuImage();
			initDishMenuName();
			initDishMenuAmount();
			initDishMenuIncreaseAmount();
			initDishMenuDecreaseAmount();
			initDishMenuRemoveOrder();
			initDishMenuSummary();
			initDishMenuRequest();
			initDishMenuRequestEdit();
			initDishMenuRequestClean();

			let orderList = document.querySelector('.order-main__orders__list');
			orderList.appendChild(dishMenu);

			function initDishMenuImage() {
				let dishMenuImage = document.createElement('img');
				dishMenuImage.classList.add('order-main__orders__list__dish-menu__image');
				dishMenuImage.src = currentDish.imgSrc;
				dishMenuImage.alt = 'Dish image';
				dishMenu.appendChild(dishMenuImage);
			}
			function initDishMenuName() {
				let dishMenuName = document.createElement('p');
				dishMenuName.classList.add('order-main__orders__list__dish-menu__name');
				dishMenuName.textContent = currentDish.name;
				dishMenu.appendChild(dishMenuName)
			}
			function initDishMenuAmount() {
				let dishMenuAmount = document.createElement('p');
				dishMenuAmount.classList.add('order-main__orders__list__dish-menu__amount');
				dishMenuAmount.textContent = 'Amount: ';
				let dishMenuAmountNumber = document.createElement('span');
				dishMenuAmountNumber.textContent = dishAmount.value;
				dishMenuAmount.appendChild(dishMenuAmountNumber);
				dishMenu.appendChild(dishMenuAmount);
			}
			function initDishMenuIncreaseAmount() {
				let dishMenuIncreaseAmount = document.createElement('button');
				dishMenuIncreaseAmount.classList.add('order-main__orders__list__dish-menu__increase');
				dishMenuIncreaseAmount.textContent = '+';
				dishMenuIncreaseAmount.addEventListener('click', increaseDishAmount);
				dishMenu.appendChild(dishMenuIncreaseAmount);
			}
			function initDishMenuDecreaseAmount() {
				let dishMenuDecreaseAmount = document.createElement('button');
				dishMenuDecreaseAmount.classList.add('order-main__orders__list__dish-menu__decrease');
				dishMenuDecreaseAmount.textContent = '-';
				dishMenuDecreaseAmount.addEventListener('click', decreaseDishAmount);
				dishMenu.appendChild(dishMenuDecreaseAmount);
			}
			function initDishMenuRemoveOrder() {
				let dishMenuRemoveOrder = document.createElement('button');
				dishMenuRemoveOrder.classList.add('order-main__orders__list__dish-menu__remove');
				dishMenuRemoveOrder.textContent = 'x';
				//Async add here
				dishMenuRemoveOrder.addEventListener('click', removeDish);
				dishMenu.appendChild(dishMenuRemoveOrder);
			}
			function initDishMenuSummary() {
				let dishMenuSummary = document.createElement('p');
				dishMenuSummary.classList.add('order-main__orders__list__dish-menu__summary');
				dishMenuSummary.textContent = 'Sum total: ';
				let dishMenuSummaryNumber = document.createElement('span');
				dishMenuSummaryNumber.textContent = parseInt(dishAmount.value) * parseFloat(currentDish.cost);
				dishMenuSummary.appendChild(dishMenuSummaryNumber);
				dishMenuSummary.innerHTML += ' ₾'
				dishMenu.append(dishMenuSummary);
			}
			function initDishMenuRequest() {
				let dishMenuRequest = document.createElement('textarea');
				dishMenuRequest.classList.add('order-main__orders__list__dish-menu__request');
				dishMenuRequest.value = dishSpecialRequest.value;
				dishMenuRequest.readOnly = true;
				dishMenu.append(dishMenuRequest);
			}
			function initDishMenuRequestEdit() {
				let dishMenuRequestEdit = document.createElement('button');
				dishMenuRequestEdit.classList.add('order-main__orders__list__dish-menu__edit-request');
				let dishMenuRequestEditImage = document.createElement('img');
				dishMenuRequestEditImage.classList.add('order-main__orders__list__dish-menu__image');
				dishMenuRequestEditImage.src = 'img/pencil.png';
				dishMenuRequestEdit.appendChild(dishMenuRequestEditImage);
				dishMenuRequestEdit.addEventListener('click', makeEditable);
				dishMenu.appendChild(dishMenuRequestEdit);
			}
			function initDishMenuRequestClean() {
				let dishMenuRequestClean = document.createElement('button');
				dishMenuRequestClean.classList.add('order-main__orders__list__dish-menu__clean-request')
				let dishMenuRequestCleanImage = document.createElement('img');
				dishMenuRequestCleanImage.classList.add('order-main__orders__list__dish-menu__image');
				dishMenuRequestCleanImage.src = 'img/recycle-bin.png';
				dishMenuRequestClean.appendChild(dishMenuRequestCleanImage);
				dishMenuRequestClean.addEventListener('click', cleanRequest);
				dishMenu.appendChild(dishMenuRequestClean);
			}

			function increaseDishAmount(event) {
				let currentDishAmount = event.target.parentElement.querySelectorAll('span')[0];
				let currentSummary = event.target.parentElement.querySelectorAll('span')[1];
				let currentDishAmountNumber = currentDishAmount.textContent;
				currentDishAmount.textContent = parseInt(currentDishAmountNumber)+1;
				let currentDishCost = whichDish(event.target.parentElement.id).cost;
				currentSummary.textContent = parseInt(currentDishAmount.textContent)*parseFloat(currentDishCost);

			}
			function decreaseDishAmount(event) {
				let currentDishAmount = event.target.parentElement.querySelectorAll('span')[0];
				let currentSummary = event.target.parentElement.querySelectorAll('span')[1];
				let currentDishAmountNumber = currentDishAmount.textContent;
				currentDishAmount.textContent = parseInt(currentDishAmountNumber)-1;
				let currentDishCost = whichDish(event.target.parentElement.id).cost;
				currentSummary.textContent = parseInt(currentDishAmount.textContent)*parseFloat(currentDishCost);
			}
			function removeDish(event) {
				let myElement = document.getElementById(event.target.parentElement.id);
				console.log(myElement);
				myElement.remove();
			}
			function makeEditable(event) {
				console.log(event.target.parentElement.parentElement);
				let mySpecialRequest = event.target.parentElement.parentElement.querySelector('.order-main__orders__list__dish-menu__request');
				mySpecialRequest.readOnly = false;
				mySpecialRequest.classList.add('editable');

				let dishMenuRequestEditConfirm = document.createElement('button');
				dishMenuRequestEditConfirm.classList.add('order-main__orders__list__dish-menu__edit-request');
				let dishMenuRequestEditConfirmImage = document.createElement('img');
				dishMenuRequestEditConfirmImage.classList.add('order-main__orders__list__dish-menu__image');
				dishMenuRequestEditConfirmImage.src = 'img/check.png';
				dishMenuRequestEditConfirm.appendChild(dishMenuRequestEditConfirmImage);
				dishMenuRequestEditConfirm.addEventListener('click', confirmEdit);
				dishMenuRequestEditConfirm.style.zIndex = '100';
				dishMenu.appendChild(dishMenuRequestEditConfirm);

			}
			function confirmEdit(event) {
				let mySpecialRequest = event.target.parentElement.parentElement.querySelector('.order-main__orders__list__dish-menu__request');
				mySpecialRequest.readOnly = true;
				mySpecialRequest.classList.remove('editable')
				event.target.parentElement.remove();

			}
			function cleanRequest() {

			}
		}
		else addAmountIfExist(whichDish(dishSelect.value));
		function addAmountIfExist(dishFromMenuObj) {
			let currentAmountOfDishSpan = document.getElementById(dishFromMenuObj.id).querySelectorAll('span')[0];
			currentAmountOfDishSpan.textContent = parseInt(currentAmountOfDishSpan.textContent) + parseInt(dishAmount.value);
			let currentSum = document.getElementById(dishFromMenuObj.id).querySelectorAll('span')[1];
			currentSum.textContent = currentAmountOfDishSpan.textContent * dishFromMenuObj.cost;
			return false;
		}
	}
}