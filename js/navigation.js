'use strict';

let isTouchingFooter = false;
let isPlaceHold = false;

document.addEventListener("scroll", navStickFunction);

function navStickFunction() {

	const headerImageHeight = document.querySelector('.header__image').offsetHeight;
	const footerHeight = document.querySelector('footer').offsetHeight;
	const scrollY = document.documentElement.scrollTop;
	const viewportHeight = window.innerHeight;
	const pageHeight = document.documentElement.scrollHeight;

	let distanceToFooter = pageHeight - scrollY - viewportHeight;

	//When user scrolled TO footer
	(distanceToFooter < footerHeight) && fixTop();
	//When scrolled BACK from footer
	(distanceToFooter > footerHeight && isTouchingFooter) && removeFixTop();
	//When user scrolled header
	(scrollY > headerImageHeight && !isTouchingFooter) && stickTop();
	//When user scroll back to header
	(scrollY < headerImageHeight) && removeStickTop();

	function stickTop(){
		let placeHolder = document.getElementById('placeHolder');
		let navigation = document.getElementById('navigation');

		if(!isPlaceHold){
			placeHolder.style.height = `${navigation.offsetHeight}px`;
			isPlaceHold = true;
		}
		if(!navigation.classList.contains('sticky-nav')){
			navigation.classList.add("sticky-nav");
		}
	}
	function removeStickTop(){
		let placeHolder = document.getElementById('placeHolder');
		let navigation = document.getElementById("navigation");

		placeHolder.style.height = `0px`;
		isPlaceHold = false;
		navigation.classList.remove("sticky-nav");
		console.log('4');
	}
	function fixTop(){
		isTouchingFooter = true;
		let navigation = document.getElementById("navigation");

		navigation.classList.remove("sticky-nav");
		navigation.classList.add('fixed-nav');
		navigation.style.top = `${pageHeight-footerHeight-viewportHeight}px`;

	}
	function removeFixTop(){
		isTouchingFooter = false;
		let navigation = document.getElementById("navigation");
		let placeHolder = document.getElementById('placeHolder');

		placeHolder.style.height = `${navigation.offsetHeight}px`;
		isPlaceHold=true;

		navigation.classList.remove('fixed-nav');
		navigation.style.top='';
		navigation.classList.add('sticky-nav');

	}
}